
$(function(){
	//点击提现方式
	(function(){
		var $btns = $('#content li');
		$btns.on('click',function(){
			if ($(this).index() == 0) {
				// window.location.href = '../html/withdrawDetail.html?type=wechat';
				window.location.href = '../html/bindWechat.html';
			}else if ($(this).index() == 1) {
				// window.location.href = '../html/withdrawDetail.html?type=pay';
				window.location.href = '../html/bindPay.html';
			}else {
				// window.location.href = '../html/withdrawDetail.html?type=card';
				window.location.href = '../html/bindCard.html';
			}
		});
	})();
});