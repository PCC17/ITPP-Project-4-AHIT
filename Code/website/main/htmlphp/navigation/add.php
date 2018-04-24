<!-- OpenModal -->
<div class="modal fade" id="modalPlus" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Choose Entry / Category</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-dismiss="modal" href="#categoryModal">Category</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-dismiss="modal" href="#entryModal" onclick="getCategoryOptions()">Entry</button>
      </div>
    </div>
  </div>
</div>

<!-- EntryModal -->
<div class="modal fade" id="entryModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title heading-font" id="modalTitle">
          <i id="AddEdit"></i>  <i>Entry</i>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- Modal Body -->
        <form class="form-signin">

          <div class="form-group row">
            <label for="inputSelect" class="col-sm-3 col-form-label">Choose Category</label>
            <div class="col-sm-9">
              <select class="form-control" id="inputSelect">
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
            <label for="inputEntryName" class="col-sm-3 col-form-label">URL (optional)</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputURL" placeholder="google.at">
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
            <label for="textNotes" class="col-sm-3 col-form-label">Notes (optional)</label>
            <div class="col-sm-9">
              <textarea class="form-control" id="textNotes" rows="3"></textarea>
            </div>
          </div>

          <div class="checkbox">
            <label class="custom-control custom-checkbox form-check-label">
              <input type="checkbox" class="custom-control-input form-check-input" id="checkIsFavourite" required>
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">Add Entry to Favourites</span>
            </label>
          </div>

        </form>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary" data-dismiss="modal" onclick="addEntry(document.getElementById('inputSelect').value, document.getElementById('inputEntryName').value, document.getElementById('inputURL').value, document.getElementById('inputUsername').value, document.getElementById('inputPassword').value, document.getElementById('textNotes').value, document.getElementById('checkIsFavourite').checked)">Save</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- categoryModal -->
<div class="modal fade" id="categoryModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title heading-font" id="modalTitle">
          <i id="AddEdit"></i>  <i>Category </i>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- Modal Body -->
       <div class="form-group row">
            <label for="categoryName" class="col-sm-3 col-form-label">Category Name</label>
            <div class="col-sm-9">
              <input type="name" class="form-control" id="categoryName" placeholder="categoryname" required>
            </div>
       </div>

        <div class="modal-footer">
        <button type="submit" class="btn btn-primary" data-dismiss="modal" onclick="addCategory(document.getElementById('categoryName').value)">Save</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>

       </div>
    </div>
  </div>
</div>
