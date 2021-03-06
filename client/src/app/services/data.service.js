angular.module('app').factory('cardData', function(){
	'use strict';
	var Service = {};
	Service.gamePrompt = 'MEMORY GAME';
	Service.instructions = 'Flip the cards to find all the matching pairs.';
	Service.cardImageSetOne = {
	        images :  [
	          'assets/CARDS/card_1.jpg',
	          'assets/CARDS/card_2.jpg',
	          'assets/CARDS/card_3.jpg',
	          'assets/CARDS/card_4.jpg',
	          'assets/CARDS/card_5.jpg',
	        ],
	        copy : [
	          'Hilton Whistler Resort & Spa is just steps to the chairlifts of the legendary Whistler &\u00A0Blackcomb\u00A0Mountains.',
	          'From shopping to entertainment, the best of the Big Apple is a short distance from New York\u00A0Hilton\u00A0Midtown.',
	          'Immerse yourself in the charm of Old Town, a short distance from\u00A0Hilton\u00A0Quebec.',
	          'During your stay at Hilton Lac-Leamy, try your luck at the connected Casino\u00A0du\u00A0Lac-Leamy.',
	          'The Hilton Hawaiian Village© Waikiki Beach Resort spans 22 acres of\u00A0oceanfront\u00A0paradise.'
	        ]
      };
      Service.cardImageSetTwo = {
	        images :  [
	          'assets/CARDS/card_chooseroom.jpg',
	          'assets/CARDS/card_digitalcheckin.jpg',
	          'assets/CARDS/card_freenights.jpg',
	          'assets/CARDS/card_freewifi.jpg',
	          'assets/CARDS/card_lowestprice.jpg',
	        ],
	        copy : [
	          'Use the HHonors App to choose your preferred room\u00A0before\u00A0arrival.',
	          'Check in online with the HHonors App and head straight to your room\u00A0upon\u00A0arrival.',
	          'Hilton HHonors® rewards your loyalty with upgrades and\u00A0free\u00A0stays.',
	          'Stay connected with free Wi-Fi when you book direct\u00A0at\u00A0Hilton.com.',
	          'Always find the lowest price on Hilton.com or we\'ll give\u00A0you\u00A0$50.'
	        ]
      };
     Service.initCardSet = function()
     {
		    if(Math.random() < 0.5)
		    {
		      return Service.cardImageSetOne;
		    }else{
		      return Service.cardImageSetTwo;
		    }
     };
    Service.initCardState = [
	      {
	        id: 0,
	        matched: false,
	        isFlipped: false,
	      },
	      {
	        id: 0,
	        matched: false,
	        isFlipped: false
	      },
	      {
	        id: 1,
	        matched: false,
	        isFlipped: false
	      },
	      {
	        id: 1,
	        matched: false,
	        isFlipped: false
	      },
	      {
	        id: 2,
	        matched: false,
	        isFlipped: false
	      },
	      {
	        id: 2,
	        matched: false,
	        isFlipped: false
	      },
	      {
	        id: 3,
	        matched: false,
	        isFlipped: false
	      },
	      {
	        id: 3,
	        matched: false,
	        isFlipped: false
	      },
	      {
	        id: 4,
	        matched: false,
	        isFlipped: false
	      },
	      {
	        id: 4,
	        matched: false,
	        isFlipped: false
	      }
    ];
    Service.shuffle = function () { // Basic array shuffle
	      var array = [0,0,1,1,2,2,3,3, 4, 4];
	      var currentIndex = array.length, temporaryValue, randomIndex;
	      while (0 !== currentIndex) {
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;
	        temporaryValue = array[currentIndex];
	        array[currentIndex] = array[randomIndex];
	        array[randomIndex] = temporaryValue;
	      }
	      return array;
  	};
  	Service.init = function()
   {
	    var id = Service.shuffle();
	    for(var i=0; i < Service.initCardState.length; i = i + 1)
	    {
	      Service.initCardState[i].id = id[i];
	      Service.initCardState[i].isFlipped = false;
    	  Service.initCardState[i].matched = false;
	    }
	    return Service.initCardState;
   };
	return Service;
});