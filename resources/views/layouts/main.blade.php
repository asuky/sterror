<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>

    <!-- Scripts -->
@if(app('env') == 'dev')
    <script src="{{ asset('js/app.js') }}" defer></script>
@endif
@if(app('env') == 'prod')
    <script src="{{ secure_asset('js/app.js') }}" defer></script>
@endif

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
@if(app('env') == 'dev')
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
    <!-- <link href="{{ asset('dist/css/flat-ui.min.css') }}" rel="stylesheet"> -->
    <link href="{{ asset('css/common.css') }}" rel="stylesheet">
@endif
@if(app('env') == 'prod')
    <!-- <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet"> -->
    <!-- <link href="{{ secure_asset('dist/css/flat-ui.min.css') }}" rel="stylesheet"> -->
    <link href="{{ secure_asset('css/common.css') }}" rel="stylesheet">
@endif

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet" media="screen">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-default navbar-expand-md navbar-light">
            <div class="container">
                    <a class="navbar-brand" href="{{ url('/') }}">{{ config('app.name') }}</a>
            </div>
        </nav>

        <main class="py-2">
            @yield('content')
        </main>
        
        <footer class="footer">
            <div class="container">
                <p class="text-muted text-center">2018</p>
            </div>
        </footer>
    </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
</body>
</html>
