$(function(){
	//高亮显示按钮
	(function(){
		var $idInput = $('#content .idInput');
		var $phoneInput = $('#content .phoneInput');
		var $protocal = $('#content .protocal');
		var $btn = $('#content .totalBtn');
		$idInput.on('keyup',function(){
			if ($idInput.val() && $phoneInput.val() && $protocal.hasClass('active')) {
				$btn.addClass('active');
			}else {
				$btn.removeClass('active');
			}
		});
		$phoneInput.on('keyup',function(){
			if ($idInput.val() && $phoneInput.val() && $protocal.hasClass('active')) {
				$btn.addClass('active');
			}else {
				$btn.removeClass('active');
			}
		});
		$protocal.on('click',function(){
			$(this).toggleClass('active');
			if ($idInput.val() && $phoneInput.val() && $protocal.hasClass('active')) {
				$btn.addClass('active');
			}else {
				$btn.removeClass('active');
			}
		});
	})();
});