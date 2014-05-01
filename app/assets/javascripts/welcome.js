$(function(){
  $(document).on("change" , "#in_effect" , function(){
    $("html").removeClass(in_class);
    in_class = $(this).val();
  });

  $(document).on("change" , "#out_effect" , function(){
    $("html").removeClass(out_class);
    out_class = $(this).val();
  });
});