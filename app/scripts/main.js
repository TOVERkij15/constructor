function Ryu () {
	this.hp = 40;

	this.primaryAttack = function(Akuma) {
		Akuma.hp = Akuma.hp - 5;
	}
}

	this.comboAttack = function(Akuma) {
		if (Akuma.drops === true) {
			this.hp =0;
		} else {
			Akuma.hp = Akuma.hp - 20;
		}
	}


function Akuma() {
	this.hp = 40;

	this.primaryAttack = function(Akuma) {
    	Akuma.hp = Akuma.hp - (10 + 2);
  	}
 
	this.comboAttack = function(Akuma) {
    	Akuma.hp = Akuma.hp - 10;
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
    	this.hp = this.hp + 20;
}

};

function renderFighter(fighter) {
	if (fighter.hp < 1){
		gameOver();
	} else {
		$('.fighter-stats').text('Fighter has ' + fighter.hp + 'hp');
	}
}


function renderAkuma(Akuma) {
	if (Akuma.hp < 1){
		gameOver();
	} else {
		$('.Akuma-stats').text('Akuma has ' + Akuma.hp + 'hp');
	}
}



$('.Ryu-Button').click(function() {
  	fighter = new Ryu();
  	Akuma = new Akuma();

  	$('.Ken-Button').remove();
  	$('.Chunli-Button').remove();
 
  	$('.menu').addClass('active');
  	$('.Akuma').addClass('active');
 
 	renderFighter(fighter);
 	renderAkuma(Akuma);

});

$('.primaryAttack').click(function() {
	fighter.primaryAttack(Akuma);
	$(".action").text("shoryuken!");

	renderFighter(fighter);
	renderAkuma(Akuma);

	AkumaAttack(fighter);
});

$('.comboAttack').click(function() {
	fighter.comboAttack(Akuma);
	$(".action").text("Down forward punch!");

	renderFighter(fighter);
	renderAkuma(Akuma);

	AkumaAttack(fighter);
});


function AkumaAttack () {
	setTimeout(function(){
    	if (Math.floor(Math.random() * 10 ) > 4){
    		Akuma.comboAttack(fighter);  
    		$('.action').text('KO!');
    	} else {
     	Akuma.primaryAttack(fighter)
      	$('.action').text('Enemy attack!');
		}

    renderFighter(fighter);
    renderAkuma(Akuma);
 
},1000);
}

function Chunli () {
	this.hp = 40;

	this.primaryAttack = function(Dudley) {
		Dudley.hp = Dudley.hp - 5;
	}
}

	this.comboAttack = function(Dudley) {
		if (Dudley.drops === true) {
			this.hp =0;
		} else {
			Dudley.hp = Dudley.hp - 20;
		}
	}


function Dudley() {
	this.hp = 40;

	this.primaryAttack = function(Dudley) {
    	Dudley.hp = Dudley.hp - (10 + 2);
  	}
 
	this.comboAttack = function(Dudley) {
    	Dudley.hp = Dudley.hp - 10;
    	this.hp = this.hp + 5;
  	}
}


function renderDudley(Dudley) {
	if (Dudley.hp < 1){
		gameOver();
	} else {
		$('.Dudley-stats').text('Dudley has ' + Dudley.hp + 'hp');
	}
}



$('.Chunli-Button').click(function() {
  	fighter = new Chunli();
  	Dudley = new Dudley();

  	$('.Ken-Button').remove();
  	$('.Ryu-Button').remove();
 
  	$('.menu').addClass('active');
  	$('.Dudley').addClass('active');
 
 	renderFighter(fighter);
 	renderDudley(Dudley);

});

$('.primaryAttack').click(function() {
	fighter.primaryAttack(Dudley);
	$(".action").text("Hadduken!");

	renderFighter(fighter);
	renderDudley(Dudley);

	DudleyAttack(fighter);
});

$('.comboAttack').click(function() {
	fighter.comboAttack(Dudley);
	$(".action").text("super!,Chunli wins!");

	renderFighter(fighter);
	renderDudley(Dudley);

	DudleyAttack(fighter);
});


function DudleyAttack () {
	setTimeout(function(){
    	if (Math.floor(Math.random() * 10 ) > 4){
    		Dudley.comboAttack(fighter) 
    		$('.action').text('KO');
    	} else {
     		Dudley.primaryAttack(fighter);
      			$('.action').text('Lightning-Kick!');
		}

    renderFighter(fighter);
    renderDudley(Dudley);
 
},1000);
}

function Ken() {
	this.hp = 40;

	this.primaryAttack = function(Oro) {
		Oro.hp = Oro.hp - 5;
	}
}

	this.comboAttack = function(Oro) {
		if (Oro.drops === true) {
			this.hp =0;
		} else {
			Oro.hp = Oro.hp - 20;
		}
	}


function Oro() {
	this.hp = 40;

	this.primaryAttack = function(Oro) {
    	Oro.hp = Oro.hp - (10 + 2);
  	}
 
	this.comboAttack = function(Oro) {
    	Oro.hp = Oro.hp - 10;
    	this.hp = this.hp + 5;
  	}
}


function renderOro(Oro) {
	if (Oro.hp < 1){
		gameOver();
	} else {
		$('.Oro-stats').text('Oro has ' + Oro.hp + 'hp');
	}
}



$('.Ken-Button').click(function() {
  	fighter = new Ken();
  	Oro = new Oro();

  	$('.Chunli-Button').remove();
  	$('.Ryu-Button').remove();
 
  	$('.menu').addClass('active');
  	$('.Oro').addClass('active');
 
 	renderFighter(fighter);
 	renderOro(Oro);

});

$('.primaryAttack').click(function() {
	fighter.primaryAttack(Oro);
	$(".action").text("shoryuken!");

	renderFighter(fighter);
	renderDudley(Dudley)

	OroAttack(fighter);
});

$('.comboAttack').click(function() {
	fighter.comboAttack(Oro)
	$(".action").text("Down-forward-Punch,Oro-Winner!");

	renderFighter(fighter);
	renderOro(Oro);

	OroAttack(fighter);
});


function OroAttack () {
	setTimeout(function(){
    	if (Math.floor(Math.random() * 5 ) > 4){
    		Oro.comboAttack(fighter);  
    		$('.action').text('tengustones!');
    	} else {
     		Oro.primaryAttack(fighter);
      			$('.action').text('EnergyOrb!');
		}

    renderFighter(fighter);
    renderOro(Oro);
 
},1000);
}


function gameOver(){
	$('.game-over').addClass('active');
}



 
 
  



