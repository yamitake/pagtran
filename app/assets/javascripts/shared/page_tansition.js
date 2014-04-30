$(function(){
  $(document).on('page:before-change' , function(){
    $("html").addClass('animated flipOutY');
    console.log('page:before-change');
  });
  $(document).on('page:receive', function(){
    console.log('page:receive');
  });
  $(document).on('page:change', function(){
    console.log('page:change');
  });
  $(document).on('page:update', function(){
    console.log('page:update');
  });
  $(document).on('page:load', function(){
    console.log('page:load');
    //$("html").removeClass('bounceOutLeft').addClass('bounceInLeft');
    $("html").removeClass('flipOutY').addClass('flipInY');
  });
  $(document).on('page:restore', function(){
    console.log('page:restore');
  });
  $(document).on('page:expire', function(){
    console.log('page:expire');
  });
});