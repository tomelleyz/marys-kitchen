$(document).ready(function() {

// funtion to change the background-color of topbar when window scrolls past 30px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("topbar").style.background = "rgba(56, 56, 56, 0.9)";
  } else {
    document.getElementById("topbar").style.background = "transparent";
  }
}

// Function that opens Mobile Nav 
$(".menu-icon").click(function(){
    $("#bodyoverlay").fadeIn();
    $("#mobilenav").css("right", "0");
});

// Function that closes Mobile Nav
$("#bodyoverlay, .mobilenav-link").click(function(){
    $("#mobilenav").css("right", "-75%");
    $("#bodyoverlay").fadeOut();
});

});