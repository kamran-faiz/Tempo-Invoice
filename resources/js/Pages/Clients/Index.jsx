import React from 'react'
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'

const Index = ({clients}) => {
  return (
    <AuthenticatedLayout title="Clients List">

{/* <!-- Content Area --> */}
<div className="p-8 space-y-8">
{/* <!-- Page Header Row --> */}
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<h3 className="font-headline-md text-headline-md text-on-surface">All Clients</h3>
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded">124 clients</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg font-body-md text-body-md w-[300px] focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Search clients..." type="text"/>
</div>
<button className="bg-primary text-on-primary px-5 py-2.5 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                        Add Client
                    </button>
</div>
</div>
{/* <!-- Tabs --> */}
<div className="flex gap-8 border-b border-outline-variant">
<button className="pb-3 border-b-2 border-primary text-primary font-bold font-label-md text-label-md">All</button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">B2B</button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">B2C</button>
</div>
{/* <!-- Clients Table Card --> */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Client Name</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Type</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">City</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Phone</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Email</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">NTN / CNIC</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Invoices</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Total Billed</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-center">Actions</th>
</tr>
</thead>
<tbody  className="divide-y divide-outline-variant"> {clients.map(client => (

<tr key={client.id} className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-[12px] flex items-center justify-center">IT</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">{client.name}</span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm rounded">{client.client_type}</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">{client.city}</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">{client.phone}</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">{client.email}</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">{client.cnic} {client.ntn}</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant text-right">24</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface font-semibold text-right">PKR 1.2M</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span></button>
</div>
</td>
</tr>
))}
</tbody>
</table>
{/* <!-- Pagination --> */}
<div className="px-6 py-4 flex items-center justify-between bg-surface-container-low/30 border-t border-outline-variant">
<span className="font-label-sm text-label-sm text-on-surface-variant">Showing 1–8 of 124 clients</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface transition-colors disabled:opacity-50 font-label-sm text-label-sm" disabled="">Previous</button>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded bg-primary text-on-primary font-label-sm text-label-sm">1</button>
<button className="w-8 h-8 rounded hover:bg-surface-variant font-label-sm text-label-sm transition-colors">2</button>
<button className="w-8 h-8 rounded hover:bg-surface-variant font-label-sm text-label-sm transition-colors">3</button>
<span className="px-1 text-on-surface-variant">...</span>
<button className="w-8 h-8 rounded hover:bg-surface-variant font-label-sm text-label-sm transition-colors">16</button>
</div>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface transition-colors font-label-sm text-label-sm">Next</button>
</div>
</div>
</div>
{/* <!-- FBR Compliance Status Banner (Specialized Component) --> */}
<div className="bg-primary/5 border border-primary/20 rounded-lg p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]" data-icon="verified_user">verified_user</span>
</div>
<div>
<h4 className="font-headline-md text-[18px] text-on-surface">FBR Compliance Tracker</h4>
<p className="font-body-md text-body-md text-on-surface-variant">All 8 clients in this view have verified NTN/CNIC records for the current tax year.</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<div className="text-primary font-bold font-stat-lg text-[20px]">100%</div>
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">Validation Score</div>
</div>
<div className="w-24 h-2 bg-outline-variant rounded-full overflow-hidden">
<div className="h-full bg-primary w-[100%]"></div>
</div>
</div>
</div>
</div>
    </AuthenticatedLayout>
  )
}

export default Index
