import React from 'react'
import {useForm} from '@inertiajs/react'

const ProductModal = ({onClose, product}) => {
  const form = useForm({
    name: product?.name || '',
    description: product?.description || '',
    unit_price: product?.unit_price || '',
    tax_rate: product?.tax_rate || '',
    unit: product?.unit || 'unit', // Set a sensible default select option
    is_active: product?.is_active ?? true, // Default new items to active
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    form.post(route('products.store'), {
      onSuccess : () => {
        onClose();
        form.reset();
      }
    })
  }
    
  return (
    <form onSubmit={handleSubmit}>
      {/* <!-- Modal Body (Form) --> */}
      <div className="px-8 py-6 overflow-y-auto space-y-stack_lg">
        
        {/* <!-- Product Name --> */}
        <div className="space-y-stack_sm">
          <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="p-name">Product Name</label>
          <input 
            value={form.data.name}
            onChange={e => form.setData('name', e.target.value)} 
            className={`w-full bg-white border rounded-lg px-4 py-2.5 font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${form.errors.name ? 'border-error' : 'border-outline-variant'}`} 
            id="p-name" 
            placeholder="Enter product or service name" 
            type="text"
          />
          {form.errors.name && <div className="text-error text-xs mt-1">{form.errors.name}</div>}
        </div>

        {/* <!-- Description --> */}
        <div className="space-y-stack_sm">
          <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="p-desc">Description <span className="text-outline italic text-xs">(Optional)</span></label>
          <textarea
            value={form.data.description}
            onChange={e => form.setData('description', e.target.value)} 
            className="w-full bg-white border border-outline-variant rounded-lg px-4 py-2.5 font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" 
            id="p-desc" 
            placeholder="Brief details about the product..." 
            rows="3"
          ></textarea>
        </div>

        {/* <!-- Row: Price and Tax --> */}
        <div className="grid grid-cols-2 gap-stack_lg">
          <div className="space-y-stack_sm">
            <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="p-price">Unit Price</label>
            <div className="relative flex items-center">
              <span className="absolute left-4 font-body-md text-body-md text-outline">PKR</span>
              <input
                value={form.data.unit_price}
                onChange={e => form.setData('unit_price', e.target.value)} 
                className={`w-full bg-white border rounded-lg pl-14 pr-4 py-2.5 font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${form.errors.unit_price ? 'border-error' : 'border-outline-variant'}`} 
                id="p-price" 
                placeholder="0.00" 
                type="number"
                step="0.01"
              />
            </div>
            {form.errors.unit_price && <div className="text-error text-xs mt-1">{form.errors.unit_price}</div>}
          </div>

          <div className="space-y-stack_sm">
            <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="p-tax">Tax Rate</label>
            <div className="relative flex items-center">
              <input
                value={form.data.tax_rate}
                onChange={e => form.setData('tax_rate', e.target.value)} 
                className={`w-full bg-white border rounded-lg px-4 py-2.5 font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${form.errors.tax_rate ? 'border-error' : 'border-outline-variant'}`} 
                id="p-tax" 
                type="number" 
                step="0.01"
              />
              <span className="absolute right-4 font-body-md text-body-md text-outline">%</span>
            </div>
            {form.errors.tax_rate && <div className="text-error text-xs mt-1">{form.errors.tax_rate}</div>}
          </div>
        </div>

        {/* <!-- Row: Unit and Status --> */}
        <div className="grid grid-cols-2 gap-stack_lg items-end">
          <div className="space-y-stack_sm">
            <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="p-unit">Unit</label>
            <div className="relative">
              <select
                value={form.data.unit}
                onChange={e => form.setData('unit', e.target.value)} 
                className="w-full appearance-none bg-white border border-outline-variant rounded-lg px-4 py-2.5 font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" 
                id="p-unit"
              >
                <option value="unit">Unit</option>
                <option value="hour">Hour</option>
                <option value="day">Day</option>
                <option value="month">Month</option>
                <option value="piece">Piece</option>
                <option value="service">Service</option>
                <option value="license">License</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline" data-icon="expand_more">expand_more</span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-surface-container-low border border-outline-variant rounded-lg px-4 py-[11px]">
            <span className="font-label-md text-label-md text-on-surface">Active Status</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                checked={!!form.data.is_active}
                onChange={e => form.setData('is_active', e.target.checked)}
                className="sr-only peer" 
                type="checkbox" 
              />
              <div className="w-11 h-6 bg-secondary-fixed rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        {/* <!-- FBR Notice --> */}
        <div className="p-4 bg-tertiary-container/10 border border-tertiary/20 rounded-lg flex gap-3">
          <span className="material-symbols-outlined text-tertiary" data-icon="verified_user">verified_user</span>
          <div className="space-y-1">
            <p className="font-label-md text-label-md text-on-tertiary-fixed-variant">FBR Compliance</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">This product will be automatically validated against current Pakistani sales tax regulations upon saving.</p>
          </div>
        </div>
      </div>

      {/* <!-- Modal Footer --> */}
      <div className="px-8 py-6 border-t border-outline-variant bg-surface-container-low flex justify-end items-center gap-4">
        <button 
          type="button" 
          onClick={onClose} 
          className="px-6 py-2.5 border border-outline rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container transition-colors"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          disabled={form.processing}
          className="px-8 py-2.5 bg-primary text-on-primary rounded-lg font-label-md hover:bg-on-primary-fixed-variant shadow-sm transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
        >
          {form.processing ? 'Saving...' : 'Save Product'}
        </button>
      </div>
    </form>
  )
}

export default ProductModal