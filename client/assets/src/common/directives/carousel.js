(function() {
  'use strict';
  
  var carouselDefaults = {
    dots: true,
    infinite: false, // Disabled because of a bug in Slick that gives wrong dots count when on infinite center mode
    swipeToSlide: true,
    autoplaySpeed: 1,
    swipe: false,
    arrows: false,
  };
  
  //var activeSlider = null;

  var setStartSlide = function ($elem) {
    var slickData = $elem.data('slick');
    
    if(slickData && slickData.startSlide !== undefined) {
        $elem.slick('slickGoTo', slickData.startSlide - 1);
    }
  };

  var resizeOverlay = function ($carousel) {
    $carousel = $carousel || jQuery('.slick-list');
    $carousel.each(function(){
        $carousel = jQuery(this);
        var $overlay = $carousel.find('.slider-overlay');
        var width = $carousel.find('.slick-slide.slick-current').width();

        $overlay.css('width', width)
            .css('margin-left', (width / 2) * -1)
        ;
    });
  };

  var createOverlay = function ($elem) {
    $elem.on('init', function(event, slick) {
      if(slick.options.overlay) {
        var $overlay = jQuery(slick.options.overlay);
        var $carousel = $elem.find('.slick-list');

        $overlay.appendTo($carousel);
        resizeOverlay($carousel);
      }
    });
    
  };

  function watchCarouselDirective() {
    return {
      restrict: 'A',
      /*jshint unused:false*/
      link: function(scope, elm, attrs) {
        var $elem = jQuery(elm[0]);
        var slickData = $elem.data('slick');
        
        createOverlay($elem);

        $elem.slick(jQuery.extend({}, carouselDefaults, {
            centerMode: true,
            slidesToShow: 5,
            overlay: '<div class="slider-overlay"><img src="#" /></div>',
            dots: false,
        }, slickData));
        
        setStartSlide($elem);
      }
    };
  }
  
  function contentCarouselDirective() {
    return {
      restrict: 'A',
      /*jshint unused:false*/
      link: function(scope, elm, attrs) {
        var $elem = jQuery(elm[0]);
        var slickData = $elem.data('slick');
        
        createOverlay($elem);

        $elem.slick(jQuery.extend({}, carouselDefaults, {}, slickData));
        
        setStartSlide($elem);
      }
    };
  }

  angular.module('common.directives.carousel', [])
    .directive('appWatchCarousel', watchCarouselDirective)
    .directive('appContentCarousel', contentCarouselDirective);

  jQuery(window).on('resize', function() {
      resizeOverlay(); 
  });
  
})();
