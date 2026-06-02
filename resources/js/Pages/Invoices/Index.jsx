import React from 'react'
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'
import { useState } from 'react'
import InvoiceModal from '../../Components/InvoiceModal'
import { router } from '@inertiajs/react'

const Index = ({ invoice = [], metrics = {} , clients = [],products = [] }) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedInvoice, setSelectedInvoice] = useState(null)
    const [activeFilter, setActiveFilter] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredInvoices = invoice.filter((item) => {
        const matchesSearch = 
            item.invoice_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.client?.name || '').toLowerCase().includes(searchQuery.toLowerCase());
        
        if (!matchesSearch) return false;

        if (activeFilter === 'All') return true;
        if (activeFilter === 'Unpaid') return item.payment_status === 'unpaid';
        if (activeFilter === 'Paid') return item.payment_status === 'paid';
        if (activeFilter === 'Overdue') return item.payment_status === 'overdue';
        if (activeFilter === 'FBR Pending') return ['pending', 'rejected'].includes(item.fbr_status);
        
        return true;
    });

    const handleCreateOpen = () => {
        setSelectedInvoice(null)
        setShowModal(true)
    }

    const handleEditOpen = (item) => {
        setSelectedInvoice(item)
        setShowModal(true)
    }

    const handleDeleteInvoice = (id) => {
        if (confirm('Are you sure you want to delete this invoice?')) {
            router.delete(route('invoices.destroy', id))
        }
    }

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-PK', {
            style: 'currency',
            currency: 'PKR',
            minimumFractionDigits: 0
        }).format(value || 0);
    }

    return (
        <AuthenticatedLayout title="Invoices">
            <div className="max-w-[1200px] mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <h1 className="font-headline-lg text-headline-lg text-on-surface">All Invoices</h1>
                        <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-label-sm font-label-sm rounded-full">
                            {filteredInvoices.length} invoices
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant" data-icon="search">search</span>
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-64 text-body-md font-body-md" 
                                placeholder="Search invoices..." 
                                type="text"
                            />
                        </div>
                        <button onClick={handleCreateOpen} className="bg-primary hover:opacity-90 text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 shadow-sm">
                            <span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                            Create Invoice
                        </button>
                    </div>
                </div>

                <div className="flex border-b border-outline-variant">
                    {['All', 'Unpaid', 'Paid', 'Overdue', 'FBR Pending'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveFilter(tab)}
                            className={`px-6 py-3 border-b-2 text-label-md transition-all ${
                                activeFilter === tab 
                                    ? 'border-primary text-primary font-bold' 
                                    : 'border-transparent text-on-surface-variant hover:text-primary font-medium'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
                        <p className="text-on-surface-variant text-label-sm font-label-sm mb-1 uppercase tracking-wider">Total Billed</p>
                        <p className="text-headline-md font-headline-md text-on-surface">{formatCurrency(metrics['total billed'])}</p>
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
                        <p className="text-on-surface-variant text-label-sm font-label-sm mb-1 uppercase tracking-wider">Total Collected</p>
                        <p className="text-headline-md font-headline-md text-tertiary">{formatCurrency(metrics['total collected'])}</p>
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
                        <p className="text-on-surface-variant text-label-sm font-label-sm mb-1 uppercase tracking-wider">Outstanding Amount</p>
                        <p className="text-headline-md font-headline-md text-error">{formatCurrency(metrics['total outstanding'])}</p>
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
                        <p className="text-on-surface-variant text-label-sm font-label-sm mb-1 uppercase tracking-wider">FBR Unsubmitted</p>
                        <p className="text-headline-md font-headline-md text-primary">{metrics['fbr unsumbitted']} Invoices</p>
                    </div>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-surface-container-low border-b border-outline-variant">
                            <tr>
                                <th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Invoice #</th>
                                <th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Client Name</th>
                                <th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Issue Date</th>
                                <th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Due Date</th>
                                <th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-right">Tax</th>
                                <th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-right">Total</th>
                                <th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Payment</th>
                                <th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">FBR Status</th>
                                <th className="px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant">
                            {filteredInvoices.length === 0 ? (
                                <tr>
                                    <td colSpan="10" className="px-6 py-12 text-center text-on-surface-variant text-body-md">
                                        No invoices found matching your criteria.
                                    </td>
                                </tr>
                            ) : (
                                filteredInvoices.map((item) => (
                                    <tr key={item.id} className="hover:bg-surface-container transition-colors group">
                                        <td className="px-6 py-4 font-body-md text-body-md text-primary font-medium">{item.invoice_number}</td>
                                        <td className="px-6 py-4 font-body-md text-body-md text-on-surface">{item.client?.name || 'N/A'}</td>
                                        <td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">{item.issue_date}</td>
                                        <td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">{item.due_date}</td>
                                        <td className="px-6 py-4 font-body-md text-body-md">{formatCurrency(item.amount)}</td>
                                        <td className="px-6 py-4 font-body-md text-body-md text-right">{formatCurrency(item.tax)}</td>
                                        <td className="px-6 py-4 font-body-md text-body-md text-right font-semibold">{formatCurrency(item.total)}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-0.5 rounded-full text-label-sm font-medium ${
                                                item.payment_status === 'paid' ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant' :
                                                item.payment_status === 'overdue' ? 'bg-error-container text-on-error-container' : 
                                                'bg-surface-variant text-on-surface-variant'
                                            }`}>{item.payment_status}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={`flex items-center gap-1.5 ${
                                                item.fbr_status === 'validated' ? 'text-tertiary' :
                                                item.fbr_status === 'rejected' ? 'text-error' : 'text-on-surface-variant'
                                            }`}>
                                                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                                    {item.fbr_status === 'validated' ? 'check_circle' : 
                                                     item.fbr_status === 'rejected' ? 'cancel' : 'hourglass_empty'}
                                                </span>
                                                <span className="text-label-sm font-medium capitalize">{item.fbr_status}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button 
                                                    onClick={() => handleEditOpen(item)}
                                                    className="p-1.5 hover:bg-surface-container-high rounded transition-colors text-primary"
                                                >
                                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button 
                                                    onClick={() => handleDeleteInvoice(item.id)}
                                                    className="p-1.5 hover:bg-surface-container-high rounded transition-colors text-error"
                                                >
                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    <div className="px-6 py-4 border-t border-outline-variant flex items-center justify-between">
                        <p className="text-body-md font-body-md text-on-surface-variant">Showing {filteredInvoices.length} invoices</p>
                        <div className="flex items-center gap-2">
                            <button className="px-3 py-1.5 border border-outline-variant rounded-lg hover:bg-surface-container text-on-surface-variant transition-colors disabled:opacity-50" disabled="">
                                <span className="material-symbols-outlined text-[20px]" data-icon="chevron_left">chevron_left</span>
                            </button>
                            <button className="px-4 py-1.5 bg-primary text-on-primary rounded-lg font-medium text-body-md">1</button>
                            <button className="px-3 py-1.5 border border-outline-variant rounded-lg hover:bg-surface-container text-on-surface-variant transition-colors">
                                <span className="material-symbols-outlined text-[20px]" data-icon="chevron_right">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <InvoiceModal show={showModal} invoice={selectedInvoice} products={products} clients={clients} onClose={() => setShowModal(false)}/>
        </AuthenticatedLayout>
    )
}

export default Index