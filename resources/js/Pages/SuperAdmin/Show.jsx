import React from 'react'

const Show = () => {
  return (
    <div>
      <div className="relative z-10">
<p className="font-body-md text-body-md text-on-surface-variant">Sector: <span className="text-on-surface font-medium">Logistics &amp; Shipping</span> | Member Since: <span className="text-on-surface font-medium">Jan 12, 2024</span></p>
</div>
{/* <!-- Metric Row: Bento Cards --> */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter relative z-10">
<div className="glass-panel p-lg rounded-xl flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant font-label-sm uppercase tracking-wider">Total Clients</span>
<span className="material-symbols-outlined text-primary">groups</span>
</div>
<p className="font-display-lg text-display-lg text-on-surface font-bold">142</p>
<div className="flex items-center gap-1 text-[12px] text-primary">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
<span>+12.5% vs last month</span>
</div>
</div>
<div className="glass-panel p-lg rounded-xl flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant font-label-sm uppercase tracking-wider">Total Invoices</span>
<span className="material-symbols-outlined text-primary">description</span>
</div>
<p className="font-display-lg text-display-lg text-on-surface font-bold">3,892</p>
<div className="flex items-center gap-1 text-[12px] text-primary">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
<span>+8.2% vs last month</span>
</div>
</div>
<div className="glass-panel p-lg rounded-xl flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant font-label-sm uppercase tracking-wider">Total Revenue</span>
<span className="material-symbols-outlined text-primary">payments</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-label-md text-on-surface-variant">PKR</span>
<p className="font-display-lg text-display-lg text-on-surface font-bold">12.4M</p>
</div>
<div className="flex items-center gap-1 text-[12px] text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span>Last sync: 2 mins ago</span>
</div>
</div>
</div>
{/* <!-- Data Sections: Tables --> */}
<div className="space-y-lg relative z-10">
{/* <!-- Associated Clients Table --> */}
<section className="glass-panel rounded-xl overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant/30 flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Associated Clients</h3>
<span className="text-label-sm text-on-surface-variant">6 Active Partners</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50">
<th className="px-lg py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Client Name</th>
<th className="px-lg py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Email</th>
<th className="px-lg py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Phone</th>
<th className="px-lg py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">City</th>
<th className="px-lg py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Type</th>
<th className="px-lg py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Date Added</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-primary/5 transition-colors cursor-default">
<td className="px-lg py-4 font-body-md text-on-surface font-medium">Indus Marine Services</td>
<td className="px-lg py-4 font-body-md text-on-surface-variant">ops@indusmarine.pk</td>
<td className="px-lg py-4 font-body-md text-on-surface-variant">+92 21 3456 7890</td>
<td className="px-lg py-4 font-body-md text-on-surface-variant">Karachi</td>
<td className="px-lg py-4"><span className="px-2 py-1 bg-secondary-container/30 text-on-secondary-container text-[11px] rounded">Business</span></td>
<td className="px-lg py-4 font-body-md text-on-surface-variant">Jan 15, 2024</td>
</tr>

</tbody>
</table>
</div>
</section>
{/* <!-- Recent Invoices Table --> */}
<section className="glass-panel rounded-xl overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant/30 flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Recent Invoices</h3>
<span className="text-label-sm text-on-surface-variant">Transaction History</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50">
<th className="px-lg py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Invoice #</th>
<th className="px-lg py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Client Name</th>
<th className="px-lg py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Amount (PKR)</th>
<th className="px-lg py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="px-lg py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Date Issued</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-primary/5 transition-colors cursor-default">
<td className="px-lg py-4 font-label-md text-primary font-bold">INV-2024-0892</td>
<td className="px-lg py-4 font-body-md text-on-surface font-medium">Indus Marine Services</td>
<td className="px-lg py-4 font-body-md text-on-surface">450,000</td>
<td className="px-lg py-4">
<span className="status-badge bg-green-900/30 text-green-400 border border-green-700/30">Paid</span>
</td>
<td className="px-lg py-4 font-body-md text-on-surface-variant">May 10, 2026</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors cursor-default">
<td className="px-lg py-4 font-label-md text-primary font-bold">INV-2024-0891</td>
<td className="px-lg py-4 font-body-md text-on-surface font-medium">Hussain Logistics Solutions</td>
<td className="px-lg py-4 font-body-md text-on-surface">1,240,000</td>
<td className="px-lg py-4">
<span className="status-badge bg-tertiary-container/20 text-tertiary border border-tertiary-container/30">Pending</span>
</td>
<td className="px-lg py-4 font-body-md text-on-surface-variant">May 08, 2026</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors cursor-default">
<td className="px-lg py-4 font-label-md text-primary font-bold">INV-2024-0890</td>
<td className="px-lg py-4 font-body-md text-on-surface font-medium">Blue Anchor Port Ops</td>
<td className="px-lg py-4 font-body-md text-on-surface">89,500</td>
<td className="px-lg py-4">
<span className="status-badge bg-error-container/20 text-error border border-error-container/30">Overdue</span>
</td>
<td className="px-lg py-4 font-body-md text-on-surface-variant">Apr 28, 2026</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors cursor-default">
<td className="px-lg py-4 font-label-md text-primary font-bold">INV-2024-0889</td>
<td className="px-lg py-4 font-body-md text-on-surface font-medium">Ahmed Freight Carriers</td>
<td className="px-lg py-4 font-body-md text-on-surface">320,000</td>
<td className="px-lg py-4">
<span className="status-badge bg-green-900/30 text-green-400 border border-green-700/30">Paid</span>
</td>
<td className="px-lg py-4 font-body-md text-on-surface-variant">Apr 25, 2026</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors cursor-default">
<td className="px-lg py-4 font-label-md text-primary font-bold">INV-2024-0888</td>
<td className="px-lg py-4 font-body-md text-on-surface font-medium">Sadiq Supply Chain</td>
<td className="px-lg py-4 font-body-md text-on-surface">515,200</td>
<td className="px-lg py-4">
<span className="status-badge bg-green-900/30 text-green-400 border border-green-700/30">Paid</span>
</td>
<td className="px-lg py-4 font-body-md text-on-surface-variant">Apr 20, 2026</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors cursor-default">
<td className="px-lg py-4 font-label-md text-primary font-bold">INV-2024-0887</td>
<td className="px-lg py-4 font-body-md text-on-surface font-medium">Zeeshan Bin Tariq</td>
<td className="px-lg py-4 font-body-md text-on-surface">12,500</td>
<td className="px-lg py-4">
<span className="status-badge bg-tertiary-container/20 text-tertiary border border-tertiary-container/30">Pending</span>
</td>
<td className="px-lg py-4 font-body-md text-on-surface-variant">Apr 15, 2026</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
    </div>
  )
}

export default Show
