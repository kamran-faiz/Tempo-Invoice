<?php

namespace App\Http\Controllers;
use App\Models\Invoice;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
        $metrics = [
            'total_revenue' => Invoice::sum('total'),
            'total_invoices' => Invoice::count(),
            'unpaid_count' => Invoice::where('payment_status' , 'unpaid')->count(),
            'unpaid_amount' => Invoice::where('payment_status', 'unpaid')->sum('total'),
            'fbr_pending' => Invoice::where('fbr_status' , 'pending')->count()
        ];
        $recentInvoices = Invoice::with('client:id,name')->latest()->take(5)->get();

        return Inertia::render('Dashboard' , [
            'metrics' => $metrics,
            'recent_invoices' => $recentInvoices,

        ] );
    }
}
