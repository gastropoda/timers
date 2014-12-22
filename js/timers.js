var seconds = 1000;
var minutes = 60 * seconds;

var timersApp = angular.module("timers", []);

timersApp.controller("TimersCtrl", function($scope) {
  $scope.elapsed = 0;
  $scope.remaining = 0;
  $scope.intervals = [
    25 * minutes,
    5 * minutes,
    90 * seconds,
    60 * seconds,
    30 * seconds,
  ];
});

timersApp.filter("time", function() {
  return function(input, format) {
    input = parseInt(input);
    var ms = input % seconds;
    var min_sec = Math.floor(input / seconds);
    var min = Math.floor(min_sec / 60);
    var sec = min_sec % 60;

    if (format) {
      return format.
        replace("mm", zeroPad(min), "g").
        replace("ss", zeroPad(sec), "g").
        replace("ms", zeroPad(ms, 3), "g");
    } else {
      if (sec) {
        return min_sec + "s";
      } else {
        return min + "m";
      }
    }
  };

  function zeroPad(x, width) {
    width = width || 2;
    x = x.toString();
    while (x.length < width) x = "0" + x;
    return x;
  }
});
