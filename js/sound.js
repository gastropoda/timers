var soundModule = angular.module("sound", []);

soundModule.factory("sound", function() {
  createjs.Sound.registerSound("snd/beep.ogg", "beep");
  return {
    beep: function() {
      createjs.Sound.play("beep", {loop: 1});
    }
  };
});
