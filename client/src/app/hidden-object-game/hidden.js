(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.hidden', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/hidden-object-game/hidden-object-game.html',
            controller: 'HiddenController as hidden',
          }
        }
      });
  }

  /**
   * @name  HomeController
   * @description Controller
   */
  function HiddenController($scope) {

    $scope.game_prompt = 'HIDDEN OBJECTS';
    $scope.instructions = 'Find all the hidden objects to complete the game.';
    
   $scope.toggleVisible = function()
   {
    $('#visible').toggleClass('hidden')
   }
   
  }

  angular.module('app.hidden', [])
    .config(config)
    .controller('HiddenController', HiddenController);
})();
