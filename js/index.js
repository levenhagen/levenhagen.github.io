var sidebar_instance = null;

$(document).ready(function() {
  //initializing
  //$(".tap-target").tapTarget();

  //pulse each 3s
  var sidenav = document.querySelectorAll(".sidenav");
  sidebar_instance = M.Sidenav.init(sidenav, []);
  setInterval(showPulse, 6000);

  $("#quote").height($("#photo").height());
});

//-==============- CUSTOM FUNCTIONS -==============-

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
