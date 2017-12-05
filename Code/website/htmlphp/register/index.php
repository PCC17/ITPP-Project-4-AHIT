<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>passIn - Register</title>

    <!-- Bootstrap core CSS -->
    <link href="../../dependencies/bootstrap.min.css" rel="stylesheet">

  </head>
  <head>
    <link href="../../css/register/style.css" rel="stylesheet">
  </head>

  <body>

    <div class="container">

      <form class="form-signin rounded shadow">
        <h2 class="form-signin-heading text-center">Register</h2>

        <div class="form-group row">
          <label for="inputFirstName" class="col-sm-3 col-form-label">First Name</label>
          <div class="col-sm-9">
            <input type="name" class="form-control" id="inputFirstName" placeholder="John" required>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputLastName" class="col-sm-3 col-form-label">Last Name</label>
          <div class="col-sm-9">
            <input type="name" class="form-control" id="inputLastName" placeholder="Doe" required>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputUsername" class="col-sm-3 col-form-label">Username</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" id="inputUsername" placeholder="johndoe" required>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputEmail" class="col-sm-3 col-form-label">Email address</label>
          <div class="col-sm-9">
            <input type="email" class="form-control" id="inputEmail" placeholder="john.doe@email.com" required>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="inputPassword" placeholder="samplepassword" required>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputRepeatPassword" class="col-sm-3 col-form-label">Repeat password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="inputRepeatPassword" placeholder="samplepassword" required>
          </div>
        </div>

        <div class="checkbox">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input">I have read and accept the <a href="https://www.wko.at/service/agb/agb-betreiberdienstleistung-it-b2c.doc">terms and conditions</a>
          </label>
        </div>

        <button type="submit" class="btn btn-lg btn-primary btn-block">Register</button>
        <p class="text-center">Already registered? <a href="../login/">Login</a></p>
      </form>

    </div>
  </body>
</html>
