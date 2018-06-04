<?php
include "../includes/top.php";
include "htmlphp/navigation/nav.php";
?>

<div id="content">

<div class="tab-content" id="tabContent">
  <div class="tab-pane fade" id="pills-account" role="tabpanel" aria-labelledby="v-pills-profile-tab"><?php include "htmlphp/account.php" ?></div>
  <div class="tab-pane fade" id="pills-importexport" role="tabpanel" aria-labelledby="v-pills-messages-tab"><?php include "htmlphp/import-export.php" ?></div>
  <div class="tab-pane fade" id="pills-about" role="tabpanel" aria-labelledby="v-pills-settings-tab"><?php include "htmlphp/about.php" ?></div>
</div>

</div>

<?php
include "htmlphp/navigation/footer.php";
include "../includes/bottom.php";
?>

<script src="js/settings.js"></script>
<script src="../includes/validate.js"></script>
