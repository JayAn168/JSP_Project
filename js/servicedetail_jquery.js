let isVisible = false;

window.addEventListener("scroll", function () {
  if (checkVisible($("#book2")) && !isVisible) {
    $("#f1").attr("ff1", "ff");
    $("#f2").attr("ff", "ff1");
    isVisible = true;
  }
});
isVisible = false;
window.addEventListener("scroll", function () {
  if (checkVisible($("#book3")) && !isVisible) {
    $("#f2").attr("ff1", "ff");
    $("#f2").attr("ff", "ff1");
    isVisible = true;
  }
});
isVisible = false;
window.addEventListener("scroll", function () {
  if (checkVisible($("#book4")) && !isVisible) {
    $("#f3").attr("ff1", "ff");
    $("#f4").attr("ff", "ff1");
    isVisible = true;
  }
});
isVisible = false;

function checkVisible(elm, eval) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(), // Viewport Height
    scrolltop = $(window).scrollTop(), // Scroll Top
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (eval == "object visible")
    return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;
  if (eval == "above") return y < viewportHeight + scrolltop;
}
