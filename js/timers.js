var minutes = 60;

var timersApp = angular.module("timers", []);

timersApp.controller("TimersCtrl", function($scope) {
  $scope.elapsed = 0;
  $scope.remaining = 0;
  $scope.intervals = [
    25*minutes,
    5*minutes,
    90,
    60,
    30,
  ];
});

timersApp.filter("time", function() {
  return function(input, format) {
    var min_sec = Math.floor(input);
    var ms = Math.round((input - min_sec)*1000);
    var min = min_sec / 60;
    var sec = min_sec % 60;

    if (format) {
      return input;
    } else {
      if (sec) {
        return min_sec + "s";
      } else {
        return min + "m";
      }
    }
  }
});
