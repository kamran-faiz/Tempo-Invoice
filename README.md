Tempo Invoice

A multi-tenant invoicing SaaS for Pakistani businesses, built solo with Laravel 12, Inertia, and React 19 — with a working mock integration for FBR (Federal Board of Revenue) e-invoicing.

This isn't a CRUD tutorial project. It's an attempt to build something close to what a real invoicing platform in Pakistan actually needs: multiple companies on one codebase, each isolated from the other, invoices that can be pushed to FBR for tax validation, and a superadmin layer to manage all of it from the top.

Why FBR matters here

Pakistan has been rolling out mandatory digital invoicing through FBR, and any invoicing software sold locally eventually has to deal with submitting invoices for validation and getting back either an IRN (Invoice Reference Number) or a rejection. Since I don't have access to FBR's real sandbox, I built a separate mock API (tempo-fbr-mock) that mimics that submit/validate/reject flow, so Tempo Invoice talks to it exactly the way it would talk to the real thing. When an invoice is submitted, it either comes back validated with an IRN or rejected with a reason — and both paths are handled and logged.

What's actually in it

Multi-tenancy, built from scratch (no package).
Every business gets its own isolated slice of data. This is enforced with a global Eloquent scope (BusinessScope) and a HasBusinessScope trait that any tenant-owned model uses — it auto-scopes queries to the logged-in user's business_id and auto-fills it on creation. A superadmin bypasses the scope entirely; everyone else only ever sees their own business's clients, products, and invoices, even if they try to hit another tenant's URL directly.

Superadmin panel.
A separate layer above tenants for registering new companies, editing them, or deleting them — each with their own owning user created in the same transaction. Middleware (EnsureIsSuperadmin, EnsureHasBusiness) keeps superadmin routes and tenant routes from bleeding into each other.

Invoicing core.
Invoices, line items, clients (with NTN/CNIC and B2B/B2C type, since that affects FBR treatment), and products with tax rates. Invoice numbers are auto-generated per business per year (INV-{business_id}-{year}-0001, incrementing) rather than left to the user. Payment status (paid/unpaid/overdue) and FBR status (pending/submitted/validated/rejected) are tracked separately, because a paid invoice and an FBR-validated invoice are not the same thing.

FBR submission + logs.
Submitting an invoice packages the client's NTN/CNIC, line items, and totals, sends them to the FBR mock service, and updates the invoice with either an IRN or a rejection reason. There's a dedicated FBR logs view with submission metrics (submitted / validated / pending / rejected) so a business owner can see at a glance what still needs attention.

Dashboards with real metrics, not placeholders.
The tenant dashboard shows billed/collected/outstanding amounts and FBR-unsubmitted counts. The superadmin dashboard shows totals across every company: clients, invoices, revenue — bypassing tenant scoping deliberately, since that's the one place it's supposed to see everything.

Stack:

Laravel 12 (PHP 8.2+)
Inertia.js + React 19
Tailwind CSS v4
SQLite for local dev
react-hot-toast for flash notifications, Laravel Breeze for auth scaffolding

Running it locally

composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm run dev

In a separate terminal:

php artisan serve

FBR submission requires the tempo-fbr-mock service running and FBR_API_URL set in .env to point at it.

Where it stands

Core tenant flow (auth → clients → products → invoices → FBR submission) is working end to end. Superadmin company management is functional. Still in progress: refining the FBR rejection-handling UX, and PDF export for invoices.

This is a solo project I've been building alongside my day job as a Laravel developer, mainly to go deeper into multi-tenant architecture and tax-compliance integrations than my day-to-day work usually calls for.

