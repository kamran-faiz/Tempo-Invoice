import React from 'react'
import { useForm } from '@inertiajs/react'
import { useEffect } from 'react'

const ClientModal = ({ show, onClose, client }) => {
    const form = useForm({
        name: client?.name || '',
        email: client?.email || '',
        phone: client?.phone || '',
        city: client?.city || '',
        address: client?.address || '',
        ntn: client?.ntn || '',
        cnic: client?.cnic || '',
        client_type: client?.client_type || 'b2b',
        business_id: client?.business_id || '',
    });

    useEffect(() => {
        if (client) {
            form.setData({
                name: client.name || '',
                email: client.email || '',
                phone: client.phone || '',
                city: client.city || '',
                address: client.address || '',
                ntn: client.ntn || '',
                cnic: client.cnic || '',
                client_type: client.client_type || 'b2b',
                business_id: client.business_id || '',
            })
        } else {
            form.reset()
        }
    }, [client])

    const handleSubmit = () => {
        if (client) {
            form.put(route('clients.update', client.id), {
                onSuccess: () => {
                    onClose();
                    form.reset();
                }
            })
        } else {
            form.post(route('clients.store'), {
                onSuccess: () => {
                    onClose();
                    form.reset();
                }
            })
        }
    }

    return (
        <>
            {show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

                    <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl shadow-xl border border-gray-200 flex flex-col">

                        {/* Header */}
                        <div className="px-6 py-5 flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white z-10">
                            <h2 className="text-lg font-semibold text-gray-900">
                                {client ? 'Edit Client' : 'Add Client'}
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-700 transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-6 py-6 space-y-6">

                            {/* Client type toggle */}
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => form.setData('client_type', 'b2b')}
                                    className={`flex-1 py-2.5 px-4 border rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                                        form.data.client_type === 'b2b'
                                            ? 'border-blue-600 bg-blue-600 text-white'
                                            : 'border-gray-300 text-gray-600 hover:border-gray-400'
                                    }`}
                                >
                                    <span className="material-symbols-outlined text-base">business</span>
                                    B2B
                                </button>
                                <button
                                    type="button"
                                    onClick={() => form.setData('client_type', 'b2c')}
                                    className={`flex-1 py-2.5 px-4 border rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                                        form.data.client_type === 'b2c'
                                            ? 'border-blue-600 bg-blue-600 text-white'
                                            : 'border-gray-300 text-gray-600 hover:border-gray-400'
                                    }`}
                                >
                                    <span className="material-symbols-outlined text-base">person</span>
                                    B2C
                                </button>
                            </div>

                            {/* Form grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">

                                <div className="col-span-2 space-y-1.5">
                                    <label className="text-sm font-medium text-gray-600 block">
                                        Business Name
                                    </label>
                                    <input
                                        value={form.data.name}
                                        onChange={e => form.setData('name', e.target.value)}
                                        className="w-full px-3.5 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        placeholder="e.g. Acme Corp Pakistan"
                                        type="text"
                                    />
                                    {form.errors.name && (
                                        <p className="text-red-600 text-xs">{form.errors.name}</p>
                                    )}
                                </div>

                                {form.data.client_type === 'b2b' ? (
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-600 block">
                                            NTN Number
                                        </label>
                                        <input
                                            value={form.data.ntn}
                                            onChange={e => form.setData('ntn', e.target.value)}
                                            className="w-full px-3.5 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                            placeholder="XXXXXXX-X"
                                            type="text"
                                        />
                                        {form.errors.ntn && (
                                            <p className="text-red-600 text-xs">{form.errors.ntn}</p>
                                        )}
                                    </div>
                                ) : (
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-gray-600 block">
                                            CNIC Number
                                        </label>
                                        <input
                                            value={form.data.cnic}
                                            onChange={e => form.setData('cnic', e.target.value)}
                                            className="w-full px-3.5 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                            placeholder="XXXXX-XXXXXXX-X"
                                            type="text"
                                        />
                                        {form.errors.cnic && (
                                            <p className="text-red-600 text-xs">{form.errors.cnic}</p>
                                        )}
                                    </div>
                                )}

                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-gray-600 block">
                                        Phone
                                    </label>
                                    <input
                                        value={form.data.phone}
                                        onChange={e => form.setData('phone', e.target.value)}
                                        className="w-full px-3.5 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        placeholder="+92 XXX XXXXXXX"
                                        type="tel"
                                    />
                                    {form.errors.phone && (
                                        <p className="text-red-600 text-xs">{form.errors.phone}</p>
                                    )}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-gray-600 block">
                                        Email
                                    </label>
                                    <input
                                        value={form.data.email}
                                        onChange={e => form.setData('email', e.target.value)}
                                        className="w-full px-3.5 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        placeholder="client@company.com"
                                        type="email"
                                    />
                                    {form.errors.email && (
                                        <p className="text-red-600 text-xs">{form.errors.email}</p>
                                    )}
                                </div>

                                <div className="col-span-2 space-y-1.5">
                                    <label className="text-sm font-medium text-gray-600 block">
                                        City
                                    </label>
                                    <div className="relative">
                                        <select
                                            value={form.data.city}
                                            onChange={e => form.setData('city', e.target.value)}
                                            className="w-full px-3.5 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none"
                                        >
                                            <option value="">Select City</option>
                                            <option value="Karachi">Karachi</option>
                                            <option value="Lahore">Lahore</option>
                                            <option value="Islamabad">Islamabad</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-lg">
                                            expand_more
                                        </span>
                                    </div>
                                    {form.errors.city && (
                                        <p className="text-red-600 text-xs">{form.errors.city}</p>
                                    )}
                                </div>

                                <div className="col-span-2 space-y-1.5">
                                    <label className="text-sm font-medium text-gray-600 block">
                                        Address
                                    </label>
                                    <textarea
                                        value={form.data.address}
                                        onChange={e => form.setData('address', e.target.value)}
                                        className="w-full px-3.5 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                                        placeholder="Full postal address"
                                        rows="3"
                                    ></textarea>
                                    {form.errors.address && (
                                        <p className="text-red-600 text-xs">{form.errors.address}</p>
                                    )}
                                </div>
                            </div>

                            {/* FBR notice */}
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200 flex items-center gap-3">
                                <div className="w-9 h-9 shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-green-600 text-lg">check</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-green-800">
                                        FBR Verification Ready
                                    </h4>
                                    <p className="text-sm text-green-700">
                                        NTN will be auto-validated with federal records upon saving.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3 sticky bottom-0">
                            <button
                                onClick={onClose}
                                type="button"
                                className="px-5 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={form.processing}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-sm hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none"
                            >
                                {form.processing ? 'Saving...' : (client ? 'Update Client' : 'Save Client')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ClientModal