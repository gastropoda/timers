var timersApp = angular.module("timers", []);

timersApp.controller("TimersCtrl", function($scope) {
  $scope.elapsed = "0:00:00.000";
  $scope.remaining = "0:00:00.000";
  $scope.intervals = [
    "25m",
    "5m",
    "90s",
    "1m",
    "30s",
  ];
});
