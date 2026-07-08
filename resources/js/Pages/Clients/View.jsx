import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react'
import { useState } from 'react'
import InvoiceModal from '../../Components/InvoiceModal'
import ClientModal from '../../Components/ClientModal'

const View = ({client, metrics, products = [], clients = []}) => {
        const [showModal, setShowModal] = useState(false)
        const [showEditModal, setShowEditModal] = useState(false)

        const handleEditOpen = () => {
            setShowEditModal(true)
        }

        const handleCreateOpen = () => {
        
        setShowModal(true)
    }
     const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-PK', {
            style: 'currency',
            currency: 'PKR',
            minimumFractionDigits: 0
        }).format(value || 0);
    }
  
  return (
    <AuthenticatedLayout title="Client Detail">
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-lg border border-outline-variant mt-6 mb-6 ">
<div className="flex items-center gap-6">
<div className="w-20 h-20 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined text-[40px]" data-icon="business">business</span>
</div>
<div>
<div className="flex items-center gap-3">
<h3 className="font-headline-lg text-headline-lg text-on-surface">{client.name}</h3>
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">Verified</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
  {client.client_type} Client • {client.cnic ? `CNIC: ${client.cnic}` : `NTN: ${client.ntn}`}
</p>
</div>
</div>
<div className="flex items-center gap-3">
<button onClick={handleEditOpen} className="px-6 py-2.5 border border-outline text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
                        Edit Profile
                    </button>
<button onClick={handleCreateOpen} className="px-6 py-2.5 bg-primary text-white font-label-md text-label-md rounded-lg hover:bg-on-primary-fixed-variant transition-all shadow-sm active:scale-95 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                        Create Invoice
                    </button>
</div>
</section>
{/* <!-- Layout Grid: Main Content (Left) + Secondary Info (Right) --> */}
<div className="grid grid-cols-12 gap-8 items-start">
{/* <!-- Left Column --> */}
<div className="col-span-12 lg:col-span-8 space-y-8">
{/* <!-- Key Metrics Grid --> */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-lg border border-outline-variant">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Invoiced</p>
<p className="font-stat-lg text-stat-lg text-on-surface mt-2">{formatCurrency(metrics['total_invoiced'])}</p>
<div className="mt-4 flex items-center text-tertiary gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span>
<span className="text-[12px] font-medium">+12% from last month</span>
</div>
</div>
<div className="bg-white p-6 rounded-lg border border-outline-variant">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pending Payment</p>
<p className="font-stat-lg text-stat-lg text-primary mt-2">{formatCurrency(metrics['pending_amount'])}</p>
<p className="text-[12px] text-on-surface-variant mt-4">2 invoices outstanding</p>
</div>
<div className="bg-white p-6 rounded-lg border border-outline-variant">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Overdue Amount</p>
<p className="font-stat-lg text-stat-lg text-on-surface-variant/40 mt-2">{formatCurrency(metrics['overdue_amount'])}</p>
<div className="mt-4 flex items-center text-tertiary gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="check_circle">check_circle</span>
<span className="text-[12px] font-medium">All clear</span>
</div>
</div>
</div>
{/* <!-- Invoice History Table --> */}
<div className="bg-white rounded-lg border border-outline-variant overflow-hidden">
<div className="p-6 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
<h4 className="font-headline-md text-headline-md text-on-surface">Invoice History</h4>
<div className="flex items-center gap-3">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container border-none text-body-md font-body-md rounded-lg focus:ring-2 focus:ring-primary-container w-full md:w-64" placeholder="Search invoices..." type="text"/>
</div>
<button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low">
<tr>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Invoice ID</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Date</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Amount (PKR)</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">FBR Status</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Payment</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
{client.invoices?.map((invoice) => (
<tr key={invoice.id} className="hover:bg-surface-container-low transition-colors group">
<td className="px-6 py-4 font-body-md text-body-md text-primary font-medium">{invoice.invoice_number}</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">{invoice.due_date}</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface font-semibold">{formatCurrency(invoice.amount)}</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-tertiary-container/10 text-tertiary-container text-[11px] font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                                               {invoice.fbr_status}
                                            </span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-tertiary-container/10 text-tertiary-container text-[11px] font-bold">{invoice.payment_status}</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
))}

</tbody>
</table>
</div>
<div className="p-4 border-t border-outline-variant flex items-center justify-between">
<span className="text-label-sm font-label-sm text-on-surface-variant">Showing 5 of 42 invoices</span>
<div className="flex items-center gap-2">
<button className="p-1 rounded hover:bg-surface-container"><span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span></button>
<button className="p-1 rounded hover:bg-surface-container"><span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span></button>
</div>
</div>
</div>
</div>
{/* <!-- Right Column (Sidebar Secondary Info) --> */}
<aside className="col-span-12 lg:col-span-4 space-y-6">
{/* <!-- Contact Information Card --> */}
<div className="bg-white p-6 rounded-lg border border-outline-variant">
<h4 className="font-headline-md text-headline-md text-on-surface mb-6">Contact Details</h4>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined" data-icon="person">person</span>
</div>
<div>
<p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Primary Contact</p>
<p className="font-body-lg text-body-lg text-on-surface mt-1">Ali Raza</p>
<p className="font-label-md text-label-md text-on-surface-variant">Finance Director</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</div>
<div>
<p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Email Address</p>
<Link className="font-body-lg text-body-lg text-primary hover:underline mt-1 block" href="mailto:finance@industech.pk">{client.email}</Link>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined" data-icon="call">call</span>
</div>
<div>
<p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Phone Number</p>
<p className="font-body-lg text-body-lg text-on-surface mt-1">{client.phone}</p>
</div>
</div>
<div className="flex items-start gap-4 pt-4 border-t border-outline-variant">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
</div>
<div>
<p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Business Address</p>
<p className="font-body-md text-body-md text-on-surface mt-1 leading-relaxed">
                                       {client.address}
                                    </p>
<button className="text-primary font-label-md text-label-md mt-2 flex items-center gap-1 hover:underline">
                                        View on map <span className="material-symbols-outlined text-[14px]" data-icon="open_in_new">open_in_new</span>
</button>
</div>
</div>
</div>
</div>
{/* <!-- FBR Compliance Section --> */}
<div className="bg-white p-6 rounded-lg border border-outline-variant">
<div className="flex items-center justify-between mb-4">
<h4 className="font-headline-md text-headline-md text-on-surface">FBR Compliance</h4>
<span className="material-symbols-outlined text-tertiary-container" data-icon="verified_user">verified_user</span>
</div>
<div className="space-y-4">
<div className="p-3 bg-tertiary-container/5 rounded-lg border border-tertiary-container/20">
<div className="flex justify-between items-center mb-2">
<span className="text-label-sm font-label-sm text-tertiary-container uppercase">Live Status</span>
<span className="text-label-sm font-bold text-tertiary-container">ACTIVE</span>
</div>
<div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-tertiary-container w-full"></div>
</div>
<p className="text-[11px] text-on-surface-variant mt-2">Last validated with FBR on May 15, 2026, 09:00 AM</p>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-body-md text-on-surface-variant">
<span className="material-symbols-outlined text-tertiary-container text-[18px]" data-icon="check_circle">check_circle</span>
                                    NTN Profile Verified
                                </li>
<li className="flex items-center gap-3 text-body-md text-on-surface-variant">
<span className="material-symbols-outlined text-tertiary-container text-[18px]" data-icon="check_circle">check_circle</span>
                                    Sales Tax Registered
                                </li>
<li className="flex items-center gap-3 text-body-md text-on-surface-variant">
<span className="material-symbols-outlined text-tertiary-container text-[18px]" data-icon="check_circle">check_circle</span>
                                    WHT Certificate Active
                                </li>
</ul>
</div>
</div>
</aside>
</div>
            <InvoiceModal show={showModal} invoice={null} products={products} clients={[client]} onClose={() => setShowModal(false)}/>
<ClientModal show={showEditModal} client={client} onClose={() => setShowEditModal(false)} />
    </AuthenticatedLayout>
  )
}

export default View
