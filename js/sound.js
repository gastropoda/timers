var soundModule = angular.module("sound", []);

soundModule.controller("SoundCtrl", function($scope) {
  createjs.Sound.registerSound("snd/beep.ogg", "beep");

  $scope.$on("TimerFinished", function() {
    createjs.Sound.play("beep", {loop: 1});
  });
});
