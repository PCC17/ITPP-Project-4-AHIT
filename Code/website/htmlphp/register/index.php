<?php require "../includes/top.php" ?>
  <head>
    <link href="../../css/register/style.css" rel="stylesheet">
  </head>

  <body>
    <div class="container">

      <!-- Register Form -->
      <form class="form-signin rounded shadow">
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
            <input type="checkbox" class="form-check-input" required>I have read and accept the <a href="" data-toggle="modal" data-target="#ppModal">privacy policy</a>
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
                <h5>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h5>

                <p>When you register on our website we collect the personal information you give us such as your name and email address. We do that to refer to you in our database.
                </p>
                <p>When you browse our website, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
                </p>

                <h5>SECTION 2 - CONSENT</h5>

                <p>How do you get my consent?

                When you provide us with personal information to complete your registration, we imply that you consent to our collecting it and using it for that specific reason only.
                </p>

                <p>How do I withdraw my consent?

                If after you register, you change your mind, you may withdraw your consent by deleting your account. You may not use our website without providing your personal information.
                </p>

                <h5>SECTION 3 - DISCLOSURE</h5>

                <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.
                </p>

                <h5>SECTION 5 - THIRD-PARTY SERVICES</h5>

                <p>We DO NOT give away personal information to third-party providers.
                </p>

                <h5>SECTION 6 - SECURITY</h5>

                <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
                </p>
                <p>If you provide us your password, it is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption.  Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.
                </p>

                <h5>SECTION 7 - COOKIES</h5>

                <p>Here is a list of cookies that we use.
                </p>
                <p>
                _session_id, unique token, sessional, Allows us to store information about your session.

                _secure_session_id, unique token, sessional
                </p>

                <h5>SECTION 8 - AGE OF CONSENT</h5>

                <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                </p>

                <h5>SECTION 9 - CHANGES TO PERSONAL INFORMATION</h5>

                <p>If you would like to: access, correct, amend or delete any personal information we have about you, go to your Account Settings.
                </p>

                <h5>SECTION 10 - CHANGES TO THIS PRIVACY POLICY</h5>

                <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website.
                </p>

                <h5>CHANGES</h5>

                <p>12-12-2017: Initial Commit
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-lg btn-primary btn-block">Register</button>
        <p class="text-center">Already registered? <a href="../login/">Login</a></p>
      </form>

    </div>
  </body>
<?php require "../includes/bottom.php" ?>
