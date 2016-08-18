$(document).ready(function(){
var count = 0;
var defC = count;
  $(".count").on("keyup", function(){
    count = $(".count").val();
    defC = count;
    console.log(Number(count));
    $(".hour").text("hours: "+ Math.floor(count / 3600));
  $(".minutes").text("minutes: "+Math.floor(count / 60 ) % 60);

  $(".seconds").text("seconds: "+count%60);
  });

$('input[type=submit]').on('click', function(){


  var timer =   setInterval(function(){
      $(".hour").text("hours: "+ Math.floor(count / 3600));
    $(".minutes").text("minutes: "+Math.floor(count / 60 ) % 60);

    $(".seconds").text("seconds: "+count%60);
    if(count === 0){
      //clearTimeout(timer);
      count = defC;
      var audio = new Howl({
        src:['bang_1.wav']
      });
      audio.play();
    }
    $(".count").val(count);
    count--;


  }, 1000);

})


});
