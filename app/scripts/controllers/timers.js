'use strict';

var seconds = 1000;
var minutes = 60 * seconds;

angular.module('timersApp').controller('TimersCtrl', function($scope) {
  $scope.elapsed = 0;
  $scope.remaining = 0;
  $scope.intervals = [
    25 * minutes,
    5 * minutes,
    90 * seconds,
    60 * seconds,
    30 * seconds,
    1 * seconds,
  ];

  var total, interval = null, start;

  $scope.start = function(time) {
    total = time;
    if (interval !== null) {
      clearInterval(interval);
    }
    interval = setInterval(updateTimer, 25);
    start = Date.now();
  };

  $scope.restart = function() {
    $scope.start(total);
  };

  Object.defineProperty($scope, 'progress', { get: function() {
    return Math.min(100, 100 * (total ? $scope.elapsed / total : 0));
  }});

  Object.defineProperty($scope, 'restartable', { get: function() {
    return !!total;
  }});

  $scope.$on('TimerFinished', function() {
      clearInterval(interval);
      interval = null;
  });

  function updateTimer() {
    $scope.elapsed = Date.now() - start;
    $scope.remaining = total - $scope.elapsed;
    if ($scope.remaining <= 0) {
      $scope.remaining = 0;
      $scope.elapsed = total;
      $scope.$broadcast('TimerFinished');
    }
    $scope.$apply();
  }
})
.filter('time', function() {
  return function(input, format) {
    function zeroPad(x, width) {
      width = width || 2;
      x = x.toString();
      while (x.length < width) { x = '0' + x; }
      return x;
    }

    input = parseInt(input);
    var ms = input % seconds;
    var minSec = Math.floor(input / seconds);
    var min = Math.floor(minSec / 60);
    var sec = minSec % 60;

    if (format) {
      return format.
        replace('mm', zeroPad(min), 'g').
        replace('ss', zeroPad(sec), 'g').
        replace('ms', zeroPad(ms, 3), 'g');
    } else {
      if (sec) {
        return minSec + 's';
      } else {
        return min + 'm';
      }
    }
  };
});
