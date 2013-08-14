// $(document).ready(function(){

//   var player1 = new Player($('#player1name').text(), "#player1 td");
//   var player2 = new Player($('#player2name').text(), "#player2 td");
//   var game = new Game(player1, player2)

//   console.log(player1)
//   console.log(player2)
//   console.log(game)

//   raceStart = new Date();
  
  //instantiate objects. players, game. 
  //game contains -- racetime, winner, loser, board position
  //var player1 = new Player($(#player1id).inner_text());


// });

  // $(this).keyup(function(event){
    

  //   if (event.keyCode == 81){
  //     //move player1 function
  //     $("#player1 td.active").removeClass('active').next().addClass('active');
  //   }
  //   else if (event.keyCode == 80){
  //     //move player2 function
  //     $("#player2 td.active").removeClass('active').next().addClass('active');
//   //   }
//     if ( $('tr td:last-child').hasClass('active') )
//     {   
//       raceFinish = new Date();
//       raceTime = Math.abs(raceFinish - raceStart);
//       $(this).unbind('keyup');
//       var p1 = $("#player1name").text();
//       var p2 = $("#player2name").text();
//       if ($('tr:first-child td:last-child' ).hasClass('active'))
//         { 
//           alert(p1 + ' WINS!! In '  + raceTime / 1000.0 + ' seconds!');
//           var data = {
//             raceTime : raceTime,
//             winner : p1,
//             loser : p2
//           };

//           var params = $.param(data)

//           // console.log($params)
//           $.post('/victory', data, function(response)
//             {
//              $('body').html(response);
             
//             });
        
//         }
//       else
//         {
//           alert(p2 + ' WINS!! In ' +  raceTime / 1000.0 + ' seconds!');
//           var data = {
//             raceTime : raceTime,
//             winner : p2,
//             loser : p1
//           };

//           var params = $.param(data)
//           $.post('/victory', data, function(response)
//           {
//             $('body').html(response)          
//           });
      
//         }
//     }
//   });

// });
