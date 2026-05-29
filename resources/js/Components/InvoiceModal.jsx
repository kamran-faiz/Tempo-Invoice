import React from 'react';
import { useForm } from '@inertiajs/react';

export default function InvoiceModal({ show, onClose, invoice }) {
  // Determine mode dynamically based on presence of invoice ID
  const isEditMode = !!(invoice?.id || form?.data?.id);

  const form = useForm({
    id: invoice?.id || null,
    client_id: invoice?.client_id || '',
    invoice_number: invoice?.invoice_number || '',
    issue_date: invoice?.issue_date || '',
    due_date: invoice?.due_date || '',
    payment_status: invoice?.payment_status || '',
    fbr_status: invoice?.fbr_status || '',
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

  const updateInvoiceRow = (index, column, newValue) => {
    // 1. Grab a copy of the current list of items
    const freshList = [...form.data.items];

    // 2. Go to the exact row number, find the column, and change it
    freshList[index][column] = newValue;

    // 3. Tell the Inertia form to use this fresh list now
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
    // 1. Convert inputs safely to numbers
    const qty = parseFloat(item.quantity) || 0;
    const price = parseFloat(item.unit_price) || 0;
    const taxPercent = parseFloat(item.tax_rate) || 0;

    // 2. Run the math sequentially
    const amount = qty * price;
    const tax = amount * (taxPercent / 100);
    const total = amount + tax;

    // 3. Return a combined object containing original data + calculated values
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

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-on-background/60 backdrop-blur-sm" onClick={onClose}></div>
          
          {/* Modal Card */}
          <div className="relative w-full max-w-5xl bg-surface-container-lowest rounded-xl border border-outline-variant shadow-2xl overflow-hidden flex flex-col max-h-[calc(100vh-2rem)]">
              
              {/* Modal Header */}
              <div className="px-8 py-5 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                    {isEditMode ? 'Edit Invoice' : 'Create Invoice'}
                  </h2>
                  <button onClick={onClose} className="p-2 hover:bg-surface-container rounded-full text-on-surface-variant transition-colors">
                      <span className="material-symbols-outlined">close</span>
                  </button>
              </div>
              
              {/* Modal Body (Scrollable) */}
              <div className="flex-1 overflow-y-auto p-8 flex flex-col md:flex-row gap-10">
                  
                  {/* Left Column (Main Content) */}
                  <div className="flex-1 space-y-10">
                      
                      {/* Client & Dates Section */}
                      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="col-span-full md:col-span-1">
                              <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Client</label>
                              <div className="relative">
                                  <input 
                                    value={form.data.client_id}
                                    onChange={e => form.setData('client_id', e.target.value)} 
                                    className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
                                    placeholder="Search client..." 
                                    type="text"
                                  />
                                  <span className="material-symbols-outlined absolute right-3 top-3 text-outline">search</span>
                              </div>
                          </div>
                          <div className="md:col-span-1">
                              <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Invoice #</label>
                              <input
                                value={form.data.invoice_number}
                                onChange={e => form.setData('invoice_number', e.target.value)} 
                                className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface-variant cursor-not-allowed outline-none" 
                                readOnly 
                                type="text" 
                                placeholder="Auto-generated"
                              />    
                          </div>
                          <div>
                              <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Invoice Date</label>
                              <input
                                value={form.data.issue_date}
                                onChange={e => form.setData('issue_date', e.target.value)} 
                                className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary outline-none" 
                                type="date"
                              />
                          </div>
                          <div>
                              <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Due Date</label>
                              <input
                                value={form.data.due_date}
                                onChange={e => form.setData('due_date', e.target.value)} 
                                className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary outline-none" 
                                type="date"
                              />
                          </div>
                      </section>
                      
                      {/* Line Items Table */}
                      <section className="space-y-4">
                          <h3 className="font-headline-md text-headline-md">Line Items</h3>
                          <div className="overflow-x-auto">
                              <table className="w-full text-left">
                                  <thead className="border-b border-outline-variant">
                                      <tr>
                                          <th className="pb-3 pr-4 font-label-sm text-label-sm text-on-surface-variant w-1/4">PRODUCT</th>
                                          <th className="pb-3 px-4 font-label-sm text-label-sm text-on-surface-variant">DESCRIPTION</th>
                                          <th className="pb-3 px-4 font-label-sm text-label-sm text-on-surface-variant w-16">QTY</th>
                                          <th className="pb-3 px-4 font-label-sm text-label-sm text-on-surface-variant w-28">PRICE</th>
                                          <th className="pb-3 px-4 font-label-sm text-label-sm text-on-surface-variant w-24">TAX %</th>
                                          <th className="pb-3 pl-4 font-label-sm text-label-sm text-on-surface-variant w-32 text-right">TOTAL</th>
                                          <th className="pb-3 pl-4 w-10"></th>
                                      </tr>
                                  </thead>
                                  <tbody className="divide-y divide-outline-variant">
                                      {computedItems.map((item, index) => (
                                      <tr key={index} className="group">
                                          <td className="py-4 pr-4">
                                              <select 
                                                value={item.product_id}
                                                onChange={e => updateInvoiceRow(index, 'product_id', e.target.value)} 
                                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none"
                                              >
                                                  <option value="">Select Product...</option>
                                                  <option value="1">Cloud Infrastructure</option>
                                                  <option value="2">Security Audit</option>
                                              </select>
                                          </td>
                                          <td className="py-4 px-4">
                                              <input 
                                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none" 
                                                type="text" 
                                                value={item.product_name}
                                                onChange={e => updateInvoiceRow(index, 'product_name', e.target.value)}
                                              />
                                          </td>
                                          <td className="py-4 px-4">
                                              <input 
                                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none" 
                                                type="number" 
                                                value={item.quantity}
                                                onChange={e => updateInvoiceRow(index, 'quantity', e.target.value)}
                                              />
                                          </td>
                                          <td className="py-4 px-4">
                                              <input 
                                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none" 
                                                type="number" 
                                                value={item.unit_price}
                                                onChange={e => updateInvoiceRow(index, 'unit_price', e.target.value)}
                                              />
                                          </td>
                                          <td className="py-4 px-4">
                                              <input 
                                                className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 font-body-md outline-none" 
                                                type="number" 
                                                value={item.tax_rate}
                                                onChange={e => updateInvoiceRow(index, 'tax_rate', e.target.value)}
                                              />
                                          </td>
                                          <td className="py-4 pl-4 text-right font-body-md">
                                            {item.total.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                          </td>
                                          <td className="py-4 pl-4 text-center">
                                              <button onClick={() => removeInvoiceRow(index)} type="button" className="text-outline hover:text-error transition-colors">
                                                  <span className="material-symbols-outlined text-lg">delete</span>
                                              </button>
                                          </td>
                                      </tr>
                                     ))}
                                  </tbody>
                              </table>
                          </div>
                          <button onClick={addInvoiceRow} type="button" className="flex items-center gap-2 px-4 py-2 border border-primary text-primary font-label-md text-label-md rounded-lg hover:bg-primary/5 transition-colors">
                              <span className="material-symbols-outlined text-lg">add</span>
                              Add Item
                          </button>
                      </section>
                      
                      {/* Totals & Notes */}
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
                          <div className="bg-surface-container-low rounded-xl p-6 space-y-3">
                              <div className="flex justify-between font-body-md">
                                  <span className="text-on-surface-variant">Subtotal</span>
                                  <span>PKR {globalAmount.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                              </div>
                              <div className="flex justify-between font-body-md">
                                  <span className="text-on-surface-variant">Tax Total</span>
                                  <span>PKR {globalTax.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                              </div>
                              <div className="pt-3 border-t border-outline-variant flex justify-between items-center">
                                  <span className="font-headline-md text-headline-md text-on-surface">Grand Total</span>
                                  <span className="font-display-lg text-display-lg text-primary">
                                      PKR {globalTotal.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                  </span>
                              </div>
                          </div>
                      </section>
                  </div>
                  
                  {/* Right Column (Sidebar/Summary) */}
                  <div className="w-full md:w-80 space-y-6">
                      {/* FBR Compliance Card */}
                      <div className="bg-white border border-outline-variant rounded-xl p-6 space-y-4">
                          <div className="flex items-center justify-between">
                              <h4 className="font-label-md text-label-md font-bold text-on-surface">FBR Compliance</h4>
                              <span className="material-symbols-outlined text-on-surface-variant">verified_user</span>
                          </div>
                          <div className="space-y-2">
                              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Status</p>
                              <div className="flex items-center gap-2">
                                  <span className="w-3 h-3 rounded-full bg-outline"></span>
                                  <span className="font-body-md font-medium">{form.data.fbr_status || 'Not Submitted'}</span>
                              </div>
                          </div>
                          <div className="space-y-2">
                              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">IRN Number</p>
                              <p className="font-body-md text-on-surface-variant italic">
                                {form.data.fbr_invoice_number || 'Will be generated on save'}
                              </p>
                          </div>
                          <div className="bg-surface-container rounded-lg p-4 flex gap-3">
                              <span className="material-symbols-outlined text-primary text-xl">info</span>
                              <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
                                  Once submitted to FBR, this document becomes a legal tax instrument and cannot be edited.
                              </p>
                          </div>
                      </div>
                      
                      {/* Summary Metadata Card */}
                      <div className="bg-surface-variant/30 rounded-xl p-6 space-y-4 border border-outline-variant/50">
                          <h4 className="font-label-md text-label-md font-bold text-on-surface">Summary</h4>
                          <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                  <span className="font-label-sm text-label-sm text-on-surface-variant">Created By</span>
                                  <span className="font-label-md text-label-md">Ali Khan</span>
                              </div>
                              <div className="flex justify-between items-center">
                                  <span className="font-label-sm text-label-sm text-on-surface-variant">Currency</span>
                                  <span className="font-label-md text-label-md">PKR</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  
              </div>
              
              {/* Modal Footer */}
              <div className="px-8 py-6 border-t border-outline-variant bg-surface-bright flex flex-col md:flex-row justify-end gap-4">
                  <button onClick={onClose} type="button" className="px-6 py-2.5 border border-outline text-on-surface-variant font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors">
                      Cancel
                  </button>
                  <button type="button" className="px-6 py-2.5 border border-primary text-primary font-label-md text-label-md rounded-lg hover:bg-primary/5 transition-colors">
                      Save as Draft
                  </button>
                  <button type="button" className="px-8 py-2.5 bg-primary text-on-primary font-label-md text-label-md font-bold rounded-lg hover:opacity-90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">send</span>
                      {isEditMode ? 'Update & Resubmit' : 'Save & Submit to FBR'}
                  </button>
              </div>
              
          </div>
        </div>
      )}
    </>
  );
}