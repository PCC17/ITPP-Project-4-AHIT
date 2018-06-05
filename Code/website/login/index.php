<?php require "../includes/top.php" ?>
  <head>
    <link href="css/style.css" rel="stylesheet">
  </head>

  <body>

    <div class="container">

      <form class="form-signin rounded shadow" id="needs-validation" novalidate>
        <h2 class="form-signin-heading text-center" id="login-heading">Login</h2>

        <div id="errorAlertDiv"></div>

        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="Email address" required>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password" required>
        </div>
        <button type="button" class="btn btn-lg btn-primary btn-block" onclick="login(document.getElementById('inputEmail').value, document.getElementById('inputPassword').value)">Login</button>
        <br><p class="text-center">Not yet registered? <a href="../register/">Register</a></p>
      </form>

    </div>
  </body>
<?php require "../includes/bottom.php" ?>
<script src="js/login.js"></script>
