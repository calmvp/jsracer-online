$(document).ready(function(){
  $(this).keyup(function(event){
    if (event.keyCode == 81){
      $("#player1 td.active").removeClass('active').next().addClass('active');
    }
    else if (event.keyCode == 80){
      $("#player2 td.active").removeClass('active').next().addClass('active');
    }
    if ( $('tr td:last-child').hasClass('active') )
    {
      $(this).unbind('keyup');
      if ($('tr:first-child td:last-child' ).hasClass('active'))
        {alert('PLAYER 1 WINS!!')}
      else
        {alert('PLAYER 2 WINS!!')}
    }
  });

});
