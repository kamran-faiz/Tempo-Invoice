import React from 'react'
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout'


const Index = ({products}) => {
  return (
    <AuthenticatedLayout title="Products List">
        <section className="p-margin_desktop space-y-stack_lg max-w-container_max_width">
{/* <!-- Page Header Row --> */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-baseline gap-3">
<h3 className="font-headline-md text-headline-md text-on-surface">All Products</h3>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-label-sm rounded-full">36 products</span>
</div>
<div className="flex flex-wrap items-center gap-3">
<div className="relative min-w-[280px]">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-body-md transition-all" placeholder="Search products..." type="text"/>
</div>
<button className="flex items-center gap-2 bg-primary-container text-on-primary-container px-5 py-2.5 rounded-xl font-label-md hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                        Add Product
                    </button>
</div>
</div>
{/* <!-- Filter Tabs --> */}
<div className="flex border-b border-outline-variant">
<button className="px-6 py-3 font-label-md text-primary border-b-2 border-primary">All</button>
<button className="px-6 py-3 font-label-md text-on-surface-variant hover:text-on-surface transition-colors">Active</button>
<button className="px-6 py-3 font-label-md text-on-surface-variant hover:text-on-surface transition-colors">Inactive</button>
</div>
{/* <!-- Products Table Container --> */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase">Product Name</th>
<th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase">Description</th>
<th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase text-right">Unit Price (PKR)</th>
<th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase text-center">Tax (%)</th>
<th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase">Unit</th>
<th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase">Status</th>
<th className="px-6 py-4 font-label-sm text-on-surface-variant uppercase text-right">Actions</th>
</tr>
</thead>
<tbody  className="divide-y divide-outline-variant">{products.map(product => (

<tr key={product.id} className="hover:bg-surface-container transition-colors group">
<td className="px-6 py-4 font-body-md text-on-surface font-semibold">{product.name}</td>
<td className="px-6 py-4 font-body-md text-on-surface-variant truncate max-w-[240px]">{product.description}</td>
<td className="px-6 py-4 font-body-md text-on-surface text-right">{product.unit_price}</td>
<td className="px-6 py-4 font-body-md text-on-surface-variant text-center">{product.tax_rate}</td>
<td className="px-6 py-4 font-body-md text-on-surface-variant">{product.unit}</td>
<td className="px-6 py-4">
<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
  product.is_active 
    ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant' 
    : 'bg-surface-container-high text-on-surface-variant'
}`}>
  {product.is_active ? 'Active' : 'Inactive'}
</span></td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-surface-container-high rounded text-on-surface-variant" title="Edit">
<span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span>
</button>
<button className="p-1.5 hover:bg-surface-container-high rounded text-on-surface-variant" title="Toggle Status">
<span className="material-symbols-outlined text-[20px]" data-icon="toggle_on">toggle_on</span>
</button>
</div>
</td>
</tr>
))}

</tbody>
</table>
</div>
{/* <!-- Pagination Footer --> */}
<div className="px-6 py-4 bg-surface flex items-center justify-between border-t border-outline-variant">
<span className="font-body-md text-on-surface-variant">Showing 1-8 of 36 products</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 border border-outline-variant rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50" disabled="">
                            Previous
                        </button>
<div className="flex items-center">
<button className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-md">1</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container font-label-md">2</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container font-label-md">3</button>
<span className="w-9 h-9 flex items-center justify-center text-on-surface-variant">...</span>
<button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container font-label-md">5</button>
</div>
<button className="px-3 py-1.5 border border-outline-variant rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                            Next
                        </button>
</div>
</div>
</div>
{/* <!-- Bento Stats Grid (Optional Decorative Depth) --> */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 bg-surface-container-low border border-outline-variant rounded-xl">
<p className="font-label-sm text-on-surface-variant uppercase mb-2">Most Popular</p>
<h4 className="font-headline-md text-headline-md text-on-surface">Cloud Infra</h4>
<p className="font-body-md text-on-surface-variant mt-1">12 active contracts</p>
</div>
<div className="p-6 bg-surface-container-low border border-outline-variant rounded-xl">
<p className="font-label-sm text-on-surface-variant uppercase mb-2">Average Price</p>
<h4 className="font-headline-md text-headline-md text-on-surface">PKR 320,400</h4>
<p className="font-body-md text-on-surface-variant mt-1">+4.2% from last quarter</p>
</div>
<div className="p-6 bg-tertiary-container/10 border border-tertiary-container/20 rounded-xl">
<p className="font-label-sm text-tertiary uppercase mb-2">FBR Compliance</p>
<h4 className="font-headline-md text-headline-md text-tertiary flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
                        Verified
                    </h4>
<p className="font-body-md text-tertiary mt-1">All tax rates validated</p>
</div>
</div>
</section>
    </AuthenticatedLayout>
  )
}

export default Index
