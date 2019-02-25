/**
 * 共通部読み込み
 */
$(function(){
  $("#header").load("component/header.html .header", function() {
	  var url = location.href;
	  if (url.indexOf('introduction_list') != 0) {
		  $("#menu-1").addClass("menu-on");
	  } else {
		  $("#menu-1").removeClass("menu-on");
	  }
  });
  $("#footer").load("component/footer.html .footer");
  $("#introduction").load("component/introduction.html .introduction");
  $("#download").load("component/document.html .download");
  $("#consultation").load("component/consultation.html .consultation");
  $("#related-article").load("component/related_article.html .related-article");
})
