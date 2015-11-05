(function () {
    'use strict';

    function nl2br($sce) {
        return function (msg, is_xhtml) {
            var is_xhtml = is_xhtml || true;
            var breakTag = (is_xhtml) ? '<br />' : '<br>';
            var msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
            return $sce.trustAsHtml(msg);
        }
    }

    angular.module('common.filters.nl2br', [])
            .filter('nl2br', nl2br);
})();
