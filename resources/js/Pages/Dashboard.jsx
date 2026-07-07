import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InvoiceModal from '@/Components/InvoiceModal'
import ProductModal from '@/Components/ProductModal'
import {useState} from 'react'
export default function Dashboard({metrics , recent_invoices , top_clients , clients , products}) {
     const [activeModal, setActiveModal] = useState(null)
    

     const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-PK', {
            style: 'currency',
            currency: 'PKR',
            minimumFractionDigits: 0
        }).format(value || 0);
    }
    return (
        <AuthenticatedLayout title="Dashboard">
            <div className="max-w-container_max_width mx-auto pt-6">
{/* <!-- STATS ROW --> */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
{/* <!-- Card 1: Revenue --> */}
<div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2">Total Revenue This Month</p>
<h3 className="font-stat-lg text-stat-lg text-primary mb-1">{formatCurrency(metrics['total_revenue'])}</h3>
<p className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                        12% vs last month
                    </p>
</div>
{/* <!-- Card 2: Invoices --> */}
<div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2">Total Invoices</p>
<h3 className="font-stat-lg text-stat-lg text-on-surface mb-1">{metrics['total_invoices']}</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">this month</p>
</div>
{/* <!-- Card 3: Unpaid --> */}
<div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2">Unpaid Invoices</p>
<div className="flex items-baseline gap-2">
<h3 className="font-stat-lg text-stat-lg text-error">{metrics['unpaid_count']}</h3>
<span className="font-label-md text-label-md text-error-container bg-error px-2 py-0.5 rounded text-[10px] uppercase font-bold">{formatCurrency(metrics['unpaid_amount'])}</span>
</div>
<p className="font-label-sm text-label-sm text-error mt-1 opacity-80">Requires attention</p>
</div>
{/* <!-- Card 4: FBR Pending --> */}
<div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2">FBR Pending Submissions</p>
<h3 className="font-stat-lg text-stat-lg text-[#D97706]">{metrics['fbr_pending']}</h3>
<div className="flex items-center gap-2 mt-1">
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-[#D97706] h-full w-2/3"></div>
</div>
<span className="font-label-sm text-label-sm text-[#D97706]">Pending</span>
</div>
</div>
</div>
{/* <!-- TWO COLUMN LAYOUT --> */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* <!-- LEFT COLUMN: Recent Invoices (65%) --> */}
<div className="lg:col-span-8">
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
<div className="px-6 py-5 border-b border-outline-variant flex justify-between items-center">
<h4 className="font-headline-md text-headline-md">Recent Invoices</h4>
<a className="font-label-md text-label-md text-primary hover:underline" href="#">View All</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container-low">
   
<tr>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Invoice #</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Client</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Amount</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">FBR</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
 {recent_invoices.map((invoice) => (
<tr key={invoice.id} className="hover:bg-surface-container-high transition-colors">
<td className="px-6 py-4 font-body-md text-body-md font-medium">{invoice.invoice_number}</td>
<td className="px-6 py-4">
<div className="font-body-md text-body-md text-on-surface">{invoice.client?.name}</div>
<div className="text-[11px] text-on-surface-variant">{invoice.issue_date}</div>
</td>
<td className="px-6 py-4">
<div className="font-body-md text-body-md font-semibold">{formatCurrency(invoice.total)}</div>
<div className="text-[11px] text-on-surface-variant">{formatCurrency(invoice.tax)}</div>
</td>
<td className="px-6 py-4">
<span className={`px-2.5 py-0.5 rounded-full text-label-sm font-medium ${
                                                invoice.payment_status === 'paid' ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant' :
                                                invoice.payment_status === 'overdue' ? 'bg-error-container text-on-error-container' : 
                                                'bg-surface-variant text-on-surface-variant'
                                            }`}>{invoice.payment_status}</span></td>
<td className="px-6 py-4">
<span className={`inline-flex items-center gap-1 text-[11px] font-medium ${
    invoice.fbr_status === 'validated' ? 'text-tertiary' :
    invoice.fbr_status === 'rejected' ? 'text-error' : 'text-on-surface-variant'
}`}>
    <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>
        {invoice.fbr_status === 'validated' ? 'check_circle' :
         invoice.fbr_status === 'rejected' ? 'cancel' : 'hourglass_empty'}
    </span>
    {invoice.fbr_status}
</span>
</td>

</tr>
))}

</tbody>
</table>
</div>
</div>
</div>
{/* <!-- RIGHT COLUMN: Actions & Top Clients (35%) --> */}
<div className="lg:col-span-4 space-y-6">

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
<h4 className="font-headline-md text-headline-md mb-5">Quick Actions</h4>
<div className="flex flex-col gap-3">
<button onClick={() => setActiveModal('invoice')} className="w-full py-3 px-4 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-all">
<span className="material-symbols-outlined text-[18px]">add</span>
                                Create Invoice
                            </button>
<button className="w-full py-3 px-4 border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-[18px]">person_add</span>
                                Add Client
                            </button>
<button  onClick={() => setActiveModal('product')} className="w-full py-3 px-4 border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-[18px]">inventory</span>
                                Add Product
                            </button>
</div>
</div>
{/* <!-- Top Clients --> */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
<div className="flex justify-between items-center mb-5">
<h4 className="font-headline-md text-headline-md">Top Clients</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant">This QTR</span>
</div>
<div className="space-y-5">
{/* <!-- Client 1 --> */}
{top_clients.map((client) => (
<div key={client.id} className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-[12px]">{client.name.charAt(0)}</div>
<div>
<p className="font-body-md text-body-md font-semibold text-on-surface">{client.name}</p>
{/* <p className="text-[11px] text-on-surface-variant">12 Invoices</p> */}
</div>
</div>
<div className="text-right">
<p className="font-label-md text-label-md font-bold text-on-surface">{formatCurrency(client.invoices_sum_total)}</p>
</div>
</div>))}

</div>
<button className="w-full mt-6 py-2 text-primary font-label-md text-label-md hover:bg-primary/5 transition-colors rounded">View detailed report</button>
</div>
</div>

</div>
{/* <!-- FOOTER --> */}
<footer className="mt-12 mb-8 text-center">
<p className="font-label-sm text-label-sm text-on-surface-variant opacity-60">Tempo Invoice © 2026. All rights reserved. Registered with FBR Punjab.</p>
</footer>
</div>
<InvoiceModal show={activeModal === 'invoice'} invoice={null} clients={clients} products={products} onClose={() => setActiveModal(null)} />
<ProductModal show= {activeModal === 'product'}  product={null} onClose={() => setActiveModal(null)} />
        </AuthenticatedLayout>
    )
}
