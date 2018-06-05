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
        <button type="button" class="btn btn-primary" data-toggle="modal" data-dismiss="modal" href="#categoryModal" onclick="checkAddCategory();">Category</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-dismiss="modal" href="#entryModal"onclick="checkAddEntry();">Entry</button>
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
          <i id="AddEditEntry"></i>  <i>Entry</i>
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
              <input type="text" class="form-control" id="inputEntryName" placeholder="entryname" value="">
            </div>
          </div>

          <div class="form-group row">
            <label for="inputURL" class="col-sm-3 col-form-label">URL (optional)</label>
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
              <div class="row">
                <label for="passwordLength" class="col-sm-3 col-form-label">Length</label>
                <div class="col-sm-4">
                  <input type="number" class="form-control" id="passwordLength" default="128"></input>
                </div>
                <div class="col-sm-4">
                  <button type="button" class="btn btn-secondary" onclick="generatePassword(1, 1, 1, document.getElementById('passwordLength').value);">Generate</button>
                </div>
              </div>
              <input type="text" class="form-control" id="inputPassword" placeholder="samplepassword" required>
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
      <div class="modal-footer" id="entryModalFooter">

        <button type="submit" id="submitAddEditEntryBtn" class="btn btn-primary" data-dismiss="modal">Save</button>
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
          <i id="AddEditCat"></i>  <i>Category </i>
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

        <div class="modal-footer" id="categoryModalFooter">
          <button type="submit" id="submitAddEditCategoryBtn" class="btn btn-primary" data-dismiss="modal">Save</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>

       </div>
    </div>
  </div>
</div>

<!-- deleteEntryModal -->
<div class="modal fade" id="deleteEntryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Delete Entry?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-footer">
        <button type="button" id="deleteBtnEntryModal" class="btn btn-danger mr-auto" data-toggle="modal" data-dismiss="modal">Delete</button>
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- deleteCategoryModal -->
<div class="modal fade" id="deleteCategoryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Delete Category?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-footer">
        <button type="button" id="deleteBtnCategoryModal" class="btn btn-danger mr-auto" data-toggle="modal" data-dismiss="modal">Delete</button>
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
