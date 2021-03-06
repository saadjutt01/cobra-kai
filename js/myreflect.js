function doReflect(img, options) {
  var imageWidth = img.width,
    imageHeight = img.height,
    reflection = img,
    reflectionHeight,
    wrapper,
    context,
    gradient;
  reflectionHeight = imageHeight;

  if (reflection.getContext) {
    context = reflection.getContext("2d");
    try {
      context.translate(0, imageHeight);
      context.scale(1, -1);
      context.drawImage(img, 0, 0, imageWidth, imageHeight);
      context.restore();
      context.globalCompositeOperation = "destination-out";

      gradient = context.createLinearGradient(0, reflectionHeight, 0, 0);
      gradient.addColorStop(
        0,
        "rgba(255, 255, 255, " + (1 - options.opacity) + ")"
      );
      gradient.addColorStop(1, "rgba(255, 255, 255, 1.0)");

      context.fillStyle = gradient;
      context.rect(0, 0, imageWidth, reflectionHeight);
      context.fill();
    } catch (e) {
      return;
    }
  } else {
    if (!window.ActiveXObject) return;
    reflection = $("<img />")
      .attr("src", img.src)
      .css({
        width: imageWidth,
        height: imageHeight,
        marginBottom: reflectionHeight - imageHeight,
        filter:
          "FlipV progid:DXImageTransform.Microsoft.Alpha(Opacity=" +
          options.opacity * 100 +
          ", FinishOpacity=0, Style=1, StartX=0, StartY=0, FinishX=0, FinishY=" +
          (reflectionHeight / imageHeight) * 100 +
          ")",
      })[0];
  }
}

function startAnimation() {
  $('[id^="att-left-arr"]').toggle();
  $("#att-joystick-center, #att-joystick-left").toggle();

  setTimeout(function () {
    $('[id^="att-left-arr"]').toggle();
    $("#att-joystick-left, #att-joystick-center").toggle();
  }, 250);

  setTimeout(function () {
    $('[id^="att-left-arr"]').toggle();
    $("#att-joystick-center, #att-joystick-left").toggle();
  }, 550);

  setTimeout(function () {
    $('[id^="att-left-arr"]').toggle();
    $("#att-joystick-left, #att-joystick-center").toggle();
  }, 750);

  setTimeout(function () {
    $('[id^="att-right-arr"]').toggle();
    $("#att-joystick-center, #att-joystick-right").toggle();
  }, 1000);

  setTimeout(function () {
    $('[id^="att-right-arr"]').toggle();
    $("#att-joystick-right, #att-joystick-center").toggle();
  }, 1250);

  setTimeout(function () {
    $('[id^="att-right-arr"]').toggle();
    $("#att-joystick-center, #att-joystick-right").toggle();
  }, 1500);

  setTimeout(function () {
    $('[id^="att-right-arr"]').toggle();
    $("#att-joystick-right, #att-joystick-center").toggle();
  }, 1750);
}
