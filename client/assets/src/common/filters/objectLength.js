(function () {
    'use strict';

    function objectLength() {
        return function (object) {
            return Object.keys(object).length;
        };
    }

    angular.module('common.filters.objectLength', [])
            .filter('objectLength', objectLength);
})();
