<div class="app"><div class="hilton-background blue-gradient"><div class="cards"><div ng-repeat="card in cards track by $index" class="flip"><div ng-click="cardFlipped($index)" class="card {{$index}}"><div class="face front"><img src="/assets/images/cards/front.png" class="card-img"/></div><div class="face back"><img ng-src="{{images[card.id]}}" class="card-img"/></div></div></div></div></div></div>