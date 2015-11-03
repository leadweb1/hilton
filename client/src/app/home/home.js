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
            templateUrl: 'src/app/home/home.tpl.html',
            controller: 'HomeCtrl as home',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HomeCtrl(data, $scope) {
    $scope.data = data;
    $scope.activeSection = -1;
    
    $scope.selectSection = function(index) {
        $scope.activeSection = index;
    }
  }

  angular.module('home', [])
    .config(config)
    .controller('HomeCtrl', HomeCtrl);
})();
