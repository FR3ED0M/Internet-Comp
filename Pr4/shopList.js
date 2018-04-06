$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=item]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
            });
       
       $("input[name=item]").keyup(function(event){
          if(event.keyCode == 15){
            $("#button").click();
          }         
      });
      
      $(document).on('click','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');  //could use fast
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
      $('ol').sortable();  
    }
);