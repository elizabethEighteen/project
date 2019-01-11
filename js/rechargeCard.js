$(function(){
	//监听按键抬起高亮显示按钮
	(function(){
		var $inputs = $('#content input');
		var $totalbtn = $('#content .totalbtn');
		$inputs.on ('keyup',function(){
			if ($inputs.eq(0).val() && $inputs.eq(1).val() && $inputs.eq(2).val()
				&& $inputs.eq(3).val() && $inputs.eq(4).val()) {
				$totalbtn.addClass('active');
			}else {
				$totalbtn.removeClass('active');
			}
		}) 
	})();
});