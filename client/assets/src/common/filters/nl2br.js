(function () {
    'use strict';

    function nl2br($sce) {
        return function (msg, isXhtml) {
            var breakTag = (isXhtml) ? '<br />' : '<br>';
            isXhtml = isXhtml || true;
            msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
            return $sce.trustAsHtml(msg);
        };
    }

    function nl2p($sce) {
        return function (msg, isXhtml) {
            var breakTag = '</p><p>';
            isXhtml = isXhtml || true;
            msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
            return $sce.trustAsHtml('<p>'+msg+'</p>');
        };
    }

    angular.module('common.filters.nl2br', [])
            .filter('nl2br', nl2br)
            .filter('nl2p', nl2p);
})();
