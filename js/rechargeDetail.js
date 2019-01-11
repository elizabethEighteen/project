$(function(){
	//监听按键抬起高亮显示按钮
	(function(){
		var $input1 = $('#content .input1');
		var $input2 = $('#content .input2');
		var $totalbtn = $('#content .totalbtn');
		$input1[0].onkeyup = function(){
			if ($input1.val() && $input2.val()) {
				$totalbtn.addClass('active');
			}else {
				$totalbtn.removeClass('active');
			}
		}
		$input2[0].onkeyup = function(){
			if ($input1.val() && $input2.val()) {
				$totalbtn.addClass('active');
			}else {
				$totalbtn.removeClass('active');
			}
		}
	})();
});