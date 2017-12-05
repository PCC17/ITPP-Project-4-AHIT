<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>passIn - Login</title>

    <!-- Bootstrap core CSS -->
    <link href="../../dependencies/bootstrap.min.css" rel="stylesheet">

  </head>
  <head>
    <link href="../../css/login/style.css" rel="stylesheet">
  </head>

  <body>

    <div class="container">

      <form class="form-signin rounded shadow">
        <h2 class="form-signin-heading text-center">Login</h2>
        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="Email address" required>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>
        <div class="checkbox">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input">Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-lg btn-primary btn-block">Login</button>
        <p class="text-center">Not yet registered? <a href="../register/">Register</a></p>
        <p class="text-center"><a href="#">Forgot your password?</a></p>
      </form>

    </div>
  </body>
</html>
