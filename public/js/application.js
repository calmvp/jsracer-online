
function Player(name, track_id){
  this.name = name;
  this.track_id = track_id
};

function Game(player1, player2){
	this.player1 = player1;
	this.player2 = player2
};

Game.prototype.checkFinished = function(){

};

Game.prototype.movePlayer = function(player){
  var active = player.track_id + " .active";
  var next = $(active).next();
  $(active).removeClass('active');
  $(next).addClass('active')
};


$(document).ready(function(){

  var player1 = new Player($('#player1name').text(), "#player1");
  var player2 = new Player($('#player2name').text(), "#player2");
  var game = new Game(player1, player2)

  console.log(player1)
  console.log(player2)
  console.log(game)

  raceStart = new Date();

   $(this).keyup(function(event){

      if (event.keyCode == 81){
      	console.log('player1 moving')
    	game.movePlayer(player1)
      }
      else if (event.keyCode == 80){  
      	console.log('player2 moving')
    	game.movePlayer(player2)  
  	  }
  });
});
