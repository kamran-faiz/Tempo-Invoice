import React from 'react'
import SuperadminLayout from '@/Layouts/SuperadminLayout'
import CompanyModal from '../../Components/CompanyModal'
import {useState} from 'react'
const Dashboard = () => {
    const [showModal,setShowModal] = useState(false)
  return (
    <SuperadminLayout title="Dashboard">
    <div>
      {/* <!-- Metrics Row --> */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative z-10">
    {/* <!-- Total Companies --> */}
    <div className="glass-panel p-lg rounded-xl flex flex-col justify-between h-40 hover:border-primary-fixed-dim transition-all group">
        <div className="flex justify-between items-start">
            <span className="font-label-md text-label-md text-on-surface-variant">Total Companies</span>
            <span className="material-symbols-outlined text-primary" data-icon="apartment">apartment</span>
        </div>
        <div>
            <h3 className="font-headline-lg text-headline-lg font-extrabold text-primary">1,284</h3>
            <div className="flex items-center gap-1 text-green-400 text-xs font-bold mt-1">
                <span className="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span>
                <span>+12.5%</span>
            </div>
        </div>
    </div>
    {/* <!-- Total Clients --> */}
    <div className="glass-panel p-lg rounded-xl flex flex-col justify-between h-40 hover:border-primary-fixed-dim transition-all group">
        <div className="flex justify-between items-start">
            <span className="font-label-md text-label-md text-on-surface-variant">Total Clients</span>
            <span className="material-symbols-outlined text-primary" data-icon="group">group</span>
        </div>
        <div>
            <h3 className="font-headline-lg text-headline-lg font-extrabold text-primary">45,920</h3>
            <div className="flex items-center gap-1 text-green-400 text-xs font-bold mt-1">
                <span className="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span>
                <span>+8.2%</span>
            </div>
        </div>
    </div>
    {/* <!-- Total Invoices --> */}
    <div className="glass-panel p-lg rounded-xl flex flex-col justify-between h-40 hover:border-primary-fixed-dim transition-all group">
        <div className="flex justify-between items-start">
            <span className="font-label-md text-label-md text-on-surface-variant">Total Invoices</span>
            <span className="material-symbols-outlined text-primary" data-icon="description">description</span>
        </div>
        <div>
            <h3 className="font-headline-lg text-headline-lg font-extrabold text-primary">128.4k</h3>
            <div className="flex items-center gap-1 text-on-surface-variant text-xs font-bold mt-1">
                <span className="material-symbols-outlined text-[14px]" data-icon="horizontal_rule">horizontal_rule</span>
                <span>Steady</span>
            </div>
        </div>
    </div>
    {/* <!-- Total Invoice Sum --> */}
    <div className="glass-panel p-lg rounded-xl flex flex-col justify-between h-40 border-primary/30 bg-primary/5 hover:border-primary transition-all group">
        <div className="flex justify-between items-start">
            <span className="font-label-md text-label-md text-primary">Total Revenue (PKR)</span>
            <span className="material-symbols-outlined text-primary" data-icon="payments" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>        </div>
        <div>
            <h3 className="font-headline-lg text-headline-lg font-extrabold text-primary-fixed">92.4M</h3>
            <p className="font-label-sm text-label-sm text-on-primary-container/60 mt-1 uppercase tracking-widest">Platform Aggregate</p>
        </div>
    </div>
</div>

{/* <!-- Companies Table Section --> */}
<section className="mt-xl relative z-10">
    <div className="flex items-center justify-between mb-lg">
        <h3 className="font-headline-md text-headline-md text-on-surface">Recently Added Companies</h3>
        <button onClick={() => setShowModal(true)} className="px-md py-sm bg-on-primary-fixed-variant text-primary-fixed-dim rounded-lg font-label-md text-label-md flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
            Register New Company
        </button>
    </div>
    <div className="glass-panel rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-surface-container-high/50 border-b border-outline-variant">
                    <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Company Name</th>
                    <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Sector</th>
                    <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Date Created</th>
                    <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Invoice Count</th>
                    <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant text-right">Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
                <tr className="hover:bg-white/5 transition-colors group cursor-pointer">
                    <td className="px-lg py-md">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-bold text-primary-fixed">IT</div>
                            <span className="font-body-md text-body-md text-on-surface">Indus Tech Solutions</span>
                        </div>
                    </td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">Software Dev</td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">May 12, 2026</td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface">1,240</td>
                    <td className="px-lg py-md text-right">
                        <span className="px-2 py-1 bg-green-400/10 text-green-400 text-[10px] font-bold rounded uppercase tracking-widest border border-green-400/20">Active</span>
                    </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group cursor-pointer">
                    <td className="px-lg py-md">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-bold text-primary-fixed">KL</div>
                            <span className="font-body-md text-body-md text-on-surface">Khyber Logistics</span>
                        </div>
                    </td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">Supply Chain</td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">May 10, 2026</td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface">843</td>
                    <td className="px-lg py-md text-right">
                        <span className="px-2 py-1 bg-green-400/10 text-green-400 text-[10px] font-bold rounded uppercase tracking-widest border border-green-400/20">Active</span>
                    </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group cursor-pointer">
                    <td className="px-lg py-md">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-bold text-primary-fixed">HA</div>
                            <span className="font-body-md text-body-md text-on-surface">Habib Architects</span>
                        </div>
                    </td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">Construction</td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">May 09, 2026</td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface">215</td>
                    <td className="px-lg py-md text-right">
                        <span className="px-2 py-1 bg-yellow-400/10 text-yellow-400 text-[10px] font-bold rounded uppercase tracking-widest border border-yellow-400/20">Pending</span>
                    </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group cursor-pointer">
                    <td className="px-lg py-md">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-bold text-primary-fixed">ZS</div>
                            <span className="font-body-md text-body-md text-on-surface">Zafar &amp; Sons Traders</span>
                        </div>
                    </td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">Wholesale</td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">May 08, 2026</td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface">4,512</td>
                    <td className="px-lg py-md text-right">
                        <span className="px-2 py-1 bg-green-400/10 text-green-400 text-[10px] font-bold rounded uppercase tracking-widest border border-green-400/20">Active</span>
                    </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group cursor-pointer">
                    <td className="px-lg py-md">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-bold text-primary-fixed">PP</div>
                            <span className="font-body-md text-body-md text-on-surface">Peak Performance Gyms</span>
                        </div>
                    </td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">Services</td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">May 05, 2026</td>
                    <td className="px-lg py-md font-body-md text-body-md text-on-surface">92</td>
                    <td className="px-lg py-md text-right">
                        <span className="px-2 py-1 bg-error/10 text-error text-[10px] font-bold rounded uppercase tracking-widest border border-error/20">Suspended</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="p-lg bg-surface-container-high/30 border-t border-outline-variant flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Showing 5 of 1,284 companies</span>
            <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-primary bg-primary/10 text-primary font-bold text-[12px]">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:text-primary transition-all text-[12px]">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:text-primary transition-all text-[12px]">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
                </button>
            </div>
        </div>
    </div>
</section>

{/* <!-- Secondary Insights Grid --> */}
<div className="mt-gutter grid grid-cols-1 lg:grid-cols-3 gap-gutter relative z-10">
    {/* <!-- Platform Load Card --> */}
    <div className="glass-panel p-lg rounded-xl lg:col-span-1">
        <h4 className="font-label-md text-label-md text-on-surface mb-md">System Health</h4>
        <div className="flex items-center justify-between py-sm">
            <span className="font-body-md text-body-md text-on-surface-variant">Server Load</span>
            <span className="font-bold text-green-400">14%</span>
        </div>
        <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden mb-lg">
            <div className="w-[14%] h-full bg-green-400"></div>
        </div>
        <div className="flex items-center justify-between py-sm">
            <span className="font-body-md text-body-md text-on-surface-variant">API Latency</span>
            <span className="font-bold text-primary">24ms</span>
        </div>
        <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden mb-lg">
            <div className="w-[20%] h-full bg-primary"></div>
        </div>
        <div className="flex items-center justify-between py-sm">
            <span className="font-body-md text-body-md text-on-surface-variant">Database Storage</span>
            <span className="font-bold text-yellow-400">62%</span>
        </div>
        <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="w-[62%] h-full bg-yellow-400"></div>
        </div>
    </div>
    {/* <!-- Activity Feed --> */}
    <div className="glass-panel p-lg rounded-xl lg:col-span-2">
        <h4 className="font-label-md text-label-md text-on-surface mb-md">Global Activity Feed</h4>
        <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-outline-variant/30">
                <div className="w-10 h-10 rounded-full bg-on-primary-fixed-variant flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]" data-icon="shopping_cart">shopping_cart</span>
                </div>
                <div className="flex-1">
                    <p className="font-body-md text-body-md text-on-surface"><span className="font-bold text-primary-fixed-dim">Indus Tech</span> generated a new invoice for PKR 45,000.</p>
                    <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">2 minutes ago</span>
                </div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-outline-variant/30">
                <div className="w-10 h-10 rounded-full bg-on-primary-fixed-variant flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]" data-icon="person_add">person_add</span>
                </div>
                <div className="flex-1">
                    <p className="font-body-md text-body-md text-on-surface"><span className="font-bold text-primary-fixed-dim">Habib Architects</span> added 3 new clients to their profile.</p>
                    <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">15 minutes ago</span>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-error">
                    <span className="material-symbols-outlined text-[20px]" data-icon="report">report</span>
                </div>
                <div className="flex-1">
                    <p className="font-body-md text-body-md text-on-surface"><span className="font-bold text-primary-fixed-dim">Peak Performance</span> failed subscription payment (Auto-suspended).</p>
                    <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">1 hour ago</span>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    <CompanyModal  show={showModal} onClose={() => setShowModal(false)}/>
    </SuperadminLayout>
  )
}

export default Dashboard
