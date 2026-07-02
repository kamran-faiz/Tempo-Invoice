<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FbrLogController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
});


      Route::resource('clients', ClientController::class)->only(['index','store','show','update','destroy']);
      Route::resource('products', ProductController::class)->only(['index','store','update','destroy']);
      Route::resource('invoices', InvoiceController::class)->only(['index','store','update','destroy','show']);
      Route::post('invoices/{invoice}/submit-to-fbr', [InvoiceController::class, 'submitToFbr'])->name('invoices.submitToFbr');
      Route::get('/fbr-logs', [FbrLogController::class, 'index']);


