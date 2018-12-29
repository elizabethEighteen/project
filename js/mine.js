$(function(){
	//登录注册
	(function(){
		var $login = $('header .login');
		var $register = $('header .register');
		$login.on('click',function(){
			window.location.href = '../html/login.html';

		});
		$login.on('click',function(){
			window.location.href = '../html/register.html';
		});

	})();
	//dialog
	(function(){
		var $mask = $('#mask');
		var $dialog = $('#dialog');
		var $cancel = $('#dialog .cancel');
		var $sure = $('#dialog .sure');
		$cancel.on('click',function(){
			$mask.hide();
			$dialog.hide();
		});
		$sure.on('click',function(){
			window.location.href = '../html/login.html';
		});
	})();
	//按钮些
	(function(){
		var $btns = $('#content li');
		$btns.on('click',function(){
			if ($(this).index() == 0) {
				window.location.href = '../html/cathecticRecord.html';
			}else if ($(this).index() == 1) {
				window.location.href = '../html/accountRecord.html';
			}else if ($(this).index() == 2) {
				window.location.href = '../html/rechargeRecord.html';
			}else if ($(this).index() == 3) {
				window.location.href = '../html/withDrawRecord.html';
			}
			else if ($(this).index() == 4) {
				window.location.href = '../html/personalForm.html';
			}else if ($(this).index() == 5) {
				window.location.href = '../html/message.html';
			}
			else if ($(this).index() == 6) {
				window.location.href = '../html/limitTransform.html';
			}
			else if ($(this).index() == 7) {
				window.location.href = '../html/onlineServe.html';
			}
			else if ($(this).index() == 8) {
				window.location.href = '../html/personalInfo.html';
			}
		})
	})();
	//充值提现
	(function(){
		var $recharge = $('header .recharge');
		var $withDraw = $('header .withDraw')
		$recharge.on('click',function(){
			window.location.href = '../html/recharge.html';
		});
		$withDraw.on('click',function(){
			window.location.href = '../html/withDraw.html';
		});
	})();
});