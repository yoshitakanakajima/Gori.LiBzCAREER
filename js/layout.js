/**
 * 共通部読み込み
 */
$(function(){
  $("#header").load("component/header.html .header", function() {
	  var url = location.href;
	  if (url.indexOf('introduction') >= 0) {
		  $("#menu-1").addClass("menu-on");
	  } else if (url.indexOf('document_list') >= 0) {
		  $("#menu-2").addClass("menu-on");
	  } else {
		  $("#menu-1").removeClass("menu-on");
		  $("#menu-2").removeClass("menu-on");
	  }
  });
  $("#sp-header").load("component/sp_header.html .header");
  $("#footer").load("component/footer.html .footer");
  $("#sp-footer").load("component/sp_footer.html .footer");
  $("#introduction").load("component/introduction.html .introduction");
  $("#sp-introduction").load("component/sp_introduction.html .introduction");
  $("#download").load("component/document.html .download");
  $("#consultation").load("component/consultation.html .consultation");
  $("#related-article").load("component/related_article.html .related-article");
})
