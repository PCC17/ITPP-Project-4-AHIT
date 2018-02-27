<?php require "../includes/top.php" ?>
  <head>
    <link href="css/style.css" rel="stylesheet">
  </head>

  <body>

    <div class="container">

      <div class="form-signin rounded shadow">
        <h2 class="form-signin-heading text-center">Login</h2>

        <div class="alert alert-danger alert-dismissible fade" role="alert" id="errorAlert">
          Email or password not correct!
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="Email address" required>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password" required>
        </div>
        <div class="checkbox">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input">Remember me
          </label>
        </div>
        <button type="button" class="btn btn-lg btn-primary btn-block" onclick="login(document.getElementById('inputEmail').value, document.getElementById('inputPassword').value)">Login</button>
        <p class="text-center">Not yet registered? <a href="../register/">Register</a></p>
        <p class="text-center"><a href="#">Forgot your password?</a></p>
      </div>

    </div>
  </body>
  <script src="js/login.js"></script>
<?php require "../includes/bottom.php" ?>
