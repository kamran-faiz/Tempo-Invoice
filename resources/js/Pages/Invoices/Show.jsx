import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react'
import {router} from '@inertiajs/react'


const Show = ({invoice}) => {
    const subTotal = invoice?.items?.reduce((sum , item) => sum + (item.quantity * item.unit_price) , 0 || 0);
    const taxTotal = invoice?.items?.reduce((sum, item) => sum + Number(item.tax || 0), 0) || 0;
    const grandTotal = subTotal + taxTotal;
    const handleDeleteInvoice = (id) => {
            if (confirm('Are you sure you want to delete this invoice?')) {
                router.delete(route('invoices.destroy', id))
            }
        }
    const handleSubmit = () => {
        router.post(route('invoices.submitToFbr' , {invoice : invoice.id}))
    }
    return (
    <AuthenticatedLayout title="Invoice Details">
    {/* // <!-- Canvas Content --> */}
<div className="p-8 max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-gutter ">
{/* <!-- Left Column: The Invoice Document --> */}
<div className="col-span-12 lg:col-span-8">
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-10 shadow-sm">
{/* <!-- Invoice Header --> */}
<div className="flex justify-between items-start mb-12">

    <Link 
    href={route('invoices.index')} 
    className="inline-flex items-center gap-1.5 text-body-md text-primary font-medium hover:underline mb-4 group"
  >
    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">arrow_back</span>
    Back to Invoices
  </Link>
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" data-icon="payments" style={{fontVariationSettings: "'FILL' 1"}}>payments</span>
</div>
<span className="font-headline-md text-headline-md text-on-surface tracking-tight">Tempo Invoice</span>
</div>
<p className="text-label-sm text-on-surface-variant">Precision Fintech Solutions</p>
</div>
<div className="text-right">
<h3 className="font-display-lg text-display-lg text-on-surface">Invoice Number</h3>
<p className="text-label-md text-on-surface-variant">{invoice?.invoice_number}</p>
<div className="mt-4 flex justify-end">
<div className="w-24 h-24 border border-outline-variant p-1 bg-white">
<img alt="FBR QR Code" className="w-full h-full object-contain" data-alt="A high-resolution, sharp QR code graphic placed on a white background. The QR code represents digital validation data for a Pakistani federal tax invoice. It is minimalist and functional, designed to be scanned by mobile devices for immediate verification of invoice authenticity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGBz6N529V-4ggzKJfQfNUkKQ0l4wOUWUmwe4JxOtK0g9LAO667tdCMGyZKKS4vlN-2puwSbewShHEPMItdhgVC2_0RCtuRJJuYfGyrx5ymp0Cn2R4J4FG1joZgORyDv7nhsavOO_kItPS-uFldL4nJ9uTP41UeNVwP8A3yDVdKBiK7mtjhxtb-Zdh5zPpp4M7ow9T261uPIurQl9wWk1TN54-g97jzD3Ge5JgzN3CB8MCCqQraOVaHgaefRhUN4_gI2YSGI51mI-R"/>
</div>
</div>
</div>
</div>
{/* <!-- Business Info Grid --> */}
<div className="grid grid-cols-2 gap-12 mb-12 border-t border-outline-variant pt-8">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">From</p>
<h4 className="font-headline-md text-headline-md text-on-surface">Indus Tech Solutions</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Karachi, Sindh, Pakistan</p>
<p className="font-body-md text-body-md text-on-surface-variant">NTN: 1234567-8</p>
</div>
<div className="text-right lg:text-left">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">To</p>
<h4 className="font-headline-md text-headline-md text-on-surface">{invoice?.client?.name}</h4>
<p className="font-body-md text-body-md text-on-surface-variant">{invoice?.client?.address}</p>
<p className="font-body-md text-body-md text-on-surface-variant">{invoice?.client?.ntn ? `NTN: ${invoice?.client?.ntn}` : `CNIC: ${invoice?.client?.cnic || 'N/A'}`}</p>
</div>
</div>
{/* <!-- Meta Information Row --> */}
<div className="grid grid-cols-4 gap-4 mb-10 bg-surface-container-low p-4 rounded-lg">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Issue Date</p>
<p className="font-body-lg text-body-lg font-semibold">{invoice?.issue_date}</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Due Date</p>
<p className="font-body-lg text-body-lg font-semibold">{invoice?.due_date}</p>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Payment Status</p>
<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
    invoice?.payment_status === 'paid' ? 'bg-tertiary-fixed text-on-tertiary-fixed' :
    invoice?.payment_status === 'overdue' ? 'bg-error text-on-error' :
    'bg-error-container text-on-error-container'
}`}>
    {invoice?.payment_status}
</span>
</div>
<div className={`flex items-center gap-1.5 ${
                                                invoice.fbr_status === 'validated' ? 'text-tertiary' :
                                                invoice.fbr_status === 'rejected' ? 'text-error' : 'text-on-surface-variant'
                                            }`}>
                                                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                                    {invoice.fbr_status === 'validated' ? 'check_circle' : 
                                                     invoice.fbr_status === 'rejected' ? 'cancel' : 'hourglass_empty'}
                                                </span>
                                                <span className="text-label-sm font-medium capitalize">{invoice.fbr_status}</span>
                                            </div>
</div>
{/* <!-- Line Items Table --> */}
<div className="mb-10 overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="border-b border-outline-variant">
<th className="py-3 font-label-sm text-label-sm text-on-surface-variant">#</th>
<th className="py-3 font-label-sm text-label-sm text-on-surface-variant">Product</th>
<th className="py-3 font-label-sm text-label-sm text-on-surface-variant">Description</th>
<th className="py-3 font-label-sm text-label-sm text-on-surface-variant text-right">Qty</th>
<th className="py-3 font-label-sm text-label-sm text-on-surface-variant text-right">Price</th>
<th className="py-3 font-label-sm text-label-sm text-on-surface-variant text-right">Tax %</th>
<th className="py-3 font-label-sm text-label-sm text-on-surface-variant text-right">Tax</th>
<th className="py-3 font-label-sm text-label-sm text-on-surface-variant text-right">Total</th>
</tr>
</thead>

<tbody className="divide-y divide-outline-variant">
{invoice?.items.map((item,index) => (
<tr key={item.id}  className="hover:bg-surface-container-low transition-colors">
<td className="py-4 font-body-md text-body-md">{index + 1}</td>
<td className="py-4 font-body-md text-body-md font-semibold">{item.product_name}</td>
<td className="py-4 font-body-md text-body-md text-on-surface-variant">{item.description}</td>
<td className="py-4 font-body-md text-body-md text-right">{item.quantity}</td>
<td className="py-4 font-body-md text-body-md text-right">{item.unit_price}</td>
<td className="py-4 font-body-md text-body-md text-right">{item.tax_rate}</td>
<td className="py-4 font-body-md text-body-md text-right">{item.tax}</td>
<td className="py-4 font-body-md text-body-md text-right font-semibold">{item.total}</td>
</tr>
))
}
</tbody>
</table>
</div>
{/* <!-- Totals and Notes Section --> */}
<div className="flex flex-col md:flex-row justify-between pt-6 border-t border-outline-variant">
<div className="max-w-xs mb-6 md:mb-0">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Notes</p>
<p className="font-body-md text-body-md text-on-surface-variant">{invoice?.notes}</p>
</div>
<div className="w-full md:w-64 space-y-2">
<div className="flex justify-between font-body-md text-body-md">
<span className="text-on-surface-variant">Subtotal</span>
<span className="font-medium">{subTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
</div>
<div className="flex justify-between font-body-md text-body-md">
<span className="text-on-surface-variant">Tax Total (18%)</span>
<span className="font-medium">{taxTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
</div>
<div className="flex justify-between pt-3 border-t border-outline-variant">
<span className="font-headline-md text-headline-md text-on-surface">Grand Total</span>
<span className="font-headline-md text-headline-md text-primary">{grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
</div>
</div>
</div>
</div>
</div>
{/* <!-- Right Column: Status and Actions --> */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
{/* <!-- Invoice Status Card --> */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
<h5 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-4">Invoice Status</h5>
<div className="flex items-center justify-between mb-6">
<span className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold ${
    invoice?.payment_status === 'paid' ? 'bg-tertiary-fixed text-on-tertiary-fixed' :
    invoice?.payment_status === 'overdue' ? 'bg-error text-on-error' :
    'bg-error-container text-on-error-container'
}`}>
    {invoice?.payment_status}<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                                    {invoice.payment_status === 'paid'? 'check_circle' : 
                                                     invoice.payment_status === 'unpaid' ? 'cancel' : 'hourglass_empty'}
                                                </span>
                                                 </span>
