<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="../dependencies/jquery-ui.min.css">
</head>

<body>

<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light d-flex justify-content-between blue-grey lighten-5">
  <i class="fa fa-bars fa-2x nav-icon" id="sidebarCollapse" aria-hidden="true"></i>
  <span class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  </span>
  <a class="navbar-brand" href="">passIn</a>

	<i class="fa fa-plus fa-2x nav-icon" data-toggle="modal" data-dismiss="modal" href="#modalPlus" onclick="checkAddEdit(1);"></i>

    <span class="navbar-text">
    Guten Morgen User
    </span>

  <input class="nav-search search form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchBar" onkeydown="searchChanged();" onfocus="searchStart();">
  <i class="searchicon fa fa-search fa-2x nav-icon" id="searchicon" onclick="searchIconchange();"></i>


  <a class="fa fa-cogs fa-2x nav-icon" aria-hidden="true" href="../settings"></a>

</nav>
