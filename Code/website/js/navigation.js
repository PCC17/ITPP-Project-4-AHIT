$(document).ready(function() {
    function toggleNavbarMethod() {
        if ($(window).width() > 768) {
            $('.navbar .dropdown').on('mouseover', function(){
                $('.dropdown-toggle', this).trigger('click'); 
            }).on('mouseout', function(){
                $('.dropdown-toggle', this).trigger('click').blur();
            });
        }
        else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
    }

     // toggle navbar hover
        toggleNavbarMethod();
        
        // bind resize event
        $(window).resize(toggleNavbarMethod);
});