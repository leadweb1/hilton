(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.difference', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/spot-the-difference/spot-the-difference.html',
            controller: 'DifferenceController as difference',
          }
        }
      });
  }

  /**
   * @name  HomeController
   * @description Controller
   */
  function DifferenceController($scope) {
    
    $scope.score = 0;
    $scope.game_prompt = 'SPOT THE DIFFERENCE';
    $scope.instructions = 'Find all the differences between the images to complete the game.';

    $scope.toggleVisible = function()
     {
      $('#visible').toggleClass('hidden')
     }
   
  }

  angular.module('app.difference', [])
    .config(config)
    .controller('DifferenceController', DifferenceController);
})();
