<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{UserController};
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::resource('users', UserController::class);