<p className="font-label-sm text-label-sm text-on-surface-vaiant">Due in 26 days</p>
</div>

</div>
{/* <!-- FBR Status Card --> */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
<h5 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-4">FBR Compliance</h5>
<div className="flex flex-col gap-4 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="cloud_done">cloud_done</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-bold">{invoice?.fbr_status === "validated" ? 'Validated By Fbr' : invoice?.fbr_status === "rejected" ? "Rejected By Fbr" : invoice?.fbr_status === "pending" ? "Pending"
: null}</p>
<p className="text-label-sm text-on-surface-variant">Synced May 10, 11:42 AM</p>
</div>
</div>
<div className="bg-surface-container-low p-3 rounded border border-outline-variant/30">
<p className="text-[11px] text-on-surface-variant uppercase mb-1">Tax Invoice IRN</p>
<p className="font-mono text-sm text-on-surface break-all">{invoice?.fbr_invoice_number || "-"}</p>
</div>
{invoice?.fbr_status === 'rejected' && (
    <div className="bg-error/10 p-3 rounded border border-error/30">
        <p className="text-[11px] text-error uppercase mb-1">Rejection Reason</p>
        <p className="text-sm text-error">{invoice?.fbr_rejection_reason}</p>
    </div>
)}
</div>
{['rejected', 'pending'].includes(invoice?.fbr_status) && (
<button onClick={handleSubmit} className="w-full py-2.5 border border-outline text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all active:scale-95 flex items-center justify-center gap-2">
<span className="material-symbols-outlined" data-icon="refresh">refresh</span>
                        Resubmit to FBR
                </button>)}    
</div>

{/* <!-- Actions Card --> */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
<h5 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-4">Quick Actions</h5>
<div className="flex flex-col gap-3">
<button className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2">
<span className="material-symbols-outlined" data-icon="download">download</span>
                            Download PDF
                        </button>
<button className="w-full py-3 border border-primary text-primary rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-all active:scale-95 flex items-center justify-center gap-2">
<span className="material-symbols-outlined" data-icon="send">send</span>
                            Send to Client
                        </button>
<button className="w-full py-3 border border-outline text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all active:scale-95 flex items-center justify-center gap-2">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
                            Edit Invoice
                        </button>
<div className="pt-2">
<button onClick={() => handleDeleteInvoice(invoice.id)} className="w-full py-3 border border-error text-error rounded-lg font-label-md text-label-md hover:bg-error/5 transition-all active:scale-95 flex items-center justify-center gap-2">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
                                Delete Invoice
                            </button>
</div>
</div>
</div>
{/* <!-- Activity Log Preview --> */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
<h5 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-4">Activity Timeline</h5>
<div className="space-y-4">
<div className="flex gap-3 relative before:content-[''] before:absolute before:left-[11px] before:top-6 before:bottom-[-20px] before:w-[1px] before:bg-outline-variant last:before:hidden">
<div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
<span className="material-symbols-outlined text-[14px] text-white" data-icon="mail">mail</span>
</div>
<div>
<p className="text-label-md font-bold">Sent to Blue Wave Textiles</p>
<p className="text-[11px] text-on-surface-variant">May 10, 2026 • 12:05 PM</p>
</div>
</div>
<div className="flex gap-3 relative">
<div className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center z-10">
<span className="material-symbols-outlined text-[14px] text-white" data-icon="task_alt">task_alt</span>
</div>
<div>
<p className="text-label-md font-bold">FBR IRN Generated</p>
<p className="text-[11px] text-on-surface-variant">May 10, 2026 • 11:42 AM</p>
</div>
</div>
</div>
</div>
</div>
</div>

</AuthenticatedLayout>
  )
}

export default Show
