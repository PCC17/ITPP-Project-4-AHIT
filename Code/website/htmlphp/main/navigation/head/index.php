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
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">Overview <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Reports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Analytics</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Export</a>
            </li>
          </ul>
  </nav>

  <div id='container' style="width: 600px;height: 400px;top:50px;left:50px;">     
            <div id="elem" onmousedown='mydragg.startMoving(this,"container",event);' onmouseup='mydragg.stopMoving("container");' style="width: 200px;height: 100px;">
                <div style='width:100%;height:100%;padding:10px'>
                <select id=test>
                    <option value=1>first
                    <option value=2>second
                </select>
                <INPUT TYPE=text value="123">
                </div>
            </div>
        </div>
        
</body>


<script src="../../js/navigation.js"></script>
<?php
include "../includes/bottom.php";
?>
