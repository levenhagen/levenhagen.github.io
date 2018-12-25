var sidebar_instance = null;
var navbutton_instance = null;

$(document).ready(function() {
  $(".tap-target").tapTarget();

  var sidenav = document.querySelectorAll(".sidenav");
  sidebar_instance = M.Sidenav.init(sidenav, []);

  setInterval(showPulse, 6000);
  //window.setTimeout(openTapTarget, 13500);
  //window.setTimeout(closeTapTarget, 21000);
});

function showPulse() {
  $(".nav-button").addClass("pulse");
  setTimeout(removePulse, 3000);
}

function removePulse() {
  $(".nav-button").removeClass("pulse");
}

function openTapTarget() {
  if (sidebar_instance[0].isOpen === false) {
    $(".tap-target").tapTarget("open");
  }
}

function closeTapTarget() {
  $(".tap-target").tapTarget("close");
}
