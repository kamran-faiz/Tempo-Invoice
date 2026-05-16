
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { route } from 'ziggy-js'
import '../css/app.css'

createInertiaApp({
    resolve: name => resolvePageComponent(
        `./Pages/${name}.jsx`,
        import.meta.glob('./Pages/**/*.jsx')
    ),
    setup({ el, App, props }) {
        window.route = route
        createRoot(el).render(<App {...props} />)
    },
})
