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
