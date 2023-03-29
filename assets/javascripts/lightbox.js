// JavaScript Document lightbox

$(document).ready(function(){
  $(".labelImg").click(function(){
    var foto = $(this).css('background-image');
    $(".imgFull").css('background-image', foto);
    $(".lightbox").css("display","block");
  });

  $(".lightbox").click(function(){
    $(this).css("display","none");
 });
});