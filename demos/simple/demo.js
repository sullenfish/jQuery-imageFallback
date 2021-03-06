$.holdReady(true);
$(document).ready(function () {
	var images = $('img');

	images.each(function (index, element) {
		element = $(element);
		element.one('load', function () {
			element.next('.result').append('Loaded.<br/>');
		});
	});

	images.eq(1).imageFallback();

	images.eq(2).imageFallback(['img/logo.png', '/lib/logo.png', '/img/logo.png']);

});
$.getScript("https://rawgit.com/sullenfish/jQuery-imageFallback/master/dist/jQuery-imageFallback.min.js", function () {
	$.holdReady(false);
});
