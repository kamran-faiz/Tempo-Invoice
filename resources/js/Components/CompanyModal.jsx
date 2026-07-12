import React from 'react'

const CompanyModal = () => {
  return (
    <div>
      <div className="fixed inset-0 glass-overlay flex items-center justify-center z-50 p-6 overflow-y-auto">
{/* <!-- Register New Company Modal --> */}
<div className="glass-panel w-full max-w-2xl rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
{/* <!-- Modal Header --> */}
<div className="px-xl py-lg border-b border-outline-variant flex justify-between items-center bg-white/5">
<h2 className="font-headline-md text-headline-md text-primary-fixed-dim">Register New Company</h2>
<button className="text-on-surface-variant hover:text-on-surface transition-colors p-2">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/* <!-- Modal Content Form --> */}
<form className="p-xl space-y-xl custom-scrollbar max-h-[716px] overflow-y-auto">
{/* <!-- Section 1: Company Information --> */}
<div className="space-y-md">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary-fixed-dim" style="font-variation-settings: 'FILL' 1;">business</span>
<h3 className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim/70 font-bold">Company Information</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div className="space-y-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Company Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all" placeholder="Enter legal company name" type="text"/>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Sector/Industry</label>
<select className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all appearance-none cursor-pointer">
<option disabled="" selected="" value="">Select industry sector</option>
<option>Financial Services</option>
<option>Technology</option>
<option>Manufacturing</option>
<option>Healthcare</option>
<option>Retail</option>
</select>
</div>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">City</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all" placeholder="Registered office city" type="text"/>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Address</label>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all resize-none" placeholder="Detailed physical address" rows="3"></textarea>
</div>
</div>
{/* <!-- Divider --> */}
<div className="h-px bg-outline-variant/30"></div>
{/* <!-- Section 2: Admin User Login --> */}
<div className="space-y-md">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary-fixed-dim" style="font-variation-settings: 'FILL' 1;">person_add</span>
<h3 className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim/70 font-bold">Admin User Login</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div className="space-y-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Full Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all" placeholder="Primary admin name" type="text"/>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Email Address</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all" placeholder="admin@company.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div className="space-y-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Password</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all" placeholder="••••••••" type="password"/>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer text-[20px]">visibility_off</span>
</div>
</div>
<div className="space-y-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Confirm Password</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all" placeholder="••••••••" type="password"/>
</div>
</div>
</div>
{/* <!-- Footer Buttons --> */}
<div classNameName="flex justify-end items-center gap-md pt-lg">
<button classNameName="px-6 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface border border-outline-variant hover:bg-surface-container transition-all active:scale-95" type="button">
                        Cancel
                    </button>
<button classNameName="px-8 py-3 rounded-lg font-label-md text-label-md bg-on-primary-fixed-variant text-white font-bold hover:opacity-90 shadow-lg shadow-indigo-900/20 transition-all active:scale-95 flex items-center gap-2" type="submit">
                        Create Company
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</form>
</div>
</div>
    </div>
  )
}

export default CompanyModal
