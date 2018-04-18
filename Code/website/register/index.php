<?php require "../includes/top.php"; ?>
  <head>
    <link href="css/style.css" rel="stylesheet">
  </head>

  <body>
    <div class="container">

      <!-- Register Form -->
      <form class="form-signin rounded shadow" id="needs-validation" novalidate>
        <h2 class="form-signin-heading heading-font text-center">Register</h2>

        <div class="alert alert-primary alert-dismissible fade show" role="alert">
          Please fill in all fields!
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

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
            <div class="invalid-feedback">Please provide a valid email address.</div>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputEmail" class="col-sm-3 col-form-label">Birthdate</label>
          <div class="col-sm-9">
            <input type="date" class="form-control" id="inputBirthdate" placeholder="DD-MM-YYYY" required>
            <div class="invalid-feedback">Please provide a valid date.</div>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="inputPassword" placeholder="samplepassword" required>
            <div class="invalid-feedback">Please provide a valid password.</div>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputRepeatPassword" class="col-sm-3 col-form-label">Repeat password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="inputRepeatPassword" placeholder="samplepassword" required>
            <div class="invalid-feedback">Passwords don't match.</div>
          </div>
        </div>

        <div class="checkbox">
          <label class="custom-control custom-checkbox form-check-label">
            <input type="checkbox" class="custom-control-input form-check-input" required>
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">I have read and accept the <a href="" data-toggle="modal" data-target="#ppModal">privacy policy</a></span>
          </label>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="ppModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title heading-font" id="modalTitle">Privacy policy</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <?php include "privacypolicy.html";?>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <button type="button" class="btn btn-lg btn-primary btn-block" onclick="register(document.getElementById('inputFirstName').value, document.getElementById('inputLastName').value, document.getElementById('inputUsername').value, document.getElementById('inputEmail').value, document.getElementById('inputBirthdate').value, document.getElementById('inputPassword').value)">Register</button>
        <p class="text-center">Already registered? <a href="../login/">Login</a></p>
      </form>

    </div>
  </body>
  <script src="../includes/validate.js"></script>
  <script src="js/register.js"></script>
<?php require "../includes/bottom.php"; ?>
