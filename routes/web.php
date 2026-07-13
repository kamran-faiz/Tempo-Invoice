<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FbrLogController;
use App\Http\Controllers\CompanyController;
use Inertia\Inertia;

Route::middleware(['auth'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('clients', ClientController::class)->only(['index','store','show','update','destroy']);
    Route::resource('products', ProductController::class)->only(['index','store','update','destroy']);
    Route::resource('invoices', InvoiceController::class)->only(['index','store','update','destroy','show']);
    Route::post('invoices/{invoice}/submit-to-fbr', [InvoiceController::class, 'submitToFbr'])->name('invoices.submitToFbr');
    Route::get('/fbr-logs', [FbrLogController::class, 'index']);
Route::get('/superadmin/dashboard', [CompanyController::class, 'index'])
    ->name('superadmin.dashboard');    
    Route::resource('superadmin/companies', CompanyController::class)->only(['store']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';