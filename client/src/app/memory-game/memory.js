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
        id: 0,
        matched: false,
        isFlipped: false,
      },
      {
        img: '',
        id: 0,
        matched: false,
        isFlipped: false
      },
      {
        img: '',
        id: 1,
        matched: false,
        isFlipped: false
      },
      {
        img: '',
        id: 1,
        matched: false,
        isFlipped: false
      },
      {
        img: '',
        id: 2,
        matched: false,
        isFlipped: false
      },
      {
        img: '',
        id: 2,
        matched: false,
        isFlipped: false
      },
      {
        img: '',
        id: 3,
        matched: false,
        isFlipped: false
      },
      {
        img: '',
        id: 3,
        matched: false,
        isFlipped: false
      }
    ];

    $scope.flipped = 0;
    $scope.block = false;
    $scope.block_count = 0;

   $scope.cardFlipped = function(index)
   {
    console.log('tried to flip ' + $scope.block)
    if($scope.flipped == 2 || $scope.cards[index].isFlipped || $scope.block){
      return;
    }else{
      console.log('can flip')
      $scope.cards[index].isFlipped = true;
      $('#'+index).addClass("flipped");
      $scope.flipped++;
    }
    

    for(var i=0; i < $scope.cards.length; i++)
    {
      if($scope.cards[index].id == $scope.cards[i].id && $scope.cards[i].isFlipped && index != i)
      {
        $scope.cards[index].matched = true;
        $scope.cards[i].matched = true;
      }
    }

   }

   $scope.timeout = function()
   {  
      $scope.block_count = 0;
      setTimeout(function(){
        $scope.block = true;
        for(var i=0; i < $scope.cards.length; i++)
        { 
          if($scope.cards[i].isFlipped){
            if($scope.cards[i].matched){

            }else{
              console.log('unflip')
              $scope.cards[i].isFlipped = false;
              $('#'+i).removeClass("flipped");
            }
            
          }
        }
        $scope.flipped = 0;

        //- since we have timeout and interval, 11 calls to timeout are made, wait for them all to finish and then unblock thread
        $scope.block_count++;
        if($scope.block_count == 11){
          $scope.block = false;
        }
          

        }, 1000)
   }

   setInterval(function(){
    if($scope.flipped != 2){
      return;
    }
    if(!$scope.block){
      console.log('calling timeout')
      $scope.timeout();
    }
    
    

   }, 100);
   
  }

  angular.module('app.memory', [])
    .config(config)
    .controller('MemoryController', MemoryController);
})();
