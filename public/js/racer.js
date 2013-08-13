$(document).ready(function(){
  raceStart = new Date();
  console.log(raceStart);


  $(this).keyup(function(event){
    if (event.keyCode == 81){

      $("#player1 td.active").removeClass('active').next().addClass('active');
    }
    else if (event.keyCode == 80){
      $("#player2 td.active").removeClass('active').next().addClass('active');
    }
    if ( $('tr td:last-child').hasClass('active') )
    {   
      raceFinish = new Date();
      raceTime = Math.abs(raceFinish - raceStart);
      $(this).unbind('keyup');
      var p1 = $("#player1name").text();
      var p2 = $("#player2name").text();
      if ($('tr:first-child td:last-child' ).hasClass('active'))
        { 
          alert(p1 + ' WINS!! In '  + raceTime / 1000.0 + ' seconds!');
          var data = {
            raceTime : raceTime,
            winner : p1,
            loser : p2
          };

          $.post('/victory', data);
        
        }
      else
        {
          alert(p2 + ' WINS!! In ' +  raceTime / 1000.0 + ' seconds!');
          var data = {
            raceTime : raceTime,
            winner : p2,
            loser : p1
          };
          $.post('/victory', data);
      
        }
    }
  });

});
