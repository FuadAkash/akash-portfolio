<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])

    <title>{{ config('app.name') }} — Portfolio</title>
</head>
<body>
<div id="root"></div>
</body>
</html>

