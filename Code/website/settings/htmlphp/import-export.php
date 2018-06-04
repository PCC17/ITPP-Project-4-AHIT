<script>

function readSingleFile(evt) {
   var f = evt.target.files[0];

   if (f) {
     var r = new FileReader();
     r.onload = function(e) {
       var contents = e.target.result;
       console.log(contents);
       contents = crypt(contents,true);

       $.ajax({
           dataType: 'json',
           type: 'POST',
           url: url+"/import?token="+getCookie("token"),
           data: { "lines": [contents]},
           success: function(data)
           {
               console.log(data);
               getCategories();
               if(['status'] == "success")
               {
                   console.log("success");
               }

               else if(['status'] == "error")
               {
                   console.log("error");
               }
           }
       });
     }
     r.readAsText(f);
   }
 }

</script>


<div>
<article id="export">
<h3>Export your passwords</h3>
<p>If you choose to export your passwords you can import them in another password manager</p>
<p>Hint: This will not transfer your application settings, only your user and login information</p>
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
       <button type="button" class="btn btn-primary" onclick="download()">JSON</button>
       <br>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Finish</button>
      </div>
    </div>
  </div>
</div>
</article>

<br><br>

<article id="import">
  <h3>Import your passwords</h3>
  <form>
    <div class="form-group">
      <button type="button" class="btn btn-primary">Import</button>
    <input type="file" id="inputFile" multiple size="50" accept=".json">
    </div>
  </form>
</article>

</div>
