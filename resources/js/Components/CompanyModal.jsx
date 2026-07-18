import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react'

const CompanyModal = ({ show, company, onClose }) => {
    const isEditMode = Boolean(company)

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: '',
        owner_name: '',
        user: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
    })

    useEffect(() => {
        if (company) {
            setData({
                name: company.name ?? '',
                owner_name: company.owner_name ?? '',
                user: {
                    name: company.users?.[0]?.name ?? '',
                    email: company.users?.[0]?.email ?? '',
                    password: '',
                    password_confirmation: '',
                },
            })
        } else {
            reset()
        }
    }, [company])

    if (!show) return null

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isEditMode) {
            put(route('companies.update', company.id), {
                onSuccess: () => {
                    reset()
                    onClose()
                },
            })
        } else {
            post(route('companies.store'), {
                onSuccess: () => {
                    reset()
                    onClose()
                },
            })
        }
    }

    return (
        <div className="fixed inset-0 glass-overlay flex items-center justify-center z-50 p-6 overflow-y-auto">
            <div className="glass-panel w-full max-w-2xl rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="px-xl py-lg border-b border-outline-variant flex justify-between items-center bg-white/5">
                    <h2 className="font-headline-md text-headline-md text-primary-fixed-dim">
                        {isEditMode ? 'Edit Company' : 'Register New Company'}
                    </h2>
                    <button type="button" onClick={onClose} className="text-on-surface-variant hover:text-on-surface transition-colors p-2">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-xl space-y-xl custom-scrollbar max-h-[716px] overflow-y-auto">
                    {/* Section 1: Company Information */}
                    <div className="space-y-md">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>business</span>
                            <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim/70 font-bold">Company Information</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                            <div className="space-y-xs">
                                <label className="font-label-sm text-label-sm text-on-surface-variant">Company Name</label>
                                <input
                                    className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all"
                                    placeholder="Enter legal company name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                {errors.name && <p className="text-error text-label-sm">{errors.name}</p>}
                            </div>
                            <div className="space-y-xs">
                                <label className="font-label-sm text-label-sm text-on-surface-variant">Owner Name</label>
                                <input
                                    className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all"
                                    placeholder="Company owner's name"
                                    type="text"
                                    value={data.owner_name}
                                    onChange={(e) => setData('owner_name', e.target.value)}
                                />
                                {errors.owner_name && <p className="text-error text-label-sm">{errors.owner_name}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-outline-variant/30"></div>

                    {/* Section 2: Admin User Login */}
                    <div className="space-y-md">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
                            <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim/70 font-bold">Admin User Login</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                            <div className="space-y-xs">
                                <label className="font-label-sm text-label-sm text-on-surface-variant">Full Name</label>
                                <input
                                    className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all"
                                    placeholder="Primary admin name"
                                    type="text"
                                    value={data.user.name}
                                    onChange={(e) => setData('user', { ...data.user, name: e.target.value })}
                                />
                                {errors['user.name'] && <p className="text-error text-label-sm">{errors['user.name']}</p>}
                            </div>
                            <div className="space-y-xs">
                                <label className="font-label-sm text-label-sm text-on-surface-variant">Email Address</label>
                                <input
                                    className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all"
                                    placeholder="admin@company.com"
                                    type="email"
                                    value={data.user.email}
                                    onChange={(e) => setData('user', { ...data.user, email: e.target.value })}
                                />
                                {errors['user.email'] && <p className="text-error text-label-sm">{errors['user.email']}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                            <div className="space-y-xs">
                                <label className="font-label-sm text-label-sm text-on-surface-variant">
                                    Password {isEditMode && <span className="opacity-60 normal-case">(leave blank to keep current)</span>}
                                </label>
                                <input
                                    className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all"
                                    placeholder="••••••••"
                                    type="password"
                                    value={data.user.password}
                                    onChange={(e) => setData('user', { ...data.user, password: e.target.value })}
                                />
                                {errors['user.password'] && <p className="text-error text-label-sm">{errors['user.password']}</p>}
                            </div>
                            <div className="space-y-xs">
                                <label className="font-label-sm text-label-sm text-on-surface-variant">Confirm Password</label>
                                <input
                                    className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 text-on-surface focus:border-primary-fixed-dim transition-all"
                                    placeholder="••••••••"
                                    type="password"
                                    value={data.user.password_confirmation}
                                    onChange={(e) => setData('user', { ...data.user, password_confirmation: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end items-center gap-md pt-lg">
                        <button type="button" onClick={onClose} className="px-6 py-3 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface border border-outline-variant hover:bg-surface-container transition-all active:scale-95">
                            Cancel
                        </button>
                        <button type="submit" disabled={processing} className="px-8 py-3 rounded-lg font-label-md text-label-md bg-on-primary-fixed-variant text-white font-bold hover:opacity-90 shadow-lg shadow-indigo-900/20 transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50">
                            {isEditMode ? 'Update Company' : 'Create Company'}
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompanyModal