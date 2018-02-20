<div>
<article id="export">
<h3>Export your password</h3>
<p>If you choose to export your passwords you can import them in another password manager or wos was i</p>
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
      <label for="selectFormat">format</label>
       <select class="form-control" id="selectFormat">
           <option>.csv</option>
           <option>.json</option>
       </select>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Finish</button>
      </div>
    </div>
  </div>
</div>
</article>

<br><br>

<article id="import">
  <h3>Import your passwords</h3>
  <p>Import your passwords from .csv or .json file</p>

  <form>
    <div class="form-group">
      <button type="button" class="btn btn-primary" id="import-button">Select file</button>
        <input id="import-input" type="file" name="file" accept=".pdf">
      <button type="submit" class="btn btn-primary">Import</button>
    </div>
  </form>
</article>

</div>
