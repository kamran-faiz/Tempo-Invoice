import React, { useState } from 'react'
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'
const Index = ({invoices}) => {
     const [invoiceModal,setInvoiceModal] = useState('false')
     const [searchQuery, setSearchQuery] = useState('')
    const [activeFilter,setActiveFilter] = useState('All')
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
<h3 className="font-stat-lg text-stat-lg text-on-surface mt-1">1,240</h3>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant hover:border-tertiary-container/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-tertiary/10 rounded-lg text-tertiary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">check_circle</span>
</div>
<span className="text-tertiary font-label-sm text-label-sm">95.5% Success</span>
</div>
<p className="text-on-surface-variant font-label-md text-label-md">Total Validated</p>
<h3 className="font-stat-lg text-stat-lg text-on-surface mt-1">1,185</h3>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant hover:border-error/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-error/10 rounded-lg text-error group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">cancel</span>
</div>
<span className="text-error font-label-sm text-label-sm">-4% Priority</span>
</div>
<p className="text-on-surface-variant font-label-md text-label-md">Total Rejected</p>
<h3 className="font-stat-lg text-stat-lg text-on-surface mt-1">12</h3>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant hover:border-primary-container/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary-container/10 rounded-lg text-primary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">hourglass_empty</span>
</div>
<span className="text-on-surface-variant font-label-sm text-label-sm">Awaiting API</span>
</div>
<p className="text-on-surface-variant font-label-md text-label-md">Pending Submission</p>
<h3 className="font-stat-lg text-stat-lg text-on-surface mt-1">43</h3>
</div>
</section>
{/* <!-- Filter and Table Section --> */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden">
{/* <!-- Tabs and Filters --> */}
<div className="px-6 py-4 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex gap-2 p-1 bg-surface-container-high rounded-lg w-fit">
<button className="px-6 py-1.5 rounded-md font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm">All</button>
<button className="px-6 py-1.5 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Validated</button>
<button className="px-6 py-1.5 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Rejected</button>
<button className="px-6 py-1.5 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Pending</button>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant scale-90">search</span>
<input className="pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all w-64" placeholder="Search by Invoice or IRN..." type="text"/>
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
{/* <!-- Row 1: Validated --> */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-6 py-4">
<a className="font-label-md text-label-md text-primary hover:underline font-semibold" href="#">INV-2024-001</a>
</td>
<td className="px-6 py-4 font-body-md text-body-md">Apex Global Solutions</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Oct 24, 2024</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                        Validated
                                    </span>
</td>
<td className="px-6 py-4 font-body-md text-body-md font-mono text-on-surface-variant">PK-FBR-7729102-X</td>
<td className="px-6 py-4 text-on-surface-variant">—</td>
<td className="px-6 py-4 text-right">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* <!-- Row 2: Rejected --> */}
<tr className="hover:bg-surface-container-low transition-colors group bg-error-container/5">
<td className="px-6 py-4">
<a className="font-label-md text-label-md text-primary hover:underline font-semibold" href="#">INV-2024-002</a>
</td>
<td className="px-6 py-4 font-body-md text-body-md">Nexus Corp Int.</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Oct 24, 2024</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error/10 text-error font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">error</span>
                                        Rejected
                                    </span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant opacity-30">—</td>
<td className="px-6 py-4">
<button className="font-label-sm text-label-sm text-error underline decoration-error/30 hover:decoration-error">See Reason</button>
</td>
<td className="px-6 py-4 text-right">
<button className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm shadow-sm hover:bg-primary-container transition-all active:scale-95">
<span className="material-symbols-outlined text-[16px]">fact_check</span>
                                        Resubmit
                                    </button>
</td>
</tr>
{/* <!-- Row 3: Pending --> */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-6 py-4">
<a className="font-label-md text-label-md text-primary hover:underline font-semibold" href="#">INV-2024-003</a>
</td>
<td className="px-6 py-4 font-body-md text-body-md">Quantum Systems</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Oct 25, 2024</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                                        Pending
                                    </span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant opacity-30">—</td>
<td className="px-6 py-4 text-on-surface-variant">—</td>
<td className="px-6 py-4 text-right">
<button className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary text-primary rounded-lg font-label-sm text-label-sm hover:bg-primary/5 transition-all active:scale-95">
<span className="material-symbols-outlined text-[16px]">fact_check</span>
                                        Resubmit
                                    </button>
</td>
</tr>
{/* <!-- Row 4: Validated --> */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-6 py-4">
<a className="font-label-md text-label-md text-primary hover:underline font-semibold" href="#">INV-2024-004</a>
</td>
<td className="px-6 py-4 font-body-md text-body-md">Velocity Partners</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Oct 25, 2024</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                        Validated
                                    </span>
</td>
<td className="px-6 py-4 font-body-md text-body-md font-mono text-on-surface-variant">PK-FBR-7729441-A</td>
<td className="px-6 py-4 text-on-surface-variant">—</td>
<td className="px-6 py-4 text-right">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* <!-- Row 5: Rejected --> */}
<tr className="hover:bg-surface-container-low transition-colors group bg-error-container/5">
<td className="px-6 py-4">
<a className="font-label-md text-label-md text-primary hover:underline font-semibold" href="#">INV-2024-005</a>
</td>
<td className="px-6 py-4 font-body-md text-body-md">Silverstone Logistics</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Oct 26, 2024</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error/10 text-error font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">error</span>
                                        Rejected
                                    </span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant opacity-30">—</td>
<td className="px-6 py-4">
<button className="font-label-sm text-label-sm text-error underline decoration-error/30 hover:decoration-error">See Reason</button>
</td>
<td className="px-6 py-4 text-right">
<button className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm shadow-sm hover:bg-primary-container transition-all active:scale-95">
<span className="material-symbols-outlined text-[16px]">fact_check</span>
                                        Resubmit
                                    </button>
</td>
</tr>
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
    </AuthenticatedLayout>
  )
}

export default Index
