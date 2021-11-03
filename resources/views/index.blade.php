<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My vie project</title>
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
</head>
<body>
    <div id="app">
        <v-header></v-header>
        <main>
            <div class="uk-continer">
                <router-view><router-view>
            </div>
        </main>
     </div>
    <script src="/js/app.js"></script>
</body>
</html>