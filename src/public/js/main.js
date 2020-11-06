$(document).ready(function() {
  
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash); //this.hash lee el atributo href de este
    $('html, body').animate({ scrollTop: destino.offset().top }, 700); //Llega a su destino con el tiempo deseado
    return false;
  });

  $('.btn-menu').click(function() {
    $( "#menu" ).toggleClass( "menu2" ).toggleClass ( "menu1" );
    $( "#head" ).toggleClass( "header" );
    $( "#content" ).toggleClass( "content" );
    $( ".bx" ).toggleClass( "bx-x" ).toggleClass ( "bx-menu" );
    return false;
  });


  // funcion de scroll para el menu

  // $(function(){
  //   //detectar scroll hacia abajo
  //   var obj = $(document);          //objeto sobre el que quiero detectar scroll
  //   var obj_top = obj.scrollTop()   //scroll vertical inicial del objeto
  //   obj.scroll(function(){
  //       var obj_act_top = $(this).scrollTop();  //obtener scroll top instantaneo
  //       if(obj_act_top > obj_top){
  //         $( "#head" ).addClass( "header" );
  //         $( "#content" ).addClass( "content" );
  //       }else{
  //         $( "#head" ).removeClass( "header" );
  //         $( "#content" ).removeClass( "content" );
  //       }
  //       obj_top = obj_act_top;                  //almacenar scroll top anterior
  //   });
  // });


  
});