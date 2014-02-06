(function(){

  'use strict';

  $(document).ready(init);

  var timer;
  var exponent = 0;
  var base;

  function init(){
    $('#growIt').click(start);
    $('#stop').click(stop);
    $('#reset').click(reset);
  }

  function start(){
    var timeDelay = $('#interval').val()*1000;
    base = parseFloat($('#base').val());
    clearInterval(timer);
    timer = setInterval(populateList, timeDelay);
  }

  function stop(){
    clearInterval(timer);
  }

  function reset(){
    $('#container').empty();
    exponent = 0;
  }

  function populateList(){
    var answer = Math.pow(base, exponent);
    var $li = $('<li>');
    var $base = $('<span>');
    var $exponent = $('<span class="super">');
    var $answer = $('<span>');
    $base.text(base);
    $exponent.text(exponent);
    $answer.text(' = ' + answer);
    $li.append($base, $exponent, $answer);
    $('#container').prepend($li);
    exponent++;
  }

})();
