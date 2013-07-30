$(document).ready(function() {

  var dieCollection = new DiceCollection();

  $('#roller button.add').on('click', function() {
    dieCollection.addDie();
    $('.dice').append('<div class="die">' + dieCollection.collection[dieCollection.numDice()].value + '</div>');
  });

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      dieCollection.rollDie();
      $(die).text(dieCollection.collection[dieCollection.numDice()].value);
    });
  });
});

// make the Die
function Die(sides){
  this.sides = sides;
  this.value = 0;
}

Die.prototype = {
  roll : function(){
    this.value = Math.floor((Math.random()*6)+1);
  }
}

// make a die collection
function DiceCollection(){
  this.collection = [];
}

DiceCollection.prototype = {
  addDie : function(){
    this.collection.push(new Die(6));
  }, 
  rollDie : function(){
    for (var counter = 0; counter < this.collection.length; counter++) {
      this.collection[counter].roll();
    };
  },
  numDice : function(){
    return this.collection.length - 1;
  }
}
