'use strict';

describe('Controller: TimersCtrl', function () {

  // load the controller's module
  beforeEach(module('timersApp'));

  var TimersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimersCtrl = $controller('TimersCtrl', {
      $scope: scope
    });
  }));

  it('starts with both time values 0', function () {
    expect(scope.elapsed).toBe(0);
    expect(scope.remaining).toBe(0);
  });
});
