function Ryu () {
	this.hp = 40;

	this.primaryAttack = function(opponent) {
		opponent.hp = opponent.hp - 5;
	}
}

	this.comboAttack = function(opponent) {
		if (opponent.drops === true) {
			this.hp =0;
		} else {
			opponent.hp = opponent.hp - 20;
		}
	}


function Opponent() {
	this.hp = 40;

	this.primaryAttack = function(opponent) {
    	opponent.hp = opponent.hp - (10 + 2);
  	}
 
	this.comboAttack = function(opponent) {
    	opponent.hp = opponent.hp - 10;
    	this.hp = this.hp + 5;
  	}
}



function Fighter(){
	this.hp=40;

	this.primaryAttack=function(fighter) {
		fighter.hp = fighter.hp -(10 +3);
	}

	this.comboAttack = function(fighter) {
    	fighter.hp = fighter.hp - 10;
    	this.hp = this.hp + 10;
}

}

function renderFighter(fighter) {
	if (fighter.hp < 1){
		gameOver();
	} else {
		$('.fighter-stats').text('Fighter has ' + fighter.hp + 'hp');
	}
}


function renderOpponent(opponent) {
	if (opponent.hp < 1){
		gameOver();
	} else {
		$('.opponent-stats').text('opponent has ' + opponent.hp + 'hp');
	}
}



$('.Ryu-Button').click(function() {
  	fighter = new Ryu();
  	opponent = new Opponent();

  	$('.Ken-Button').remove();
  	$('.Chunli-Button').remove();
 
  	$('.menu').addClass('active');
  	$('.Akuma').addClass('active');
 
 	renderFighter(fighter);
 	renderOpponent(opponent);

});

$('.primaryAttack').click(function() {
	fighter.primaryAttack(opponent);
	$(".action").text("shoryuken!");

	renderFighter(fighter);
	renderOpponent(opponent)

	opponentAttack(fighter);
});

$('.comboAttack').click(function() {
	fighter.comboAttack(opponent)
	$(".action").text("Down forward punch!");

	renderFighter(fighter);
	renderOpponent(opponent);

	opponentAttack(fighter);
});


function opponentAttack () {
	setTimeout(function(){
    	if (Math.floor(Math.random() * 10 ) > 4){
    		opponent.comboAttack(fighter);  
    		$('.action').text('KO!');
    	} else {
     		opponent.primaryAttack(fighter);
      			$('.action').text('Enemy attack!');
		}

    renderFighter(fighter);
    renderOpponent(opponent);
 
},3000);
}




function Chunli () {
	this.hp = 60;

	this.primaryAttack = function(opponent) {
		opponent.hp = opponent.hp - 5;
	}
}

	this.comboAttack = function(opponent) {
		if (opponent.drops === true) {
			this.hp =0;
		} else {
			opponent.hp = opponent.hp - 40;
		}
	}





$('.Chunli-Button').click(function() {
  	fighter = new Chunli();
  	opponent = new Opponent();

  	$('.Ryu-Button').remove();
  	$('.Ken-Button').remove();
 
  	$('.menu').addClass('active');
  	$('.Dudley').addClass('active');

 
 	renderFighter(figher);
 	renderOpponent(opponent);

});




/*Could not figure out how to give each individual 
character their own skils without the hp being undefined*/

/*function Chunli () {
	setTimeout(function(){
    	if (Math.floor(Math.random() * 10 ) > 4){
    		Dudley.comboAttack(Chunli);  
    		$('.action').text('spinning bird kick');
    	} else {
     		Dudley.primaryAttack(Chunli);
      			$('.action').text('corkscrew blow');
		}

    renderChunli(chunli);
    renderDudley(Dudley);
 
},2000);*/


function Ken () {
	this.hp = 40;

	this.primaryAttack = function(opponent) {
		opponent.hp = opponent.hp - 5;
	}
}

	this.comboAttack = function(opponent) {
		if (opponent.drops === true) {
			this.hp =0;
		} else {
			opponent.hp = opponent.hp - 20;
		}
	}

$('.Ken-Button').click(function() {
  	fighter = new Chunli();
  	opponent = new Opponent();

  	$('.Ryu-Button').remove();
  	$('.Chunli-Button').remove();
 
  	$('.menu').addClass('active');
  	$('.Oro').addClass('active');

 
 	renderFighter(fighter);
 	renderOpponent(opponent);

});







function gameOver(){
	$('.game-over').addClass('active');
}



 
 
  



