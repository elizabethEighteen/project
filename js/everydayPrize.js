$(function(){
	//登录
	(function(){
		var $btns = $('#content .item .hideSection .goLogin');
		$btns.on('click',function(){
			window.location.href = '../html/login.html?type=prize'
		});
	})();
	//点击查看详情
	(function(){
		var $btns = $('#content .item .titleSection .rightSection');
		// console.log($btns.length);
		var $hideSections = $('#content .item .hideSection')
		$btns.on('click',function(){
			// console.log($(this).parents('.item').index());
			$hideSections.eq($(this).parents('.item').index()).toggle();
		});
	})();
	//弹窗
	(function(){
		var $dialog = $('#dialog');
		var $close = $('#dialog .close');
		var $mask = $('#mask');
		$close.on('click',function(){
			$mask.hide();
			$dialog.hide();
		})
	})();
});