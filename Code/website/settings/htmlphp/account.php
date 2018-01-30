<div id="content">

      <!-- Account Settings -->
      <form class="form-signin" id="needs-validation" novalidate>
        <h3 class="form-signin-heading heading-font">Account Settings</h3>

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
          <label for="inputSelect" class="col-sm-3 col-form-label">Country</label>
          <div class="col-sm-9">
            <select class="form-control" id="inputSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>

        <h3 class="form-signin-heading heading-font">Reset Password</h3>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Old Password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="inputPassword" placeholder="samplepassword" required>
            <div class="invalid-feedback">Please provide a valid password.</div>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">New Password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="inputPassword" placeholder="samplepassword" required>
            <div class="invalid-feedback">Please provide a valid password.</div>
          </div>
        </div>

        <div class="form-group row">
          <label for="inputRepeatPassword" class="col-sm-3 col-form-label">Repeat password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="inputRepeatPassword" placeholder="samplepassword" required>
            <div class="invalid-feedback">Please provide a valid password.</div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Save</button>
        <button type="cancel" class="btn btn-secondary">Cancel</button>
      </form>

    </div>
