<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}?v=3">

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])

    <title>Akash - Portfolio</title>
</head>

<body>
<div id="root"></div>
</body>
</html>


