$(function(){
  /**
   * get parameter取得用
   */
  function getParams(url)
  {
      var vars = new Object();
      var hashes = url.slice(url.indexOf('?') + 1).split('&');
      var length = hashes.length;
      for(var i = 0; i < length; i++) {
          var hash = hashes[i].split('=');
          vars[hash[0]] = hash[1];
      }
      return vars;
  }

  $('a').click(function(){
    vars = getParams($(this).attr("href"));
    //reset style
    $("html").removeClass(in_class);
    $("html").removeClass(out_class);
    in_class = vars["i"];
    out_class = vars["o"];
    //アニメーションのフックは,app/assets/javascripts/shared/page_transition.js
  });
});