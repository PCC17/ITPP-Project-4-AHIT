$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

$(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    });