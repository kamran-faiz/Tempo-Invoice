import React from 'react'
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'

const Index = () => {
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
<tbody className="divide-y divide-outline-variant">
{/* <!-- Row 1: Indus Tech Solutions (B2B) --> */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-[12px] flex items-center justify-center">IT</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">Indus Tech Solutions</span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm rounded">B2B</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Karachi</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">+92 21 3456789</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">billing@industech.pk</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">1234567-8</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant text-right">24</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface font-semibold text-right">PKR 1.2M</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span></button>
</div>
</td>
</tr>
{/* <!-- Row 2: Omar Farooq (B2C) --> */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-[12px] flex items-center justify-center">OF</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">Omar Farooq</span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm rounded">B2C</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Lahore</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">+92 300 1234567</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">omar.farooq@email.com</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">35201-1234567-1</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant text-right">5</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface font-semibold text-right">PKR 145,000</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span></button>
</div>
</td>
</tr>
{/* <!-- Row 3: Blue Wave Textiles (B2B) --> */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-[12px] flex items-center justify-center">BW</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">Blue Wave Textiles</span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm rounded">B2B</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Faisalabad</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">+92 41 9876543</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">accounts@bluewave.com</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">7654321-0</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant text-right">42</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface font-semibold text-right">PKR 3.8M</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span></button>
</div>
</td>
</tr>
{/* <!-- Row 4: Zeba Bakhtiar (B2C) --> */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-[12px] flex items-center justify-center">ZB</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">Zeba Bakhtiar</span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm rounded">B2C</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Islamabad</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">+92 333 4455667</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">zeba.b@gmail.com</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">61101-9988776-2</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant text-right">2</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface font-semibold text-right">PKR 28,500</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span></button>
</div>
</td>
</tr>
{/* <!-- Row 5: Hameed & Sons (B2B) --> */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-[12px] flex items-center justify-center">HS</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">Hameed & Sons</span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm rounded">B2B</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Multan</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">+92 61 5566778</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">info@hameedsons.com.pk</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">8877665-4</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant text-right">18</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface font-semibold text-right">PKR 890,000</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span></button>
</div>
</td>
</tr>
{/* <!-- Row 6: Sahir Lodhi (B2C) --> */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-[12px] flex items-center justify-center">SL</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">Sahir Lodhi</span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm rounded">B2C</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Karachi</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">+92 312 9988112</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">sahir@lodhientertainment.pk</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">42101-5544332-1</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant text-right">12</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface font-semibold text-right">PKR 450,000</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span></button>
</div>
</td>
</tr>
{/* <!-- Row 7: Pak-China Logistics (B2B) --> */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-[12px] flex items-center justify-center">PC</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">Pak-China Logistics</span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-tertiary-container/10 text-tertiary font-label-sm text-label-sm rounded">B2B</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Gwadar</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">+92 86 4211334</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">ops@pakchina.com</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">9922883-1</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant text-right">64</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface font-semibold text-right">PKR 9.4M</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span></button>
</div>
</td>
</tr>
{/* <!-- Row 8: Aisha Qureshi (B2C) --> */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-[12px] flex items-center justify-center">AQ</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">Aisha Qureshi</span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm rounded">B2C</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">Peshawar</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">+92 345 8877112</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">aisha.q@outlook.com</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">17301-4433221-8</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant text-right">1</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface font-semibold text-right">PKR 12,000</td>
<td className="px-6 py-4 text-center">
<div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="visibility">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span></button>
</div>
</td>
</tr>
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
