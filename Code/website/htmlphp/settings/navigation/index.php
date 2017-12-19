<?php
include "../includes/top.php";
?>

<head>
  <link href="../../css/settings/style.css" rel="stylesheet">
</head>

<body>
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

  <i class="btn btn-secondary fa fa-bars fa-2x" id="sidebarCollapse" aria-hidden="true"></i>

  <a class="navbar-brand nav-brand" href="#">passIn</a>

  <a class="btn btn-secondary" href="../main">
    <i class="fa fa-home fa-2x" aria-hidden="true"></i>
  </a>
</nav>

<div class="wrapper">
  <nav class="sidebar" id="sidebar">
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
  
  <?php include "body/general.php" ?>

</div>

</body>

<?php include "../includes/bottom.php"; ?>
<script src="../../js/settings.js"></script>
