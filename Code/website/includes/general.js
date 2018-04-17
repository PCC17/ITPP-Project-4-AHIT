/*$(document).ready(function() {
    console.log( "ready!" );
    colorNav(blue)
});

function colorNav(color) {
  console.log("coloring nav");
}

<a href="#" class="btn btn-default" id="cp4">Change background color</a>
<script>
    $(function() {
        $('#cp4').colorpicker().on('changeColor', function(e) {
            $('body')[0].style.backgroundColor = e.color.toString(
                'rgba');
        });
    });
</script>
*/
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var url = "http://10.0.0.25:3005";
