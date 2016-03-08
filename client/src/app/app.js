(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });
  
  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider, hammerDefaultOptsProvider, IdleProvider) {
    $urlRouterProvider.otherwise('/begin');
    $logProvider.debugEnabled(false);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderController',
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterController'
          }
        },
        resolve: {
          data: function(DataService) {
            return DataService.get();
          }
        }
      })
      .state('collection', {
        url: '/collection',
        templateUrl: 'src/app/collection/collection.html',
        controller: 'CollectionController'
      })
      .state('terms', {
        url: '/terms',
        templateUrl: 'src/app/terms/terms.html',
        controller: 'TermsController'
      })
      .state('video', {
        url: '/video',
        templateUrl: 'src/app/video/video.html',
        controller: 'VideoController'
      })
      .state('videos', {
        url: '/videos',
        templateUrl: 'src/app/videos/videos.html',
        controller: 'VideosController'
      })
      .state('thanks', {
        url: '/thanks',
        templateUrl: 'src/app/thanks/thanks.html',
        controller: 'ThanksController'
      })
      .state('email', {
        url: '/email',
        templateUrl: 'src/app/email/email.html',
        controller: 'EmailController'
      });

    hammerDefaultOptsProvider.set({
        recognizers: [
            [Hammer.Tap, {}],
            [Hammer.Press, {}],
            [Hammer.Swipe, {}],
            [Hammer.Pan, {}], // For drag events
        ],
    });
    
    IdleProvider.interrupt('mousemove keydown DOMMouseScroll mousewheel mousedown onplaying touchstart touchmove scroll');
    IdleProvider.idle(appConfig.timeout); // In seconds, default is 20min
    //IdleProvider.timeout(appConfig.timeout); // In seconds, default is 30sec
  }

  function MainCtrl($log, $scope, $state, Idle) {
    $log.debug('MainCtrl laoded!');
    
    $scope.$on('IdleTimeout', function() {
        $state.go('root.splash');
        $state.countdown = appConfig.timeout;
        Idle.watch();
    });
    $scope.$on('IdleStart', $scope.submissionEnd);
    $scope.$on('IdleEnd', $scope.submissionStart);
  }

  function run($rootScope, $state, $log, Idle, $location, $http) {
    $log.debug('App is running!');
    
    Idle.watch();
    
    $rootScope.isActiveState = function(state) {
        return ($state.current.name === state);
    };

    $rootScope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase === '$apply' || phase === '$digest') {
          if(fn && (typeof(fn) === 'function')) {
              fn();
          }
      } else {
          this.$apply(fn);
      }
    };
    
    $rootScope.changeState = function(state) {
        $state.go(state);
    };

    $rootScope.submission = {
      astral_post: {
        key: appConfig.postKey,
        sessions: [],
      }
    };
    $rootScope.submissionAction = function(field_name, field_value, field_extra) {
        if ($rootScope.submission.astral_post.sessions.length < 1) {
          $rootScope.submissionStart();
        }
        return $rootScope.submission.astral_post.sessions[0].field_action.push({
          field_name: field_name,
          field_value: field_value,
          field_extra: field_extra,
          field_time: {
            value: Math.round(Date.now() / 1000)
          }
        });
    };
    $rootScope.submissionStart = function() {
      $rootScope.submission.astral_post.sessions = [{
        'field_email': 'none',
        'field_device': appConfig.clientId,
        'field_story': appConfig.project,
        'field_time': {
          'value': Math.round(Date.now() / 1000),
          'value2': 0
        },
        'field_action': []
      }];
    };
    $rootScope.submissionEnd = function() {
      if ($rootScope.submission.astral_post.sessions.length < 1 || $rootScope.submission.astral_post.sessions[0].field_action.length < 1) {
        $rootScope.submission.sessions = [];        
        $state.go('root.splash');
        return;
      }
      
      
      $rootScope.submission.astral_post.sessions[0].field_time.value2 = Math.round(Date.now() / 1000);
      
      if(true) {
        $http({
          url: appConfig.postUrl,
          method: 'POST',
          data: $rootScope.submission,
          headers: {
            'Content-Type': 'x-www-form-urlencoded'
          }
        }).then(function() {
          $location.path('/begin');
          $rootScope.submission.sessions = [];
        });
      }
    };
  }

  angular.module('app', [
      'ui',
      'ui.router',
      'ngAnimate',
      'ngIdle',
      'angular-gestures',
      'app.splash',
      'app.home',
      'app.email',
      'app.terms',
      'app.privacy',
      'app.videos',
      'app.video',
      'app.collection',
      'app.aestheticElegantDesign',
      'app.intuitiveExperience',
      'app.healthierLifestyle',
      'app.convenienceAndMore',
      'app.customizeYourGear',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.services.experience',
      'common.directives.version',
      'common.directives.carousel',
      'common.directives.threesixty',
      'common.filters.uppercase',
      'common.filters.filterDisabledSections',
      'common.filters.nl2br',
      'common.filters.strpad',
      'common.filters.objectLength',
      'common.interceptors.http',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
