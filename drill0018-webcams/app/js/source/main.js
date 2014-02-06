/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addZip').click(clickAddZip);
    $('#getWebcams').click(clickGetWebcams);
    $('#clear').click(clickClear);
  }

  function clickAddZip(){
    var $newOption = $('<option>');
    $newOption.text($('#zipCode').val());
    $('#zipList').append($newOption);
    $('#zipCode').val('');
    $('#zipCode').focus();
  }

  function clickGetWebcams(){
    var zipCode = $('#zipList').val();
    var url = 'http://api.wunderground.com/api/7722e37186000a21/webcams/q/'+zipCode+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    console.log(data);
    for(var i = 0; i < data.webcams.length; i++){
      var nbhd = data.webcams[i].neighborhood;
      var url = data.webcams[i].WIDGETCURRENTIMAGEURL;
      makeWebcamBox(nbhd, url);
    }
  }

  function makeWebcamBox(nbhd, url){
    var $newImg = $('<div>');
    $newImg.addClass('webcamBox');
    $newImg.css('background-image', 'url('+url+')');
    $newImg.text(nbhd);
    $('#container').append($newImg);
  }

  function clickClear(){
    $('#container').empty();
  }
})();
