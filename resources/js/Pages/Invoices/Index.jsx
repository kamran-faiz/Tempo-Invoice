import React from 'react'
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'
import {useState} from 'react'
import InvoiceModal from '../../Components/InvoiceModal'

const Index = ({invoice = [], metrics = {}}) => {
    const [showModal,setShowModal] = useState(false)
    const [selectedInvoice, setSelectedInvoice] = useState(null);
const [activeFilter, setActiveFilter] = useState('All');
const [searchQuery, setSearchQuery] = useState('');
  return (
    <AuthenticatedLayout title="Invoices">
    
<div className="max-w-[1200px] mx-auto space-y-8">
{/* <!-- Hero Row: Header, Search, Create --> */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<h1 className="font-headline-lg text-headline-lg text-on-surface">All Invoices</h1>
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-label-sm font-label-sm rounded-full">248 invoices</span>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-64 text-body-md font-body-md" placeholder="Search invoices..." type="text"/>
</div>
<button onClick={() => setShowModal(true)} className="bg-primary hover:opacity-90 text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                        Create Invoice
                    </button>
</div>
</div>
{/* <!-- Filter Tabs --> */}
<div className="flex border-b border-outline-variant">
<button className="px-6 py-3 border-b-2 border-primary text-primary font-bold text-label-md">All</button>
<button className="px-6 py-3 text-on-surface-variant hover:text-primary font-medium text-label-md">Unpaid</button>
<button className="px-6 py-3 text-on-surface-variant hover:text-primary font-medium text-label-md">Paid</button>
<button className="px-6 py-3 text-on-surface-variant hover:text-primary font-medium text-label-md">Overdue</button>
<button className="px-6 py-3 text-on-surface-variant hover:text-primary font-medium text-label-md">FBR Pending</button>
</div>
{/* <!-- Summary Strip --> */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
<p className="text-on-surface-variant text-label-sm font-label-sm mb-1 uppercase tracking-wider">Total Billed (Month)</p>
<p className="text-headline-md font-headline-md text-on-surface">{metrics['total billed']}</p>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
<p className="text-on-surface-variant text-label-sm font-label-sm mb-1 uppercase tracking-wider">Total Collected</p>
<p className="text-headline-md font-headline-md text-tertiary">{metrics['total collected']}</p>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
<p className="text-on-surface-variant text-label-sm font-label-sm mb-1 uppercase tracking-wider">Outstanding Amount</p>
<p className="text-headline-md font-headline-md text-error">{metrics['total outstanding']}</p>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
<p className="text-on-surface-variant text-label-sm font-label-sm mb-1 uppercase tracking-wider">FBR Unsubmitted</p>
<p className="text-headline-md font-headline-md text-primary">{metrics['fbr unsumbitted']}</p>
</div>
</div>
{/* <!-- Invoices Table Container --> */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low border-b border-outline-variant">
<tr>
<th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Invoice #</th>
<th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Client Name</th>
<th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Issue Date</th>
<th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Due Date</th>
<th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Amount</th>
<th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-right">Tax</th>
<th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-right">Total</th>
<th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Payment</th>
<th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">FBR Status</th>
<th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-center">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
{invoice.map((item) => (
<tr key={item.id} className="hover:bg-surface-container transition-colors group">
<td className="px-6 py-4 font-body-md text-body-md text-primary font-medium">{item.invoice_number}</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface">{item.client?.name}</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">{item.issue_date}</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">{item.due_date}</td>
<td className="px-6 py-4 font-body-md text-body-md">{item.amount}</td>
<td className="px-6 py-4 font-body-md text-body-md text-right">{item.tax}</td>
<td className="px-6 py-4 font-body-md text-body-md text-right font-semibold">{item.total}</td>
<td className="px-6 py-4">
<span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-label-sm font-medium">{item.payment_status}</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-tertiary">
<span className="material-symbols-outlined text-[16px]" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}

>check_circle</span>
<span className="text-label-sm font-medium">{item.fbr_status}</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<button className="p-1 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
</td>
</tr>


))}
</tbody>
</table>
{/* <!-- Pagination --> */}
<div className="px-6 py-4 border-t border-outline-variant flex items-center justify-between">
<p className="text-body-md font-body-md text-on-surface-variant">Showing 1–8 of 248 invoices</p>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 border border-outline-variant rounded-lg hover:bg-surface-container text-on-surface-variant transition-colors disabled:opacity-50" disabled="">
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_left">chevron_left</span>
</button>
<button className="px-4 py-1.5 bg-primary text-on-primary rounded-lg font-medium text-body-md">1</button>
<button className="px-4 py-1.5 border border-outline-variant rounded-lg hover:bg-surface-container text-on-surface transition-colors font-medium text-body-md">2</button>
<button className="px-4 py-1.5 border border-outline-variant rounded-lg hover:bg-surface-container text-on-surface transition-colors font-medium text-body-md">3</button>
<span className="px-2 text-on-surface-variant">...</span>
<button className="px-4 py-1.5 border border-outline-variant rounded-lg hover:bg-surface-container text-on-surface transition-colors font-medium text-body-md">31</button>
<button className="px-3 py-1.5 border border-outline-variant rounded-lg hover:bg-surface-container text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
<InvoiceModal show={showModal} invoice={selectedInvoice} onClose={() => setShowModal(false)}/>

</AuthenticatedLayout>
  )
}

export default Index
