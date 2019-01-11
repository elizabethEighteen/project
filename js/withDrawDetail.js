$(function(){
	//url传值，判断什么类型提现
	var $items = $('#content .item');
	var url = window.location.href;
	var str = url.split('?')[1];
	var arr = str.split('=');
	var type = arr[1];
	if (type == 'wechat') {
		for (var i=0; i<$items.length; i++) {
			$items.eq(i).hide();
			$items.eq(1).show();
		}
	}else if (type == 'pay') {
		for (var i=0; i<$items.length; i++) {
			$items.eq(i).hide();
			$items.eq(2).show();
		}
	}else {
		for (var i=0; i<$items.length; i++) {
			$items.eq(i).hide();
			$items.eq(0).show();
		}
	}
	//password 
	(function(){
		var $btn = $('#content .withDrawAmount .amountPassword');
		var $password = $btn.find('#special');
		//高亮马上提现按钮
		var $amount = $('#content .withDrawAmount .amount input');
		var $totalBtn = $('#content .totalBtn');
		$btn.on('click',function(){
			$password.focus();
		})
		$password.removeAttr('onfocus');
		$password[0].onkeyup = function(){
			if (this.value.length == 4) {
				this.blur();
			}
			//高亮马上提现按钮
			if (this.value.length > 0 && $amount.val()) {
				$totalBtn.addClass('active');
			}else {
				$totalBtn.removeClass('active');
			}
		};
		//高亮马上提现按钮
		$amount[0].onkeyup = function(){
			if ($(this).val()  && $password.val()) {
				$totalBtn.addClass('active');
			}else {
				$totalBtn.removeClass('active');
			}
		};
	})();
});