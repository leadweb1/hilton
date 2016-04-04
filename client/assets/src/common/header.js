(function() {
  'use strict';

  function headerController(data, $scope, $log) {
    $log.debug('Header loaded');
    $scope.data = data;
  }

  angular.module('common.header', [])
    .controller('HeaderController', headerController);
})();
