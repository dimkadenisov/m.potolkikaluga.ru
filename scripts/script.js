"use strict";

var setRangeBackground = function setRangeBackground(target) {
  var min = target.min;
  var max = target.max;
  var percent = (max - min) * 0.01;
  var value = (target.value - min) / percent;
  $(target).css('background', "linear-gradient(to right, #e50469 ".concat(value, "%, #e5e8ed ").concat(value, "%)"));
  console.log(target.value, value);
};

document.body.addEventListener('input', function (e) {
  var target = e.target.closest('[type="range"]');

  if (target) {
    setRangeBackground(target);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[type="range"]').forEach(function (elem) {
    return setRangeBackground(elem);
  });
});