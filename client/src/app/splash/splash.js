(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.splash', {
        url: '/begin',
        views: {
          '@': {
            templateUrl: 'src/app/splash/splash.html',
            controller: 'SplashController as splash',
          }
        }
      });
  }

  /**
   * @name  SplashController
   * @description Controller
   */
  function SplashController(data, $scope, $state, $rootScope, Idle) {
    $scope.data = data;
    $rootScope.localIdle = 0;
    if(Idle.running() !== true) {
        Idle.watch();
    }
    $scope.goToGame = function()
    {
      $state.go('memory');
    };
  }

  angular.module('app.splash', [])
    .config(config)
    .controller('SplashController', SplashController);
})();
