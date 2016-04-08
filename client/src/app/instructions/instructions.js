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
    $scope.memory = 'Flip the cards to find all the matching pairs';
    $scope.difference = 'Tap all the differences between the two photos';
    $scope.hidden = 'Tap all the hidden objects in the image';

    $scope.game_prompt = 'MEMORY GAME';

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
        $scope.game_prompt = 'SPOT THE DIFFERENCE';
      }else{
        $scope.instructions = $scope.hidden;
        $scope.game_prompt = 'FIND THE HIDDEN THINGS';
      }
       
  }

  angular.module('app.instructions', [])
    .config(config)
    .controller('InstructionsController', InstructionsController);
})();