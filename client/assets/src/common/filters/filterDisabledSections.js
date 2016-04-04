(function () {
    'use strict';

    function filterDisabledSections() {
        return function (input) {
            var inputArray = [];

            for (var item in input) {
                if(item) {
                    inputArray.push(input[item]);
                }
            }

            return inputArray.filter(function (v) {
                return v.disabled !== true;
            });
        };
    }

    angular.module('common.filters.filterDisabledSections', [])
            .filter('filterDisabledSections', filterDisabledSections);
})();
