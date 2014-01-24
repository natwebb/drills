/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#getImagery').click(clickGetImagery);
  }

  function clickGetImagery(){
    var zipCode = $('#zipCode').val();
    $('#zipCode').val('');
    $('#zipCode').focus();
    var url = 'http://api.wunderground.com/api/7722e37186000a21/satellite/q/'+zipCode+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    console.log(data);
    var pic1 = data.satellite.image_url;
    var pic2 = data.satellite.image_url_ir4;
    var pic3 = data.satellite.image_url_vis;

    $('#image1').css('background-image','url('+pic1+')');
    $('#image2').css('background-image','url('+pic2+')');
    $('#image3').css('background-image','url('+pic3+')');
  }

})();
