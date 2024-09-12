<?php

use App\Http\Controllers\GoogleSheetsController;
use Illuminate\Support\Facades\Route;
use Google\Service\Sheets;

Route::post('/api', [GoogleSheetsController::class, 'appendRow']);
