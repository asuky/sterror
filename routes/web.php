<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


//->name('game_register');
// Route関連
Route::get('/route', 'RoutesController@get');
Route::put('/route', 'RoutesController@evaluate');

// Page関連
Route::post('/page', 'PagesController@create');


