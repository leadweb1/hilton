(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.instructions', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/instructions/instructions.html',
            controller: 'InstructionsController as instructions',
          }
        }
      });
  }

  /**
   * @name  HomeController
   * @description Controller
   */
  function InstructionsController($scope, $stateParams, $state, $location) {

    $scope.game = $stateParams.game;
    $scope.instructions = '';
    $scope.memory = 'Instructions For the Memory Game';
    $scope.difference = 'Instructions for the Difference Game';
    $scope.hidden = 'Instructions for the Hidden game';

    $scope.goToGame = function()
    {
      if($scope.game === 'memory')
      {
        $location.path('/memory');
      }else if ($scope.game === 'difference')
      {
        $location.path('/difference');
      }else{
        $location.path('/hidden');
      }
    };

    if($scope.game === 'memory')
      {
        $scope.instructions = $scope.memory;
      }else if ($scope.game === 'difference')
      {
        $scope.instructions = $scope.difference;
      }else{
        $scope.instructions = $scope.hidden;
      }
       
  }

  angular.module('app.instructions', [])
    .config(config)
    .controller('InstructionsController', InstructionsController);
})();