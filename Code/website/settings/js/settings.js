$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
  });
});

$(function () {
  $('#cp_div').colorpicker({
    inline: true,
    container: true,
    useAlpha: false,
    format: "hex",
    customClass: 'colorpicker-2x',
    sliders: {
        saturation: {
          maxLeft: 200,
          maxTop: 200,
          callLeft: 'setSaturationRatio',
          callTop: 'setBrightnessRatio'
        },
        hue: {
          maxLeft: 0,
          maxTop: 200,
          callLeft: false,
          callTop: 'setHueRatio'
        },
        alpha: {
          maxLeft: 0,
          maxTop: 200,
          callLeft: false,
          callTop: 'setAlphaRatio'
        }
      }
  });
});

$('#import-button').click(function() {
    $('#import-input').click();
});

function logout()
{
  console.log("Tschüüüüss");
    $.ajax({
        type: 'POST',
        url: 'http://10.0.0.21:3005/authenticate',
        data: { email: email, password: password },
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            console.log(data);
            if(data['status'] == "success")
            {
                console.log("Login was successful");
                document.cookie='token='+data['token'];
                window.location = "../main";
            }
            else if (data['status'] == "error")
            {
              addClass('#errorAlert', 'show');
            }
        },
        error: function(error) {
          console.log(error);
        }
    });
}
