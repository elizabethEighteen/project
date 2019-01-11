$(function(){
	runPercent();
	//登录注册
	(function(){
		var $login = $('header .login');
		var $register = $('header .register');
		$login.on('click',function(){
			window.location.href = '../html/login.html?loginType=mine';

		});
		$register.on('click',function(){
			window.location.href = '../html/register.html?loginType=mine';
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
				window.location.href = '../html/personalForm.html';
			}else if ($(this).index() == 1) {
				window.location.href = '../html/cathecticRecord.html?type=mine';
			}else if ($(this).index() == 2) {
				window.location.href = '../html/proxy.html';
			}else if ($(this).index() == 3) {
				window.location.href = '../html/message.html';
			}
			else if ($(this).index() == 4) {
				// window.location.href = '../html/creditLoad.html';
			}else if ($(this).index() == 5) {
				window.location.href = '../html/withDrawRecord.html';
			}
			else if ($(this).index() == 6) {
				window.location.href = '../html/limitTransform.html';
			}
			else if ($(this).index() == 7) {
				window.location.href = '../html/personalInfo.html';
			}
			else if ($(this).index() == 8) {
				window.location.href = '../html/onlineServe.html';
			}
		})
	})();
	//充值提现
	(function(){
		var $recharge = $('header .recharge');
		var $withDraw = $('header .withDraw')
		var $mask = $('#mask');
		var $moneyAmountDialog = $('#moneyAmountDialog');
		var $close = $moneyAmountDialog.find('.close');
		var isSettingMoneyPassword = false;
		$recharge.on('click',function(){
			window.location.href = '../html/recharge.html';
		});
		$withDraw.on('click',function(){
			if (isSettingMoneyPassword) {
				window.location.href = '../html/withDraw.html';
			}else {
				$mask.show();
				$moneyAmountDialog.show();
			}

		});
		$close.on('click',function(){
			$mask.hide();
			$moneyAmountDialog.hide();
		});
	})();
	function runPercent () {
		var $totalWidth = $('#header2 .m .wrap').width();
		// var $sliderWidth = $('#header2 .m .whiteSlider').width();
		var $num1 = parseInt($('#header2 .b .span1').html());
		var $num2 = parseInt($('#header2 .b .span2').html());
		var percent = $num1/$num2;
		$('#header2 .m .whiteSlider').width($totalWidth*percent);
	}
});