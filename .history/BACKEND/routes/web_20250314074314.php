<?php

use Illuminate\Support\Facades\Route;
use Http\Controllers\{UserController};
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::resource('users', UserController::class);
