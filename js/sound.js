var soundModule = angular.module("sound", []);

soundModule.controller("SoundCtrl", function($scope) {
  createjs.Sound.registerSound("snd/beep.ogg", "beep");
  createjs.Sound.registerSound("snd/aan-de-slag.ogg", "papa");
  createjs.Sound.registerSound("snd/ye-ye-yeah.ogg", "dima");

  $scope.sounds = [{
    name: "beep",
    label: "Bi-bi-bi-biep, bi-bi-bi-biep",
    options: {loop: 1}
  }, {
    name: "dima",
    label: "Ye-ye-yeaaaah!",
  }, {
    name: "papa",
    label: "Aan de slag!",
  }];

  $scope.finalSound = $scope.sounds[0];

  $scope.setFinalSound = function(sound) {
    $scope.finalSound = sound;
  };

  $scope.playFinalSound = function() {
    createjs.Sound.play($scope.finalSound.name, $scope.finalSound.options);
  };

  $scope.$on("TimerFinished", $scope.playFinalSound);
});
