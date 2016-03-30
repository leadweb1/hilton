(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.memory', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/memory-game/memory-game.html',
            controller: 'MemoryController as memory',
          }
        }
      });
  }

  /**
   * @name  HomeController
   * @description Controller
   */
  function MemoryController($scope) {
    
    $scope.cards = [
      {
        img: '',
        isFlipped: true
      },
      {
        img: '',
        isFlipped: false
      },
      {
        img: '',
        isFlipped: false
      },
      {
        img: '',
        isFlipped: false
      },
      {
        img: '',
        isFlipped: false
      },
      {
        img: '',
        isFlipped: false
      },
      {
        img: '',
        isFlipped: false
      },
      {
        img: '',
        isFlipped: false
      }
    ];

    $scope.flipped = [];

   $scope.cardFlipped = function(index)
   {
    if($scope.flipped.length == 2){
      return;
    }
    $scope.cards[0].isFlipped = true;
    console.log($scope.cards);
    $('#'+index).addClass("flipped");
    $scope.flipped.push(index);
    $scope.cards[index].isFlipped = true;
   }

   setInterval(function(){
    if($scope.flipped.length != 2){
      return;
    }
    setTimeout(function(){
        for(var i=0; i < $scope.flipped.length; i++)
        {
          $('#'+$scope.flipped[i]).removeClass("flipped");
        }
        $scope.flipped = [];
        }, 1000)

   }, 100);
   
  }

  angular.module('app.memory', [])
    .config(config)
    .controller('MemoryController', MemoryController);
})();
