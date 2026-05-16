<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
});


      Route::resource('clients', ClientController::class)->only(['index','store','update','destroy']);


