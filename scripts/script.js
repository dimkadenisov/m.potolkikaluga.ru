"use strict";

var setRangeBackground = function setRangeBackground(target) {
  var min = target.min || 0;
  var max = target.max || 100;
  var percent = (max - min) / 100;
  var value = (target.value - min) / percent;
  target.style.background = "linear-gradient(to right, #e50469 ".concat(value, "%, #e5e8ed ").concat(value, "%)");
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