import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
export default function Dashboard() {
    return (
        <AuthenticatedLayout title="Dashboard">
            <div className="max-w-container_max_width mx-auto pt-6">
{/* <!-- STATS ROW --> */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
{/* <!-- Card 1: Revenue --> */}
<div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2">Total Revenue This Month</p>
<h3 className="font-stat-lg text-stat-lg text-primary mb-1">Rs. 1,250,000</h3>
<p className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                        12% vs last month
                    </p>
</div>
{/* <!-- Card 2: Invoices --> */}
<div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2">Total Invoices</p>
<h3 className="font-stat-lg text-stat-lg text-on-surface mb-1">48</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">this month</p>
</div>
{/* <!-- Card 3: Unpaid --> */}
<div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2">Unpaid Invoices</p>
<div className="flex items-baseline gap-2">
<h3 className="font-stat-lg text-stat-lg text-error">12</h3>
<span className="font-label-md text-label-md text-error-container bg-error px-2 py-0.5 rounded text-[10px] uppercase font-bold">Rs. 340,000</span>
</div>
<p className="font-label-sm text-label-sm text-error mt-1 opacity-80">Requires attention</p>
</div>
{/* <!-- Card 4: FBR Pending --> */}
<div className="bg-surface-container-lowest p-6 border border-outline-variant rounded-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-2">FBR Pending Submissions</p>
<h3 className="font-stat-lg text-stat-lg text-[#D97706]">05</h3>
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
{/* <!-- Row 1 --> */}
<tr className="hover:bg-surface-container-high transition-colors">
<td className="px-6 py-4 font-body-md text-body-md font-medium">INV-048</td>
<td className="px-6 py-4">
<div className="font-body-md text-body-md text-on-surface">Siddique & Sons</div>
<div className="text-[11px] text-on-surface-variant">May 12, 2026</div>
</td>
<td className="px-6 py-4">
<div className="font-body-md text-body-md font-semibold">Rs. 85,000</div>
<div className="text-[11px] text-on-surface-variant">Tax: Rs. 14,450</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed">PAID</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-tertiary">
<span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                                                Verified
                                            </span>
</td>
</tr>
{/* <!-- Row 2 --> */}
<tr className="hover:bg-surface-container-high transition-colors">
<td className="px-6 py-4 font-body-md text-body-md font-medium">INV-047</td>
<td className="px-6 py-4">
<div className="font-body-md text-body-md text-on-surface">Lahore Tech Hub</div>
<div className="text-[11px] text-on-surface-variant">May 11, 2026</div>
</td>
<td className="px-6 py-4">
<div className="font-body-md text-body-md font-semibold">Rs. 210,000</div>
<div className="text-[11px] text-on-surface-variant">Tax: Rs. 35,700</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-secondary-container text-secondary">PENDING</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#D97706]">
<span className="material-symbols-outlined text-[14px]">pending</span>
                                                In Queue
                                            </span>
</td>
</tr>
{/* <!-- Row 3 --> */}
<tr className="hover:bg-surface-container-high transition-colors">
<td className="px-6 py-4 font-body-md text-body-md font-medium">INV-046</td>
<td className="px-6 py-4">
<div className="font-body-md text-body-md text-on-surface">Karachi Textiles Ltd</div>
<div className="text-[11px] text-on-surface-variant">May 09, 2026</div>
</td>
<td className="px-6 py-4">
<div className="font-body-md text-body-md font-semibold">Rs. 45,000</div>
<div className="text-[11px] text-on-surface-variant">Tax: Rs. 7,650</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-error-container text-on-error-container">OVERDUE</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-tertiary">
<span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                                                Verified
                                            </span>
</td>
</tr>
{/* <!-- Row 4 --> */}
<tr className="hover:bg-surface-container-high transition-colors">
<td className="px-6 py-4 font-body-md text-body-md font-medium">INV-045</td>
<td className="px-6 py-4">
<div className="font-body-md text-body-md text-on-surface">Zubair Logistics</div>
<div className="text-[11px] text-on-surface-variant">May 08, 2026</div>
</td>
<td className="px-6 py-4">
<div className="font-body-md text-body-md font-semibold">Rs. 128,500</div>
<div className="text-[11px] text-on-surface-variant">Tax: Rs. 21,845</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed">PAID</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-error">
<span className="material-symbols-outlined text-[14px]">error</span>
                                                Rejected
                                            </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* <!-- RIGHT COLUMN: Actions & Top Clients (35%) --> */}
<div className="lg:col-span-4 space-y-6">
{/* <!-- Quick Actions --> */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
<h4 className="font-headline-md text-headline-md mb-5">Quick Actions</h4>
<div className="flex flex-col gap-3">
<button className="w-full py-3 px-4 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-all">
<span className="material-symbols-outlined text-[18px]">add</span>
                                Create Invoice
                            </button>
<button className="w-full py-3 px-4 border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-[18px]">person_add</span>
                                Add Client
                            </button>
<button className="w-full py-3 px-4 border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-container-high transition-all">
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
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-[12px]">SS</div>
<div>
<p className="font-body-md text-body-md font-semibold text-on-surface">Siddique & Sons</p>
<p className="text-[11px] text-on-surface-variant">12 Invoices</p>
</div>
</div>
<div className="text-right">
<p className="font-label-md text-label-md font-bold text-on-surface">Rs. 4.2M</p>
</div>
</div>
{/* <!-- Client 2 --> */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-[12px]">LT</div>
<div>
<p className="font-body-md text-body-md font-semibold text-on-surface">Lahore Tech Hub</p>
<p className="text-[11px] text-on-surface-variant">8 Invoices</p>
</div>
</div>
<div className="text-right">
<p className="font-label-md text-label-md font-bold text-on-surface">Rs. 2.8M</p>
</div>
</div>
{/* <!-- Client 3 --> */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-[12px]">KT</div>
<div>
<p className="font-body-md text-body-md font-semibold text-on-surface">Karachi Textiles</p>
<p className="text-[11px] text-on-surface-variant">6 Invoices</p>
</div>
</div>
<div className="text-right">
<p className="font-label-md text-label-md font-bold text-on-surface">Rs. 1.5M</p>
</div>
</div>
{/* <!-- Client 4 --> */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-[12px]">ZL</div>
<div>
<p className="font-body-md text-body-md font-semibold text-on-surface">Zubair Logistics</p>
<p className="text-[11px] text-on-surface-variant">5 Invoices</p>
</div>
</div>
<div className="text-right">
<p className="font-label-md text-label-md font-bold text-on-surface">Rs. 980K</p>
</div>
</div>
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
        </AuthenticatedLayout>
    )
}