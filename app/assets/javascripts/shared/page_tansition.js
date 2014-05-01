//global変数はあまり良くない。 changeのタイミングでエフェクトの値を変えてる。 see welcome.js on github
var in_class = "fadeInDown";
var out_class = "fadeOutDown";

$(function(){
  $(document).on('page:before-change' , function(){
    console.log('page:before-change');
    // reset class
    //カッコいいローディングを入れると良いと思う。
    $(".navbar-header").after('<div class="circle"></div><div class="circle1"></div>');
    $("html").attr("class" , "");
    console.log($("html").attr("class"));

    //$("html").addClass('animated ' + out_class);
  });
  $(document).on('page:receive', function(){
    // もしページ遷移が早いならば before-receiveのタイミングが良いかもしれない。
    $("html").addClass('animated ' + out_class);
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
    $("html").removeClass(out_class).addClass(in_class);
  });
  $(document).on('page:restore', function(){
    console.log('page:restore');
  });
  $(document).on('page:expire', function(){
    console.log('page:expire');
  });
});