export default function AuthenticatedLayout({ title, children }) {
    return (
        <div>
            <aside className="fixed left-0 top-0 h-full w-[240px] bg-inverse-surface flex flex-col py-6 px-4 z-50">
                <div className="mb-10 px-2">
    <h1 className="font-headline-lg text-headline-lg text-on-primary-container">Tempo Invoice</h1>
    <p className="font-label-sm text-label-sm text-primary-fixed-dim opacity-70">Fintech Solutions</p>
</div>
<nav className="flex-grow flex flex-col gap-1">
    <a className="flex items-center gap-3 px-4 py-3 text-primary-fixed-dim bg-on-primary-fixed-variant rounded-lg font-bold opacity-90 transition-all" href="#">
        <span className="material-symbols-outlined">dashboard</span>
        <span className="font-label-md text-label-md">Dashboard</span>
    </a>
    <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed-dim hover:text-on-primary-fixed-variant hover:bg-on-primary-fixed-variant transition-colors duration-200" href="#">
        <span className="material-symbols-outlined">group</span>
        <span className="font-label-md text-label-md">Clients</span>
    </a>
    <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed-dim hover:text-on-primary-fixed-variant hover:bg-on-primary-fixed-variant transition-colors duration-200" href="#">
        <span className="material-symbols-outlined">inventory_2</span>
        <span className="font-label-md text-label-md">Products</span>
    </a>
    <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed-dim hover:text-on-primary-fixed-variant hover:bg-on-primary-fixed-variant transition-colors duration-200" href="#">
        <span className="material-symbols-outlined">description</span>
        <span className="font-label-md text-label-md">Invoices</span>
    </a>
    <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed-dim hover:text-on-primary-fixed-variant hover:bg-on-primary-fixed-variant transition-colors duration-200" href="#">
        <span className="material-symbols-outlined">receipt_long</span>
        <span className="font-label-md text-label-md">FBR Logs</span>
    </a>
    <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed-dim hover:text-on-primary-fixed-variant hover:bg-on-primary-fixed-variant transition-colors duration-200" href="#">
        <span className="material-symbols-outlined">settings</span>
        <span className="font-label-md text-label-md">Settings</span>
    </a>
</nav>
<div className="mt-auto border-t border-outline-variant/20 pt-6 flex flex-col gap-1">
    <div className="flex items-center gap-3 px-4 py-2 text-secondary-fixed-dim">
        <span className="material-symbols-outlined">account_circle</span>
        <span className="font-label-md text-label-md">Ali Khan</span>
    </div>
    <div className="flex items-center gap-3 px-4 py-2 text-secondary-fixed-dim">
        <span className="material-symbols-outlined">business</span>
        <span className="font-label-md text-label-md">Indus Tech Solutions</span>
    </div>
    <button className="flex items-center gap-3 px-4 py-3 text-error/80 hover:text-error transition-colors">
        <span className="material-symbols-outlined">logout</span>
        <span className="font-label-md text-label-md">Logout</span>
    </button>
</div>
            </aside>
            <header className="fixed top-0 left-[240px] right-0 h-20 bg-surface border-b border-outline-variant flex justify-between items-center px-8 z-40">

                <div>
    <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">{title}</h2>
</div>
<div className="flex items-center gap-8">
    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Friday, May 15 2026</span>
    <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="w-10 h-10 rounded-full border border-outline-variant overflow-hidden">
            <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcpR1d4RAlsNmlmbA19OQFvvJLY0vP5c0gGef0siA_Tm6yzQPzS1gxByI8DCnZj6fIaCcEY8GIHf8iK9CCmKXzOpHIg7q_VE_oPbyP48jKXXRhbM8xCGl1vUOBFktUsX6zjVVKOomDI5-K0aOYqRRaFuvolvnqZTkIe7FDfvH7aAMaPMM-lRllQTuuRVD1c4eec8IwSTx3g1foRB3D_OF8Wkcif5L8r3reqagby5Qq_BWDBJVUcXY74YLUZOsT7sVmLai5GfqSF101"/>
        </div>
    </div>
</div>
            </header>
            <main className="ml-[240px] pt-20 p-8 min-h-screen">{children}</main>
        </div>
    )
}