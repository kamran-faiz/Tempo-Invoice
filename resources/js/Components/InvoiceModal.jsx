import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';

export default function InvoiceModal({ show, onClose, invoice, clients = [], products = [] }) {
  const isEditMode = !!invoice?.id;

  const form = useForm({
    id: invoice?.id || null,
    client_id: invoice?.client_id || '',
    invoice_number: invoice?.invoice_number || '',
    issue_date: invoice?.issue_date || '',
    due_date: invoice?.due_date || '',
    payment_status: invoice?.payment_status || 'unpaid',
    fbr_status: invoice?.fbr_status || 'pending',
    fbr_invoice_number: invoice?.fbr_invoice_number || '',
    notes: invoice?.notes || '',
    items: invoice?.items?.length > 0 
      ? invoice.items.map(item => ({
          id: item.id || null,
          product_id: item.product_id || '',
          product_name: item.product_name || '',
          quantity: item.quantity || 1,
          unit_price: item.unit_price || 0,
          tax_rate: item.tax_rate || 18, 
        }))
      : [{ id: null, product_id: '', product_name: '', quantity: 1, unit_price: 0, tax_rate: 18 }]
  });

  useEffect(() => {
    if (show) {
      form.setData({
        id: invoice?.id || null,
        client_id: invoice?.client_id || '',
        invoice_number: invoice?.invoice_number || '',
        issue_date: invoice?.issue_date || '',
        due_date: invoice?.due_date || '',
        payment_status: invoice?.payment_status || 'unpaid',
        fbr_status: invoice?.fbr_status || 'pending',
        fbr_invoice_number: invoice?.fbr_invoice_number || '',
        notes: invoice?.notes || '',
        items: invoice?.items?.length > 0 
          ? invoice.items.map(item => ({
              id: item.id || null,
              product_id: item.product_id || '',
              product_name: item.product_name || '',
              quantity: item.quantity || 1,
              unit_price: item.unit_price || 0,
              tax_rate: item.tax_rate || 18, 
            }))
          : [{ id: null, product_id: '', product_name: '', quantity: 1, unit_price: 0, tax_rate: 18 }]
      });
      form.clearErrors();
    }
  }, [invoice, show]);

  const updateInvoiceRow = (index, column, newValue) => {
    const freshList = [...form.data.items];
    
    // If they change the product dropdown, auto-fill the product name and default price if available
    if (column === 'product_id') {
      const selectedProduct = products.find(p => String(p.id) === String(newValue));
      if (selectedProduct) {
        freshList[index]['product_name'] = selectedProduct.name || '';
        freshList[index]['unit_price'] = selectedProduct.price || selectedProduct.unit_price || 0;
      }
    }

    freshList[index][column] = newValue;
    form.setData('items', freshList);
  };

  const addInvoiceRow = () => {
    form.setData('items', [
      ...form.data.items,
      { id: null, product_id: '', product_name: '', quantity: 1, unit_price: 0, tax_rate: 18 }
    ]);
  };

  const removeInvoiceRow = (indexToRemove) => {
    if (form.data.items.length > 1) {
      const freshList = form.data.items.filter((_, index) => index !== indexToRemove);
      form.setData('items', freshList);
    }
  };

  const computedItems = form.data.items.map((item) => {
    const qty = parseFloat(item.quantity) || 0;
    const price = parseFloat(item.unit_price) || 0;
    const taxPercent = parseFloat(item.tax_rate) || 0;

    const amount = qty * price;
    const tax = amount * (taxPercent / 100);
    const total = amount + tax;

    return {
      ...item,
      amount,
      tax,
      total
    };
  });

  const globalAmount = computedItems.reduce((sum, item) => sum + item.amount, 0);
  const globalTax = computedItems.reduce((sum, item) => sum + item.tax, 0);
  const globalTotal = globalAmount + globalTax;

  const submit = (e) => {
    e.preventDefault();

    form.transform((data) => ({
      ...data,
      amount: globalAmount,
      tax: globalTax,
      total: globalTotal,
      items: computedItems
    }));

    if (isEditMode) {
      form.put(route('invoices.update', form.data.id), {
        onSuccess: () => onClose(),
      });
    } else {
      form.post(route('invoices.store'), {
        onSuccess: () => onClose(),
      });
    }
  };

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-on-background/60 backdrop-blur-sm" onClick={onClose}></div>
          
          <form 
            onSubmit={submit} 
            className="relative w-full max-w-6xl bg-surface-container-lowest rounded-xl border border-outline-variant shadow-2xl overflow-hidden flex flex-col max-h-[calc(100vh-2rem)]"
          >
            <div className="px-8 py-5 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                  {isEditMode ? 'Edit Invoice' : 'Create Invoice'}
                </h2>
                <button type="button" onClick={onClose} className="p-2 hover:bg-surface-container rounded-full text-on-surface-variant transition-colors">
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 flex flex-col lg:flex-row gap-10">
                <div className="flex-1 space-y-10">
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-full md:col-span-1">
                          <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Select Client</label>
                          <select
                              value={form.data.client_id || ''}
                              onChange={(e) => form.setData('client_id', e.target.value)}
                              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-body-md font-body-md text-on-surface"
                              required
                          >
                              <option value="" disabled>-- Choose a Client --</option>
                              {clients.map((client) => (
                                  <option key={client.id} value={client.id}>
                                      {client.name}
                                  </option>
                              ))}
                          </select>
                          {form.errors.client_id && (
                              <span className="text-error text-label-sm mt-1 block">{form.errors.client_id}</span>
                          )}
                        </div>
                        <div className="md:col-span-1">
                            <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Invoice #</label>
                            <input
                              value={form.data.invoice_number}
                              onChange={e => form.setData('invoice_number', e.target.value)} 
                              className={`w-full border rounded-lg px-4 py-3 font-body-md outline-none transition-all ${
                                isEditMode 
                                  ? 'bg-surface-container border-outline-variant text-on-surface-variant cursor-not-allowed' 
                                  : 'bg-white border-outline-variant focus:ring-2 focus:ring-primary'
                              }`} 
                              readOnly={isEditMode}
                              required={!isEditMode}
                              type="text" 
                              placeholder={isEditMode ? "Auto-generated" : "Enter Invoice Number"}
                            />    
                            {form.errors.invoice_number && (
                                <span className="text-error text-label-sm mt-1 block">{form.errors.invoice_number}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Invoice Date</label>
                            <input
                              value={form.data.issue_date}
                              onChange={e => form.setData('issue_date', e.target.value)} 
                              className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary outline-none" 
                              type="date"
                              required
                            />
                            {form.errors.issue_date && (
                                <span className="text-error text-label-sm mt-1 block">{form.errors.issue_date}</span>
                            )}
                        </div>
                        <div>
                            <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Due Date</label>
                            <input
                              value={form.data.due_date}
                              onChange={e => form.setData('due_date', e.target.value)} 
                              className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary outline-none" 
                              type="date"
                              required
                            />
                            {form.errors.due_date && (
                                <span className="text-error text-label-sm mt-1 block">{form.errors.due_date}</span>
                            )}
                        </div>
                    </section>
                    
                    <section className="space-y-4">
                        <h3 className="font-headline-md text-headline-md">Line Items</h3>
                        <div className="overflow-x-auto border border-outline-variant rounded-xl bg-surface-bright p-2">
                            <div className="min-w-[900px]">
                              <table className="w-full text-left table-fixed">
                                  <thead className="border-b border-outline-variant">
                                      <tr>
                                          <th className="pb-3 pr-4 font-label-sm text-label-sm text-on-surface-variant w-1/3">PRODUCT</th>
                                          <th className="pb-3 px-4 font-label-sm text-label-sm text-on-surface-variant w-1/3">DESCRIPTION / ITEM NAME</th>
                                          <th className="pb-3 px-4 font-label-sm text-label-sm text-on-surface-variant w-20 text-center">QTY</th>
                                          <th className="pb-3 px-4 font-label-sm text-label-sm text-on-surface-variant w-32">PRICE</th>
                                          <th className="pb-3 px-4 font-label-sm text-label-sm text-on-surface-variant w-24">TAX %</th>
                                          <th className="pb-3 pl-4 font-label-sm text-label-sm text-on-surface-variant w-36 text-right">TOTAL</th>
                                          <th className="pb-3 pl-4 w-12"></th>
                                      </tr>
                                  </thead>
                                  <tbody className="divide-y divide-outline-variant">
                                      {computedItems.map((item, index) => (
                                      <tr key={index} className="group">
                                          <td className="py-4 pr-2 vertical-align-top">
                                              <select 
                                                value={item.product_id}
                                                onChange={e => updateInvoiceRow(index, 'product_id', e.target.value)} 
                                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none focus:ring-2 focus:ring-primary"
                                                required
                                              >
                                                  <option value="">Select Product...</option>
                                                  {products.map((product) => (
                                                    <option key={product.id} value={product.id}>
                                                      {product.name}
                                                    </option>
                                                  ))}
                                              </select>
                                          </td>
                                          <td className="py-4 px-2">
                                              <input 
                                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none focus:ring-2 focus:ring-primary" 
                                                type="text" 
                                                placeholder="Enter line item description"
                                                value={item.product_name}
                                                onChange={e => updateInvoiceRow(index, 'product_name', e.target.value)}
                                                required
                                              />
                                          </td>
                                          <td className="py-4 px-2">
                                              <input 
                                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none focus:ring-2 focus:ring-primary text-center" 
                                                type="number" 
                                                min="1"
                                                value={item.quantity}
                                                onChange={e => updateInvoiceRow(index, 'quantity', e.target.value)}
                                                required
                                              />
                                          </td>
                                          <td className="py-4 px-2">
                                              <input 
                                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none focus:ring-2 focus:ring-primary" 
                                                type="number" 
                                                step="0.01"
                                                min="0"
                                                value={item.unit_price}
                                                onChange={e => updateInvoiceRow(index, 'unit_price', e.target.value)}
                                                required
                                              />
                                          </td>
                                          <td className="py-4 px-2">
                                              <input 
                                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none focus:ring-2 focus:ring-primary" 
                                                type="number" 
                                                min="0"
                                                value={item.tax_rate}
                                                onChange={e => updateInvoiceRow(index, 'tax_rate', e.target.value)}
                                                required
                                              />
                                          </td>
                                          <td className="py-4 pl-4 text-right font-body-md font-medium text-on-surface">
                                            {item.total.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                          </td>
                                          <td className="py-4 pl-4 text-center">
                                              <button onClick={() => removeInvoiceRow(index)} type="button" className="text-outline hover:text-error transition-colors p-1 rounded-full hover:bg-error/5">
                                                  <span className="material-symbols-outlined text-lg block">delete</span>
                                              </button>
                                          </td>
                                      </tr>
                                     ))}
                                  </tbody>
                              </table>
                            </div>
                        </div>
                        <button onClick={addInvoiceRow} type="button" className="flex items-center gap-2 px-4 py-2 border border-primary text-primary font-label-md text-label-md rounded-lg hover:bg-primary/5 transition-colors">
                            <span className="material-symbols-outlined text-lg">add</span>
                            Add Item
                        </button>
                    </section>
                    
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="block font-label-md text-label-md text-on-surface-variant">Notes</label>
                            <textarea 
                              value={form.data.notes} 
                              onChange={e => form.setData('notes', e.target.value)}
                              className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary outline-none transition-all" 
                              placeholder="Optional notes to client..." 
                              rows={4}
                            ></textarea>
                        </div>
                        <div className="bg-surface-container-low rounded-xl p-6 space-y-3 h-fit">
                            <div className="flex justify-between font-body-md">
                                <span className="text-on-surface-variant">Subtotal</span>
                                <span className="font-medium text-on-surface">PKR {globalAmount.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className="flex justify-between font-body-md">
                                <span className="text-on-surface-variant">Tax Total</span>
                                <span className="font-medium text-on-surface">PKR {globalTax.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className="pt-3 border-t border-outline-variant flex justify-between items-center">
                                <span className="font-headline-md text-headline-md text-on-surface font-bold">Grand Total</span>
                                <span className="font-display-lg text-display-lg text-primary font-bold">
                                    PKR {globalTotal.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
                
                <div className="w-full lg:w-80 space-y-6">
                    <div className="bg-white border border-outline-variant rounded-xl p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h4 className="font-label-md text-label-md font-bold text-on-surface">Invoice Controls</h4>
                            <span className="material-symbols-outlined text-on-surface-variant">settings</span>
                        </div>
                        <div className="space-y-2">
                            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Payment Status</label>
                            <select
                                value={form.data.payment_status}
                                onChange={e => form.setData('payment_status', e.target.value)}
                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="unpaid">Unpaid</option>
                                <option value="paid">Paid</option>
                                <option value="overdue">Overdue</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">FBR Status</label>
                            <select
                                value={form.data.fbr_status}
                                onChange={e => form.setData('fbr_status', e.target.value)}
                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="pending">Pending</option>
                                <option value="submitted">Submitted</option>
                                <option value="validated">Validated</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">FBR IRN Number</label>
                            <input
                                type="text"
                                value={form.data.fbr_invoice_number}
                                onChange={e => form.setData('fbr_invoice_number', e.target.value)}
                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Optional IRN string"
                            />
                        </div>
                    </div>
                    
                    <div className="bg-surface-variant/30 rounded-xl p-6 space-y-4 border border-outline-variant/50">
                        <h4 className="font-label-md text-label-md font-bold text-on-surface">Summary Matrix</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="font-label-sm text-label-sm text-on-surface-variant">Currency</span>
                                <span className="font-label-md text-label-md font-medium">PKR</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className="px-8 py-6 border-t border-outline-variant bg-surface-bright flex flex-col md:flex-row justify-end gap-4">
                <button onClick={onClose} type="button" className="px-6 py-2.5 border border-outline text-on-surface-variant font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors">
                    Cancel
                </button>
                <button 
                    type="submit" 
                    disabled={form.processing} 
                    className="px-8 py-2.5 bg-primary text-on-primary font-label-md text-label-md font-bold rounded-lg hover:opacity-90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                >
                    <span className="material-symbols-outlined text-lg">save</span>
                    {isEditMode ? 'Update Invoice' : 'Save Invoice'}
                </button>
            </div>
            
          </form>
        </div>
      )}
    </>
  );
}