import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { route } from 'ziggy-js'

const appName = import.meta.env.VITE_APP_NAME || 'Tempo Invoice';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => resolvePageComponent(
        `./Pages/${name}.jsx`,
        import.meta.glob('./Pages/**/*.jsx')
    ),
    setup({ el, App, props }) {
        window.route = route
        createRoot(el).render(<App {...props} />)
    },
    progress: {
        color: '#4B5563',
    },
})