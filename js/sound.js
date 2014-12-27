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

  $scope.selected = $scope.sounds[0];

  $scope.select = function(sound) {
    $scope.selected = sound;
  };

  $scope.isSelected = function(sound) {
    return sound === $scope.selected;
  }

  $scope.play= function() {
    createjs.Sound.play($scope.selected.name, $scope.selected.options);
  };

  $scope.$on("TimerFinished", $scope.play);
});
