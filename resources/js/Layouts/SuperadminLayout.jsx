import { useEffect } from 'react'
import { usePage, Link } from '@inertiajs/react'
import toast, { Toaster } from 'react-hot-toast'

export default function SuperAdminLayout({ title, children }) {
    const { url, props } = usePage()
    const { flash } = props

    useEffect(() => {
        if (flash?.success) toast.success(flash.success)
        if (flash?.error) toast.error(flash.error)
    }, [flash])

    return (
        <div>
            <aside className="fixed left-0 top-0 h-full w-[240px] bg-inverse-surface flex flex-col py-6 px-4 z-50">
                <div className="mb-10 px-2">
                    <h1 className="font-headline-lg text-headline-lg font-extrabold text-on-primary-container tracking-tighter">Tempo</h1>
                    <p className="font-label-sm text-label-sm text-secondary-fixed-dim opacity-70">Platform Admin</p>
                </div>

                <nav className="flex-1 space-y-2">
                    <Link className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-label-md text-label-md ${url === '/superadmin/dashboard' ? 'text-primary-fixed-dim bg-on-primary-fixed-variant font-bold opacity-90' : 'text-secondary-fixed-dim hover:text-primary-fixed-dim hover:bg-on-primary-fixed-variant'}`} href="/superadmin/dashboard">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="font-label-md text-label-md">Dashboard</span>
                    </Link>
                    <Link className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-label-md text-label-md ${url.startsWith('/superadmin/companies') ? 'text-primary-fixed-dim bg-on-primary-fixed-variant font-bold opacity-90' : 'text-secondary-fixed-dim hover:text-primary-fixed-dim hover:bg-on-primary-fixed-variant'}`} href="/superadmin/companies">
                        <span className="material-symbols-outlined">apartment</span>
                        <span className="font-label-md text-label-md">Companies</span>
                    </Link>
                </nav>

                <div className="pt-6 border-t border-outline-variant/20 space-y-4">
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold overflow-hidden">
                            <img className="w-full h-full object-cover" alt="Superadmin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9KalizLILOQTTwsJ60E5kUvmBr3FN3zhmPY-akpNemlslL9e6eH170SvhlzvmRhwhfGRz7D5_bDGOTEvrvfHzGCvtkF2OeIG5gPKm4j_LBw_-Qtylsv5WBhV-AvFIxqsqQUihPL01IAvVl3ga9vTu5HAZGRpA8-Dtk1o-sNC5VIZOveCdVogk82SDxoGixqkgJof-nlUMk8dE-DqiaCMKVb9sWC0D-QcujwJBjX3NiPlM2RqKO1f68N4ZVuX4-KueUqErVMhCTNP8" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-primary-fixed-dim">Ali Khan</span>
                            <span className="px-2 py-0.5 bg-on-primary-fixed-variant/50 text-[10px] font-bold text-primary rounded-full w-max uppercase tracking-widest">Superadmin</span>
                        </div>
                    </div>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-error hover:bg-error/10 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">logout</span>
                        <span className="font-label-md text-label-md">Logout</span>
                    </button>
                </div>
            </aside>

            <header className="fixed top-0 left-[240px] w-[calc(100%-240px)] h-20 bg-surface flex justify-between items-center px-8 z-40 border-b border-outline-variant">
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">{title}</h2>
                <div className="flex items-center gap-8">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Friday, May 15 2026</span>
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-on-surface-variant hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
                        </button>
                        <div className="w-10 h-10 rounded-full border-2 border-primary-container p-0.5">
                            <img className="w-full h-full rounded-full object-cover" alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbNVSy8R4rYVeaIF82kkCD2EGL-7pjUZANW4YuTNu0rVYodyAbNschSJ-zeIn6bqfLGwOB15i_S3f4NAcMQGLudNxe7Vps30isGTlqkWuzmut-oiIB70bHwGTuGDkicYyuyNjWMe6GOEdrC6hXd4l3ZM5QdvXMBxIF7Pe4N-ly6sZPsOW1IpKkMME5I1CjM7ZmwPpk9sj1YtMpP_fy65JelHimDunAE3g1NTYjVMFvM1Z9dkSkRjL3SuXVtc_NuBKAOMraakTMxFBD" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="ml-[240px] pt-32 pb-12 px-8 min-h-screen relative">
                {children}
            </main>
            <Toaster />
        </div>
    )
}
