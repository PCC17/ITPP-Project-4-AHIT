<!-- OpenModal -->
<div class="modal fade" id="modalPlus" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Choose Entry / Category</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <button type="button" class="close" data-toggle="categoryModal" data-dismiss="modal" aria-label="Category">
          <span aria-hidden="true">&times;</span>
        </button>
        <button type="button" class="close" data-toggle="entryModal" data-dismiss="modal" aria-label="Entry">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- EntryModal -->
<div class="modal fade" id="entryModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title heading-font" id="modalTitle">Add / Edit Entry</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- Modal Body -->
        <form class="form-signin">
          <h3 class="form-signin-heading heading-font">New Entry</h3>

          <div class="form-group row">
            <label for="inputSelect" class="col-sm-3 col-form-label">Choose Category</label>
            <div class="col-sm-9">
              <select class="form-control" id="inputSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEntryName" class="col-sm-3 col-form-label">Entry Name</label>
            <div class="col-sm-9">
              <input type="name" class="form-control" id="inputEntryName" placeholder="entryname" required>
            </div>
          </div>

          <div class="form-group row">
            <label for="inputUsername" class="col-sm-3 col-form-label">Username (optional)</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputUsername" placeholder="johndoe">
            </div>
          </div>

          <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" id="inputPassword" placeholder="samplepassword" required>
            </div>
          </div>

          <div class="form-group row">
            <label for="textNotes" class="col-sm-3 col-form-label">Notes</label>
            <div class="col-sm-9">
              <textarea class="form-control" id="textNotes" rows="3"></textarea>
            </div>
          </div>

        </form>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
