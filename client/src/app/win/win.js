(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.win', {
        url: '/win',
        views: {
          '@': {
            templateUrl: 'src/app/win/win.html',
            controller: 'WinController as win',
          }
        }
      });
  }

  /**
   * @name  SplashController
   * @description Controller
   */
  function WinController($state, $scope) {



    $scope.goHome = function()
    {
      $state.go('begin');
    };

    $scope.playAgain = function()
    {
      $state.go('memory');
    };
    
  }

  angular.module('app.win', [])
    .config(config)
    .controller('WinController', WinController);
})();
