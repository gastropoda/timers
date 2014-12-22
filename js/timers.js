var timersApp = angular.module("timers", []);

timersApp.controller("TimersCtrl", function($scope) {
  $scope.elapsed = 0;
  $scope.remaining = 0;
  $scope.intervals = [
    25*60,
    5*60,
    90,
    60,
    30,
  ];
});

timersApp.filter("time", function() {
  return function(input, format) {
    if (format) {
      return input;
    } else {
      input = Math.round(input);
      var remainder = input % 60;
      if (remainder) {
        return input + "s";
      } else {
        return input/60 + "m";
      }
    }
  }
});
