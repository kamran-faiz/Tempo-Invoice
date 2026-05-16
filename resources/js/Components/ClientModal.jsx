import React from 'react'
import { useForm } from '@inertiajs/react'


const ClientModal = ({show , onClose}) => {
    const form = useForm({
    name: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    ntn: '',
    cnic: '',
    client_type: 'b2b',
    business_id: '',        

    });

    const handleSubmit = () => {
       form.post(route('clients.store'))
    }
  return (
  <>
{show && (
<div  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

<div className="bg-white w-[560px] max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border border-outline-variant flex flex-col animate-in fade-in zoom-in duration-300">

<div className="px-8 py-6 flex justify-between items-center border-b border-outline-variant sticky top-0 bg-white z-10">
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Add New Client</h2>
<button onClick={onClose} className="text-outline hover:text-on-surface transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>

<div className="px-8 py-8 space-y-8">

<div className="flex gap-4">
<button onClick={() => form.setData('client_type', 'b2b') } className={`flex-1 py-3 px-4 border-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 transition-all ${form.data.client_type === 'b2b' ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant text-secondary hover:border-outline'}`}>
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>business</span>
                        B2B
                    </button>
<button onClick={() => form.setData('client_type', 'b2c') } className={`flex-1 py-3 px-4 border-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 transition-all ${form.data.client_type === 'b2c' ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant text-secondary hover:border-outline'}`}>
<span className="material-symbols-outlined">person</span>
                        B2C
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
<div className="col-span-2 space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant block">Business</label>
<input 
value={form.data.name}
onChange={e => form.setData('name', e.target.value)} 
className="w-full px-4 py-2.5 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-body-md" placeholder="e.g. Acme Corp Pakistan" type="text"/>
</div>
{form.data.client_type === 'b2b' ? (
    <div className="space-y-2">
        <label className="font-label-md text-label-md text-on-surface-variant block">NTN Number</label>
        <input value={form.data.ntn} onChange={e => form.setData('ntn', e.target.value)} className="w-full px-4 py-2.5 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-body-md" placeholder="XXXXXXX-X" type="text"/>
    </div>
) : (
    <div className="space-y-2">
        <label className="font-label-md text-label-md text-on-surface-variant block">CNIC Number</label>
        <input value={form.data.cnic} onChange={e => form.setData('cnic', e.target.value)} className="w-full px-4 py-2.5 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-body-md" placeholder="XXXXX-XXXXXXX-X" type="text"/>
    </div>
)}


<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant block">Phone</label>
<input
value={form.data.phone}
onChange={e => form.setData('phone', e.target.value)} 
className="w-full px-4 py-2.5 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-body-md" placeholder="+92 XXX XXXXXXX" type="tel"/>
</div>
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant block">Email</label>
<input
value={form.data.email}
onChange={e => form.setData('email', e.target.value)} 
className="w-full px-4 py-2.5 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-body-md" placeholder="client@company.com" type="email"/>
</div>
<div className="col-span-2 space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant block">City</label>
<div className="relative">
<select value={form.data.city}
onChange={e => form.setData('city', e.target.value)} className="w-full px-4 py-2.5 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-body-md appearance-none">
<option >Select City</option>
<option>Karachi</option>

</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
</div>
</div>
<div className="col-span-2 space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant block">Address</label>
<textarea 
value={form.data.address}
onChange={e => form.setData('address',e.target.value)}
className="w-full px-4 py-2.5 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-body-md resize-none" placeholder="Full postal address" rows="3"></textarea>
</div>
</div>

<div className="p-4 bg-tertiary/5 rounded-lg border border-tertiary/20 flex items-center gap-4">
<div className="w-10 h-10 rounded-full border-4 border-tertiary/20 border-t-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-[20px]" style={{fontVariationSettings: "'wght' 700"}}>check</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-tertiary font-bold">FBR Verification Ready</h4>
<p className="font-body-md text-body-md text-on-surface-variant">NTN will be auto-validated with federal records upon saving.</p>
</div>
</div>
</div>

<div className="px-8 py-6 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3 sticky bottom-0">
<button onClick={onClose} className="px-6 py-2.5 border border-outline-variant text-secondary hover:bg-surface-container-low rounded-lg font-label-md text-label-md transition-all">
                    Cancel
                </button>
<button onClick={handleSubmit} className="px-8 py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all">
                    Save Client
                </button>
</div>
</div>
</div>
)}
</> 
  )
}

export default ClientModal
