$(function(){
  $(document).on("change" , "#in_effect" , function(){
    $("html").removeClass(in_class);
    in_class = $(this).val();
  });
  $(document).on("change" , "#out_effect" , function(){
    $("html").removeClass(out_class);
    out_class = $(this).val();
  });

  //page更新時に選択している値にする。本来はサーバでやった方がいいと思う。
  $(document).on('page:update' , function(){
    $("#out_effect").val(out_class);
    $("#in_effect").val(in_class);
  });
});