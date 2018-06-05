<head>
  <link href="css/navigation.css" rel="stylesheet">
</head>

<body>
<nav class="navbar navbar-expand-md fixed-top d-flex justify-content-between blue-grey lighten-5">

  <span class="fa fa-bars fa-2x nav-item" id="sidebarCollapse" aria-hidden="true"></span>

  <span class="navbar-brand nav-brand">passIn</span>

  <a class="fa fa-home fa-2x nav-item" aria-hidden="true" href="../main"></a>

</nav>

<div class="wrapper">
  <nav class="sidebar blue-grey lighten-4" id="sidebar">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#pills-account" role="tab" aria-controls="pills-account">Account Details</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#pills-importexport" role="tab" aria-controls="pills-importexport">Import / Export</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#pills-about" role="tab" aria-controls="pills-about">About</a>
            </li>
            <hr>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#pills-logout" role="tab" aria-controls="pills-logout" onclick="logout()">Logout</a>
            </li>
          </ul>
  </nav>
</div>
