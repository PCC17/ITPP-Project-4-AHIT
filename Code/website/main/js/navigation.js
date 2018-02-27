$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

$(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $('#content').toggleClass('active');
    });
});

$('.searchicon').click(function () {
    $('.search').toggleClass('expanded');
    $('.search').focus();
});

