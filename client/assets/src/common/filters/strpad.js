(function () {
    'use strict';

    function strpad() {
        return function (a, b) {
            return(1e4 + a + '').slice(-b);
        };
    }

    angular.module('common.filters.strpad', [])
            .filter('strpad', strpad);
})();
