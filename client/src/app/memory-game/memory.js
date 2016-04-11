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
  function MemoryController($scope, $state, cardData, $rootScope, $sce) {

    //used to toggle view visibility
    $scope.instructionsBool = true;
    $scope.idleBool = false;
    $scope.score = 0;
    $scope.ms_timeout = 50000;

    // Set up card images by randomly choosing one of two sets in the service
    $scope.cardImages = cardData.initCardSet();
    $scope.game_prompt = cardData.gamePrompt;
    $scope.instructions = cardData.instructions;
    $scope.cards = cardData.initCardState;
    $scope.copy = '';
    // Initialize our scope flipped val to show that we start with 0 cards flipped up
    $scope.flipped = 0;
    $rootScope.localIdle = 0;


    // Switches the opacity and hidden attribute of the fixed instructions panel
    // the 500 ms timeout is the same duration as the css class's 'transition-duration:0.5s'
    $scope.toggleVisible = function()
    {
      $scope.$apply();
      console.log($scope.idleBool);
      if($scope.instructionsBool){
        $('.instructions-back').css('opacity', '0.0');
        $('.fixed-instruction').css('opacity', '0.0');
        $('.instructions-back').css('pointer-events', 'none');
        $('.fixed-instruction').css('pointer-events', 'none');
        setTimeout(function(){
          $('.instructions-back').toggleClass('hidden');
          $('.fixed-instruction').toggleClass('hidden');
        }, 500);
      }else{
        $('.instructions-back').toggleClass('hidden');
        $('.fixed-instruction').toggleClass('hidden');
        setTimeout(function(){
            $('.instructions-back').css('opacity', '0.75');
            $('.fixed-instruction').css('opacity', '1.0');
            $('.instructions-back').css('pointer-events', 'auto');
            $('.fixed-instruction').css('pointer-events', 'auto');
        }, 10);
      }
      $scope.instructionsBool = !$scope.instructionsBool;
      // $scope.toggleIdle();
    };

    // called when a card is flipped by the user
   $scope.cardFlipped = function(index)
   {
        $scope.resetIdle();

        if($scope.flipped === 2 || $scope.cards[index].isFlipped){// dont allow any more cards to flip because 2 are already flipped!
          return; 
        }else{ // The card can, flip, animated it by adding the class and incrementing flipped
          $scope.cards[index].isFlipped = true;
          $('#'+index).addClass('flipped');
          $scope.flipped = $scope.flipped + 1;
        }
        

        for(var i=0; i < $scope.cards.length; i = i + 1)
        {
          if($scope.cards[index].id === $scope.cards[i].id && $scope.cards[i].isFlipped && index !== i) // if the card at [index] matches an already flipped card, then they match
          {
            $scope.cards[index].matched = true;
            $scope.cards[i].matched = true;
            $scope.copy = $sce.trustAsHtml($scope.cardImages.copy[$scope.cards[index].id]);
            $scope.score = $scope.score + 1;
          }
        }
   };

   $scope.getImageSource = function(id)
   {
      return ($scope.cardImages[id]);
   };

   //if cards are nnot matched, wait 500ms and flip them back
   $scope.timeout = function()
   {  
      setTimeout(function(){
        for(var i=0; i < $scope.cards.length; i = i + 1)
        { 
          if($scope.cards[i].isFlipped){
            if(!$scope.cards[i].matched){
              $scope.cards[i].isFlipped = false;
              $('#'+i).removeClass('flipped');
            }
            
          }
        }
        $scope.flipped = 0;

        }, 500);
   };

   $scope.showCopyInstructions = function()
   {
    console.log('idle bool is: ' + $scope.idleBool);
    if($scope.idleBool){
      return false;
    }else{
      return true;
    }
   };
   $scope.showCopyIdle = function()
   {
    if($scope.idleBool){
      return true;
    }else{
      return false;
    }
   };

   $scope.resetIdle = function()
   {
      $rootScope.localIdle = 0;
      $scope.idleBool = false;
   };

   $rootScope.localIdleTimeout = function()
   {
    
    $scope.idleBool = true;
    if(!$scope.instructionsBool){
      $scope.toggleVisible();
      $rootScope.submissionAction('click', 'action', 'user_went_idle')
    }
   };

   $scope.goHome = function()
   {
    $state.go('begin');
   };

   $state.playAgain = function()
   {
    submissionAction('click', 'action', 'user_clicked_play_again')
    $state.go('memory;');
   };

   setInterval(function(){
    console.log($rootScope.localIdle);
        if($scope.instructionsBool){
          $rootScope.localIdle = 0;
        }else if($rootScope.localIdle >= $scope.ms_timeout){
          $rootScope.localIdleTimeout();
        }else{
          $rootScope.localIdle += 100;
        }

        if($scope.flipped !== 2){
          return;
        }
        
        $scope.timeout();

          var matched = 0;
          for(var i=0; i < $scope.cards.length; i = i + 1)
          {
            if($scope.cards[i].matched){
              matched = matched  + 1;
            }
          }
          if(matched === $scope.cards.length){
            setTimeout(function(){
              $rootScope.submissionAction('click', 'action', 'user_won')
              $state.go('root.win');
            }, 500);
            
          }
   }, 100);

   $scope.cards = cardData.init();
   
   
  }

  angular.module('app.memory', [])
    .config(config)
    .controller('MemoryController', MemoryController);
})();
