$(function(){
	var $inputs = $('#content  li input');
	var $btn = $('#content .btn');
	$inputs.on('keyup',function(){
		if ($inputs.eq(0).val() && $inputs.eq(1).val() && $inputs.eq(2).val()) {
			$btn.addClass('active');
		}else {
			$btn.removeClass('active');
		}
	});
});