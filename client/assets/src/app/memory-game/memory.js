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
  function MemoryController($scope, $state) {
    
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
      },
      {
        img: '',
        id: 4,
        matched: false,
        isFlipped: false
      },
      {
        img: '',
        id: 4,
        matched: false,
        isFlipped: false
      }
    ];

    $scope.images = [
      'assets/images/cards/one.png',
      'assets/images/cards/two.png',
      'assets/images/cards/three.png',
      'assets/images/cards/four.png',
      ''
    ];

    $scope.flipped = 0;

   $scope.cardFlipped = function(index)
   {
    if($scope.flipped === 2 || $scope.cards[index].isFlipped){
      return;
    }else{
      console.log('can flip');
      $scope.cards[index].isFlipped = true;
      $('#'+index).addClass('flipped');
      $scope.flipped = $scope.flipped + 1;
    }
    

    for(var i=0; i < $scope.cards.length; i = i + 1)
    {
      if($scope.cards[index].id === $scope.cards[i].id && $scope.cards[i].isFlipped && index !== i)
      {
        $scope.cards[index].matched = true;
        $scope.cards[i].matched = true;
      }
    }

   };

  $scope.shuffle = function (array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
  };

   $scope.init = function()
   {
    var id = [0,0,1,1,2,2,3,3, 4, 4];
    id = $scope.shuffle(id);
    for(var i=0; i < $scope.cards.length; i = i + 1)
    {
      $scope.cards[i].id = id[i];
    }
   };

   $scope.timeout = function()
   {  
      setTimeout(function(){
        for(var i=0; i < $scope.cards.length; i = i + 1)
        { 
          if($scope.cards[i].isFlipped){
            if($scope.cards[i].matched){
            }else{
                $scope.cards[i].isFlipped = false;
                $('#'+i).removeClass('flipped');
            }
            
          }
        }
        $scope.flipped = 0;

        }, 500);
   };

   setInterval(function(){
    console.log('interval');
    if($scope.flipped !== 2){
      return;
    }
      console.log('MAX ATTEMPT LOG, calling timeout');
      $scope.timeout();

    var matched = 0;
    for(var i=0; i < $scope.cards.length; i = i + 1)
    {
      if($scope.cards[i].matched){
        matched = matched  + 1;
      }
    }
    if(matched === $scope.cards.length){
      $state.go('root.win');
    }
    

   }, 100);

   $scope.init();
   
  }

  angular.module('app.memory', [])
    .config(config)
    .controller('MemoryController', MemoryController);
})();
