<?php include "navigation/nav.php"; ?>

<div id="content">

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Export
</button>

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="myModalLabel">Choose a format</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <div class="form-group">
      <label for="exampleSelect1">format</label>
       <select class="form-control" id="exampleSelect1">
           <option>.csv</option>
           <option>.json</option>
       </select>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Export</button>
      </div>
    </div>
  </div>
</div>

</div>