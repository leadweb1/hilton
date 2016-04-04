(function () {
    'use strict';

    function threeSixtyDirective() {
        return {
            restrict: 'A',
            /*jshint unused:false*/
            link: function (scope, elm, attrs) {
                var $elem = jQuery(elm[0]).ThreeSixty({
                    totalFrames: attrs.treeSixtyCount, // Total no. of image you have for 360 slider
                    endFrame: attrs.treeSixtyCount, // end frame for the auto spin animation
                    currentFrame: 1, // This the start frame for auto spin
                    imgList: '.threesixty_images', // selector for image list
                    progress: '.spinner', // selector to show the loading progress
                    imagePath: 'assets/1-aesthetic-elegant/360_'+attrs.treeSixtyColor+'/', // path of the image assets
                    filePrefix: attrs.treeSixtyPrefix, // file prefix if any
                    ext: '.jpg', // extention for the assets
                    height: 600,
                    width: 600,
                    navigation: true,
                });

            }
        };
    }


    angular.module('common.directives.threesixty', [])
            .directive('appThreeSixty', threeSixtyDirective);

})();