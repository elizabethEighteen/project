$(function(){
	//back
	var $back = $('header .back');
	$back.on('click',function(){
		var url = window.location.href;
		var str = url.split('?')[1];
		var arr = str.split('=');
		var type = arr[1];
		// console.log(type);
		if (type == 'index') {
			window.location.href = '../index.html';
		}else if (type == 'mine') {
			window.location.href = '../html/mine.html';
		}
	});
});