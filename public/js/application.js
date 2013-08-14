
function Player(name, track_id){
  this.name = name;
  this.track_id = track_id
};

function Game(player1, player2){
	this.player1 = player1;
	this.player2 = player2
};

Game.prototype.finished = function(player){
  if ($(player.track_id + " td:last-child" ).hasClass('active')){
  	return true;
  }
};

Game.prototype.movePlayer = function(player){
  var active = player.track_id + " .active";
  var next = $(active).next();
  $(active).removeClass('active');
  $(next).addClass('active')
};

Game.prototype.raceTime = function(start, finish){
	this.start = start;
	this.finish = finish;
	this.race_time = function(){
	  return this.finish - this.start;
	}
};

$(document).ready(function(){

  var player1 = new Player($('#player1name').text(), "#player1");
  var player2 = new Player($('#player2name').text(), "#player2");
  var game = new Game(player1, player2)

  console.log(player1)
  console.log(player2)
  console.log(game)

  var raceStart = new Date();

   $(this).keyup(function(event){

      if (event.keyCode == 81){
      	game.finished(player1)
    	game.movePlayer(player1)
    	
      }
      else if (event.keyCode == 80){  
      	game.finished(player2)
    	game.movePlayer(player2) 
  	  }
  	    if (game.finished === true){
  		  alert("Finished")
  	    }
  });
});
