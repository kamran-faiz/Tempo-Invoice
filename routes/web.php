<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProductController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
});


      Route::resource('clients', ClientController::class)->only(['index','store','show','update','destroy']);
      Route::resource('products', ProductController::class)->only(['index','store','update','destroy']);

