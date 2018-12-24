var sidebar_instance = null;

$(document).ready(function() {
  $(".tap-target").tapTarget();

  var elems = document.querySelectorAll(".sidenav");
  sidebar_instance = M.Sidenav.init(elems, []);

  window.setTimeout(openTapTarget, 13500);
  //window.setTimeout(closeTapTarget, 21000);
});

function openTapTarget() {
  if (sidebar_instance[0].isOpen === false) {
    $(".tap-target").tapTarget("open");
  }
}

function closeTapTarget() {
  $(".tap-target").tapTarget("close");
}
