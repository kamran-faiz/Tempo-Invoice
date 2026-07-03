import React, { useState } from 'react'
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'
import {router} from '@inertiajs/react'
import toast from 'react-hot-toast'
import ReasonModal from '../../Components/ReasonModal'
const Index = ({invoices , metrics}) => {
     const [invoiceModal,setInvoiceModal] = useState('false')
     const [searchQuery, setSearchQuery] = useState('')
    const [activeFilter,setActiveFilter] = useState('All')
    const handleSubmit = (id) => {
        router.post(route('invoices.submitToFbr', { invoice: id }), {}, {
            onSuccess: () => toast.success('Invoice validated by FBR'),
            onError: () => toast.error('Invoice rejected by FBR')
        })
    }
    const [reasonModal,setReasonModal] = useState(false)
    const [selectedReason,setSelectedReason] = useState(null)
    const filteredInvoices = invoices.filter((item) => {
    const matchesSearch = 
        item.invoice_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.client?.name || '').toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;
    if (activeFilter === 'Validated') return item.fbr_status === 'validated';
    if (activeFilter === 'Pending') return item.fbr_status === 'pending';
    if (activeFilter === 'Rejected') return item.fbr_status === 'rejected';
    return true;
})
        
  return (
    <AuthenticatedLayout title="FBR Logs">
    <div>
      <div className="flex-1 p-8 space-y-8 max-w-[1440px] mx-auto w-full">
{/* <!-- Metric Grid --> */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant hover:border-primary/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">cloud_upload</span>
</div>
<span className="text-tertiary font-label-sm text-label-sm">+12% vs last mo</span>
</div>
<p className="text-on-surface-variant font-label-md text-label-md">Total Submitted</p>
<h3 className="font-stat-lg text-stat-lg text-on-surface mt-1">{metrics['total_submitted']}</h3>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant hover:border-tertiary-container/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-tertiary/10 rounded-lg text-tertiary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">check_circle</span>
</div>
<span className="text-tertiary font-label-sm text-label-sm">95.5% Success</span>
</div>
<p className="text-on-surface-variant font-label-md text-label-md">Total Validated</p>
<h3 className="font-stat-lg text-stat-lg text-on-surface mt-1">{metrics['total_validated']}</h3>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant hover:border-error/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-error/10 rounded-lg text-error group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">cancel</span>
</div>
<span className="text-error font-label-sm text-label-sm">-4% Priority</span>
</div>
<p className="text-on-surface-variant font-label-md text-label-md">Total Rejected</p>
<h3 className="font-stat-lg text-stat-lg text-on-surface mt-1">{metrics['total_rejected']}</h3>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant hover:border-primary-container/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary-container/10 rounded-lg text-primary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">hourglass_empty</span>
</div>
<span className="text-on-surface-variant font-label-sm text-label-sm">Awaiting API</span>
</div>
<p className="text-on-surface-variant font-label-md text-label-md">Pending Submission</p>
<h3 className="font-stat-lg text-stat-lg text-on-surface mt-1">{metrics['total_pending']}</h3>
</div>
</section>
{/* <!-- Filter and Table Section --> */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden">
{/* <!-- Tabs and Filters --> */}
<div className="px-6 py-4 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex gap-2 p-1 bg-surface-container-high rounded-lg w-fit">
    
<button onClick={() => setActiveFilter('All')} className="px-6 py-1.5 rounded-md font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm">All</button>
<button onClick={() => setActiveFilter('Validated')} className="px-6 py-1.5 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Validated</button>
<button onClick={() => setActiveFilter('Rejected')} className="px-6 py-1.5 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Rejected</button>
<button onClick={() => setActiveFilter('Pending')} className="px-6 py-1.5 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Pending</button>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant scale-90">search</span>
<input value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all w-64" placeholder="Search by Invoice or IRN..." type="text"/>
</div>
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined scale-90">filter_list</span>
                            Filters
                        </button>
</div>
</div>
{/* <!-- Data Table --> */}
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Invoice #</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Client Name</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Submitted Date</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">FBR Status</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">IRN Number</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Rejection Reason</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
{filteredInvoices.map((item) => (
<tr key={item.id} className="hover:bg-surface-container-low transition-colors group">
<td className="px-6 py-4">
<a className="font-label-md text-label-md text-primary hover:underline font-semibold" href="#">{item.invoice_number}</a>
</td>
<td className="px-6 py-4 font-body-md text-body-md">{item.client?.name}</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">{item.updated_at}</td>
<td className="px-6 py-4">
    <div className={`flex items-center gap-1.5 ${
        item.fbr_status === 'validated' ? 'text-tertiary' :
        item.fbr_status === 'rejected' ? 'text-error' : 'text-on-surface-variant'
    }`}>
        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            {item.fbr_status === 'validated' ? 'check_circle' : 
             item.fbr_status === 'rejected' ? 'cancel' : 'hourglass_empty'}
        </span>
        <span className="text-label-sm font-medium capitalize">{item.fbr_status}</span>
    </div>
</td>
<td className="px-6 py-4 font-body-md text-body-md font-mono text-on-surface-variant">{item.fbr_invoice_number || '—'}</td>

<td className="px-6 py-4 text-on-surface-variant">
    {item.fbr_status === 'rejected' 
        ? <button onClick={() => { setSelectedReason(item.fbr_rejection_reason); setReasonModal(true) }} className="font-label-sm text-label-sm text-error underline">See Reason</button>
        : '—'
    }
</td>
<td className="px-6 py-4 text-right">
    {['rejected', 'pending'].includes(item.fbr_status) ?
        <button onClick={() => handleSubmit(item.id)} className="p-2 text-primary hover:bg-surface-container-high rounded-lg transition-colors">
            <span className="material-symbols-outlined">fact_check</span>
        </button> : null
    }
</td>
</tr>))}

</tbody>
</table>
</div>
{/* <!-- Pagination --> */}
<div className="px-6 py-4 bg-surface-container-low flex items-center justify-between border-t border-outline-variant">
<p className="font-label-sm text-label-sm text-on-surface-variant">Showing 1 to 5 of 1,240 entries</p>
<div className="flex items-center gap-1">
<button className="p-2 border border-outline-variant rounded-md text-on-surface-variant hover:bg-surface-container-high disabled:opacity-50" disabled="">
<span className="material-symbols-outlined scale-75">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md bg-primary text-on-primary font-label-sm text-label-sm">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-surface-container-high font-label-sm text-label-sm">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-surface-container-high font-label-sm text-label-sm">3</button>
<span className="px-2 text-on-surface-variant">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-surface-container-high font-label-sm text-label-sm">248</button>
<button className="p-2 border border-outline-variant rounded-md text-on-surface-variant hover:bg-surface-container-high">
<span className="material-symbols-outlined scale-75">chevron_right</span>
</button>
</div>
</div>
</section>
</div>
    </div>
    <ReasonModal show={reasonModal} onClose={() => setReasonModal(false)} reason={selectedReason} />
    </AuthenticatedLayout>
  )
}

export default Index
