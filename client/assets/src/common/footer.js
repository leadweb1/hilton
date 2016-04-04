(function() {
  'use strict';

  function footerController($log) {
    $log.debug('Footer loaded');
  }

  angular.module('common.footer', [])
    .controller('FooterController', footerController);
})();
