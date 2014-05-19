


function Ryu () {
	this.hp = 20;

	this.primaryAttack = function(opponent) {
		opponent.hp = opponent.hp - 5;
	}
}

	/*this.comboAttack = function(opponent) {
		if (opponent.drops === true) {
			this.hp =0;
		} else {
			opponent.hp = opponent.hp - 20;
		}
	}*/


function renderFighter(fighter) {
	if (fighter.hp < 1){
		gameOver();
	} else {
		$('.fighter-stats').text('Fighter has ' + fighter.hp + 'hp');
	}
}

$('.Ryu-Button').click(function() {
  	fighter = new Ryu();
  	opponent = new Opponent();

  	$('.Ken-Button').remove();
  	$('.Chunli-Button').remove();
 
  	$('.menu').addClass('active');
 
 	renderFighter(fighter);
 	renderOpponent(opponent);

});

$('.primaryAttack').click(function() {
	fighter.primaryAttack(opponent);
	$(".action").text("shoryuken")

	renderFighter(fighter);
	renderOpponent(opponent);

	opponentAttack(fighter);
})

$('comboAttack').click(function(){
	fighter.comboAttack(opponent);
	$(".action").text("Hadouken")

	renderFighter(fighter);
	renderOpponent(opponent);

	opponentAttack(fighter);
});


function opponentAttack () {
	setTimeout(function(){
    	if (Math.floor(Math.random() * 10 ) > 4){
    		opponent.comboAttack(fighter);  
    		$('.action').text(' attack!');
    	} else {
     		opponent.primaryAttack(fighter);
      			$('.action').text('Enemy attack!');
		}

    renderFighter(fighter);
    renderOpponent(opponent);
 
},2000);
}



function Enemy() {
	this.hp = 30;

	this.primaryAttack = function(opponent) {
    	opponent.hp = opponent.hp - (10 + lives/2);
  	}
 
	this.comboAttack = function(opponent) {
    	opponent.hp = opponent.hp - 10;
    	this.hp = this.hp + 10;
  	}
}



function gameOver(){
	$('.game-over').addClass('active');
}



 
 
  



