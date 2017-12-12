<?php
include "../includes/top.php";
?>

<head>
	<link href="../../dependencies/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../../css/main/navigation/head/style.css">
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand nav-brand" href="#">passIn</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link nav-welcome" href="#">Guten Morgen lieber User</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0 nav-search">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <span class="glyphicons glyphicons-ring"></span>
  </div>
</nav>


<nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
          <ul class="nav nav-pills m14 js-sortable sortable list flex flex-column list-reset" data-sortable-id="1" aria-dropeffect="move">
            <li class="nav-item p1 mb1 navy" data-item-sortable-id="1" draggable="true" role="option" aria-grabbed="false">
              <a class="nav-link active" href="#">Favoriten<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item p1 mb1 navy" data-item-sortable-id="1" draggable="true" role="option" aria-grabbed="false">
              <a class="nav-link" href="#">Kategorie 1</a>
            </li>
            <li class="nav-item p1 mb1 navy" data-item-sortable-id="1" draggable="true" role="option" aria-grabbed="false">
              <a class="nav-link" href="#">Kategorie 2</a>
            </li>
            <li class="nav-item p1 mb1 navy" data-item-sortable-id="1" draggable="true" role="option" aria-grabbed="false">
              <a class="nav-link" href="#">Kategorie 3</a>
            </li>
          </ul>
  </nav>
       
  <div class="main">


	</div>

</body>

<script src="../../js/html.sortable.min.js"></script>
<script src="../../js/navigation.js"></script>

<?php
include "../includes/bottom.php";
?>
