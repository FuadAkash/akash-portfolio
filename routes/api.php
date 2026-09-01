<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PortfolioController;

Route::post('/contact', [PortfolioController::class, 'contact']);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
