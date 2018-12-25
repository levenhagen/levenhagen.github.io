var sidenav_instance = null;

$(document).ready(function() {
  //initializing
  //$(".tap-target").tapTarget();

  //pulse each 3s
  var elems = document.querySelectorAll(".sidenav");
  var sidenav_instances = M.Sidenav.init(elems, []);
  sidenav_instance = M.Sidenav.getInstance(elems[0]);

  setInterval(showPulse, 6000);

  var qh = $("#quote").height();
  var ph = $("#photo").height();

  if (qh > ph) {
    $("#photo").height(qh);
  } else {
    $("#quote").height(ph);
  }
});

//-==============- CUSTOM FUNCTIONS -==============-

function home() {
  $("#about").css("display", "none");
  $("#portfolio").css("display", "none");
  $("#home").css("display", "block");
  sidenav_instance.close();
}

function about() {
  $("#home").css("display", "none");
  $("#portfolio").css("display", "none");
  $("#about").css("display", "block");
  sidenav_instance.close();
}

function portfolio() {
  $("#home").css("display", "none");
  $("#about").css("display", "none");
  $("#portfolio").css("display", "block");
  sidenav_instance.close();
}

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
