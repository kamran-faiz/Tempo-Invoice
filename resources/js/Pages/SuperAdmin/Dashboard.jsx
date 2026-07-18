import React from 'react'
import SuperadminLayout from '@/Layouts/SuperadminLayout'
import CompanyModal from '../../Components/CompanyModal'
import { useState } from 'react'
import { router } from '@inertiajs/react'

const Dashboard = ({ companies, metrics }) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedCompany, setSelectedCompany] = useState(null)

    const handleCreateOpen = () => {
        setSelectedCompany(null)
        setShowModal(true)
    }

    const handleEditOpen = (business) => {
        setSelectedCompany(business)
        setShowModal(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
        setSelectedCompany(null)
    }

    const deleteCompany = (id) => {
        if (!confirm('Are you sure you want to delete this Company')) return
        router.delete(route('companies.destroy', id))
    }

    const showCompany = (id) => {
        router.get(route('companies.show', id))
    }

    return (
        <SuperadminLayout title="Dashboard">
            <div>
                {/* Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative z-10">
                    {/* Total Companies */}
                    <div className="glass-panel p-lg rounded-xl flex flex-col justify-between h-40 hover:border-primary-fixed-dim transition-all group">
                        <div className="flex justify-between items-start">
                            <span className="font-label-md text-label-md text-on-surface-variant">Total Companies</span>
                            <span className="material-symbols-outlined text-primary" data-icon="apartment">apartment</span>
                        </div>
                        <div>
                            <h3 className="font-headline-lg text-headline-lg font-extrabold text-primary">
                                {metrics.total_companies}
                            </h3>
                        </div>
                    </div>

                    {/* Total Clients */}
                    <div className="glass-panel p-lg rounded-xl flex flex-col justify-between h-40 hover:border-primary-fixed-dim transition-all group">
                        <div className="flex justify-between items-start">
                            <span className="font-label-md text-label-md text-on-surface-variant">Total Clients</span>
                            <span className="material-symbols-outlined text-primary" data-icon="group">group</span>
                        </div>
                        <div>
                            <h3 className="font-headline-lg text-headline-lg font-extrabold text-primary">
                                {metrics.total_clients}
                            </h3>
                        </div>
                    </div>

                    {/* Total Invoices */}
                    <div className="glass-panel p-lg rounded-xl flex flex-col justify-between h-40 hover:border-primary-fixed-dim transition-all group">
                        <div className="flex justify-between items-start">
                            <span className="font-label-md text-label-md text-on-surface-variant">Total Invoices</span>
                            <span className="material-symbols-outlined text-primary" data-icon="description">description</span>
                        </div>
                        <div>
                            <h3 className="font-headline-lg text-headline-lg font-extrabold text-primary">
                                {metrics.total_invoices}
                            </h3>
                        </div>
                    </div>

                    {/* Total Invoice Sum */}
                    <div className="glass-panel p-lg rounded-xl flex flex-col justify-between h-40 border-primary/30 bg-primary/5 hover:border-primary transition-all group">
                        <div className="flex justify-between items-start">
                            <span className="font-label-md text-label-md text-primary">Total Revenue (PKR)</span>
                            <span
                                className="material-symbols-outlined text-primary"
                                data-icon="payments"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                payments
                            </span>
                        </div>
                        <div>
                            <h3 className="font-headline-lg text-headline-lg font-extrabold text-primary-fixed">
                                {Number(metrics.total_revenue).toLocaleString('en-PK', { maximumFractionDigits: 0 })}
                            </h3>
                            <p className="font-label-sm text-label-sm text-on-primary-container/60 mt-1 uppercase tracking-widest">
                                Platform Aggregate
                            </p>
                        </div>
                    </div>
                </div>

                {/* Companies Table Section */}
                <section className="mt-xl relative z-10">
                    <div className="flex items-center justify-between mb-lg">
                        <h3 className="font-headline-md text-headline-md text-on-surface">Recently Added Companies</h3>
                        <button
                            onClick={handleCreateOpen}
                            className="px-md py-sm bg-on-primary-fixed-variant text-primary-fixed-dim rounded-lg font-label-md text-label-md flex items-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            <span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                            Register New Company
                        </button>
                    </div>

                    <div className="glass-panel rounded-xl overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container-high/50 border-b border-outline-variant">
                                    <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Company Name</th>
                                    <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Owner</th>
                                    <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Admin</th>
                                    <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Email</th>
                                    <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/30">
                                {companies.map((business) => (
                                    <tr key={business.id} className="hover:bg-white/5 transition-colors group cursor-pointer">
                                        <td className="px-lg py-md">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center font-bold text-primary-fixed">
                                                    IT
                                                </div>
                                                <span className="font-body-md text-body-md text-on-surface">{business.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">
                                            {business.owner_name}
                                        </td>
                                        <td className="px-lg py-md font-body-md text-body-md text-on-surface-variant">
                                            {business.users?.[0]?.name}
                                        </td>
                                        <td className="px-lg py-md font-body-md text-body-md text-on-surface">
                                            {business.users?.[0]?.email}
                                        </td>
                                        <td className="px-lg py-md">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => showCompany(business.id)}
                                                    className="p-1.5 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant"
                                                >
                                                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                </button>
                                                <button
                                                    onClick={() => handleEditOpen(business)}
                                                    className="p-1.5 hover:bg-surface-container-high rounded transition-colors text-primary"
                                                >
                                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button
                                                    onClick={() => deleteCompany(business.id)}
                                                    className="p-1.5 hover:bg-surface-container-high rounded transition-colors text-error"
                                                >
                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="p-lg bg-surface-container-high/30 border-t border-outline-variant flex items-center justify-between">
                            <span className="font-label-sm text-label-sm text-on-surface-variant">
                                Showing {companies.length} of {companies.length} companies
                            </span>
                        </div>
                    </div>
                </section>
            </div>

            <CompanyModal show={showModal} company={selectedCompany} onClose={handleModalClose} />
        </SuperadminLayout>
    )
}

export default Dashboard