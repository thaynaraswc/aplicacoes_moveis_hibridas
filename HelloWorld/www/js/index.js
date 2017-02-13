function btnLeft(){
  
  $('.ui-menu-left').css('z-index',2000);
  $('.sombra-menu').removeClass('hide');

  $('.ui-menu-left').animate({    
      left: "0"    
    }, 400, function() {
      
    });
}

function btnLeftOut(){
  
  $('.sombra-menu').addClass('hide');

  $('.ui-menu-left').animate({    
      left: "-300px",
      'z-index': "-2"
    }, 400, function() {
      
    });

}
