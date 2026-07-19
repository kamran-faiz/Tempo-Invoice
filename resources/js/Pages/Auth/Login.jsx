import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Login({ status, canResetPassword }) {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in" />

            <main className="min-h-screen flex flex-col md:flex-row">
                {/* Left Column: Branding */}
                <section className="hidden md:flex md:w-[45%] bg-near-black relative overflow-hidden flex-col justify-center items-center p-margin_desktop border-r border-outline-variant">
                    <div className="absolute inset-0 mesh-gradient opacity-50"></div>
                    <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full"></div>
                    <div className="relative z-10 text-center">
                        <div className="flex items-center justify-center mb-stack_md">
                            <span
                                className="material-symbols-outlined text-primary text-4xl mr-3"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                account_balance_wallet
                            </span>
                            <h1 className="font-headline-lg text-headline-lg font-bold text-surface-bright tracking-tight">
                                Tempo Invoice
                            </h1>
                        </div>
                        <p className="font-body-lg text-body-lg text-outline-variant max-w-[280px] mx-auto leading-relaxed">
                            Smart invoicing for Pakistani businesses
                        </p>
                        <div className="mt-stack_lg inline-flex items-center bg-surface-container-highest/5 border border-outline-variant/20 px-4 py-2 rounded-full">
                            <span
                                className="material-symbols-outlined text-tertiary-fixed-dim text-sm mr-2"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                verified
                            </span>
                            <span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest">
                                FBR COMPLIANT SYSTEM
                            </span>
                        </div>
                    </div>
                    <div className="absolute bottom-12 left-12 opacity-20">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
                            <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
                            <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
                        </div>
                    </div>
                </section>

                {/* Right Column: Login Form */}
                <section className="flex-1 md:w-[55%] flex flex-col justify-center items-center p-margin_mobile md:p-margin_desktop bg-surface">
                    <div className="md:hidden mb-stack_lg flex items-center">
                        <span
                            className="material-symbols-outlined text-primary text-3xl mr-2"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            account_balance_wallet
                        </span>
                        <span className="font-headline-md text-headline-md font-bold text-on-surface">Tempo Invoice</span>
                    </div>

                    <div className="w-full max-w-[420px] space-y-stack_lg">
                        <div className="space-y-2">
                            <h2 className="font-display-lg text-display-lg text-on-surface">Welcome back</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Sign in to your Tempo Invoice account
                            </p>
                        </div>

                        {status && (
                            <div className="font-label-md text-label-md font-medium text-tertiary">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-stack_md">
                            {/* Email Input */}
                            <div className="space-y-2">
                                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    autoComplete="username"
                                    autoFocus
                                    required
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none"
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">
                                        Password
                                    </label>
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="font-label-md text-label-md text-primary hover:opacity-80 transition-opacity"
                                        >
                                            Forgot password?
                                        </Link>
                                    )}
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        autoComplete="current-password"
                                        required
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    name="remember"
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded border-outline-variant text-primary focus:ring-primary/20"
                                />
                                <label htmlFor="remember" className="ms-2 font-label-md text-label-md text-on-surface-variant">
                                    Remember me
                                </label>
                            </div>

                            {/* Action Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full py-4 bg-primary text-on-primary font-label-md text-label-md font-semibold rounded-lg hover:bg-primary-container active:opacity-90 transition-all duration-200 shadow-sm disabled:opacity-50"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full hidden md:block">
                <div className="flex justify-between items-center w-full px-margin_desktop py-stack_md max-w-container_max_width mx-auto">
                    <p className="font-label-sm text-label-sm text-outline">© 2026 Tempo Invoice. FBR Compliant.</p>
                    <div className="flex gap-gutter">
                        <a className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors" href="#">Terms</a>
                        <a className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors" href="#">Privacy</a>
                        <a className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors" href="#">Support</a>
                    </div>
                </div>
            </footer>
        </>
    );
}