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
		}else if (type == 'login') {
			window.location.href = '../html/login.html?type=index';
		}
	});
	
	//接受协议以及高亮显示注册按钮
	(function(){
		var $inputs = $('#content input');
		var $protocal = $('#content .protocal');
		var $registerBtn = $('#content .btn');
		$protocal.on('click',function(){
			$(this).toggleClass('active');
			if ($(this).hasClass('active') && checkFullValue() ) {
				$registerBtn.addClass('active');
			}else {
				$registerBtn.removeClass('active');
			}
		});
		$inputs.on('keyup',function(){
			if ($protocal.hasClass('active') && checkFullValue() ) {
				$registerBtn.addClass('active');
			}else {
				$registerBtn.removeClass('active');
			}
		})
		function checkFullValue () {
			if ($inputs.eq(0).val() &&$inputs.eq(1).val() &&
			$inputs.eq(2).val() &&$inputs.eq(3).val() &&$inputs.eq(4).val() ) {
				return true;
			}else {
				return false;
			}
		}
	})();
});