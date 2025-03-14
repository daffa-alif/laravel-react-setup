<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Add Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    @viteReactRefresh
    @vite(['resources/js/app.js'])
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>