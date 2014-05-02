//global変数はあまり良くない。 changeのタイミングでエフェクトの値を変えてる。 see welcome.js on github
var in_class = "fadeIn";
var out_class = "fadeOut";

$(function(){
  $(document).on('page:before-change' , function(){
    //カッコいいローディングを入れると良いと思う。
    $(".active").before('<li><div class="circle"></div><div class="circle1"></div></li>');

    //reset class
    $("html").attr("class" , "");
    console.log($("html").attr("class"));

    // もしページ遷移が遅いならば before-receiveのタイミングが良いかもしれない。
    $("body").addClass('animated ' + out_class);
  });

  $(document).on('page:receive', function(){
    // もしページ遷移が早いならば before-receiveのタイミングが良いかもしれない。
    //$("body").addClass('animated ' + out_class);
  });

  $(document).on('page:change', function(){
  });

  $(document).on('page:update', function(){
  });

  $(document).on('page:load', function(){
    $("body").attr("css" , "");
    $("html").addClass('animated ' + in_class);
  });

  $(document).on('page:restore', function(){
  });

  $(document).on('page:expire', function(){
  });
});