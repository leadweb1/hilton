(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/home/home.html',
            controller: 'HomeController as home',
          }
        }
      });
  }

  /**
   * @name  HomeController
   * @description Controller
   */
  function HomeController() {
    
   
   
  }

  angular.module('app.home', [])
    .config(config)
    .controller('HomeController', HomeController);
})();
