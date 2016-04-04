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
  function DifferenceController() {
    
   
  }

  angular.module('app.difference', [])
    .config(config)
    .controller('DifferenceController', DifferenceController);
})();
