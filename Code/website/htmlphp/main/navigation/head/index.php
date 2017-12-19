<?php
include "../includes/top.php";
?>

<head>
	<link href="../../dependencies/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../../css/main/navigation/head/style.css">
</head>

<body>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button type="button" id="sidebarCollapse">toggler</button>
  <a class="navbar-brand nav-brand" href="#">passIn</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
  </div>
</nav>

<div class="wrapper">

  <div class="left">
  <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar" id="sidebar">       
      <ul class="nav nav-pills flex-column">
        <li class="nav-item p1 mb1 navy my-nav-left">
           <a class="nav-link" href="#">Favoriten</i><i class="fa fa-star icon-favourite" aria-hidden="true"></i></a>
        </li>
      </ul>
      <ul class="nav nav-pills flex-column" id="sortable">
       <li class="nav-item navy my-nav-left">
         <a class="nav-link" href="#">Kategorie 1</a>
       </li>
       <li class="nav-item navy my-nav-left">
         <a class="nav-link" href="#">Kategorie 2</a>
       </li>
       <li class="nav-item navy my-nav-left">
         <a class="nav-link" href="#">Kategorie 3</a>
       </li>
     </ul>
  </nav>
  </div>

  </div class="right">
      
  </div>

</div>


</body>



<?php
include "../includes/bottom.php";
?>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script src="../../js/navigation.js"></script>