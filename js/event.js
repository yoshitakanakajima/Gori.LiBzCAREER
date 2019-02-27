/**
 * イベント
 */
$(document).on('mouseenter','#menu-1', function() {
    $('#menu-1').css('background', '#ffffff');
});
$(document).on('mouseout','#menu-1', function() {
    $('#menu-1').css('background', '');
});
$(document).on('click','#menu-1', function() {
	window.location.href = 'introduction_list.html';
});

$(document).on('mouseenter','#menu-2', function() {
    $('#menu-2').css('background', '#ffffff');
});
$(document).on('mouseout','#menu-2', function() {
    $('#menu-2').css('background', '');
});
$(document).on('click','#menu-2', function() {
	window.location.href = 'document_list.html';
});

$(document).on('mouseenter','#menu-3', function() {
    $('#menu-3').css('background', '#ffffff');
});
$(document).on('mouseout','#menu-3', function() {
    $('#menu-3').css('background', '');
});


$(document).on('click touchstart','#menu-intro', function() {
	window.location.href = 'introduction_list.html';
});
$(document).on('click touchstart','#menu-doc', function() {
	window.location.href = 'document_list.html';
});

$(document).on('click touchstart','#article-list', function() {
	window.location.href = 'article_list.html';
});

