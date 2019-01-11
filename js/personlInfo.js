$(function(){
	var $lis = $('#content li');
	$lis.on('click',function(){
		if ($(this).index() == 0) {
			window.location.href = '../html/settingLoginPassword.html';
		}else if ($(this).index() == 1) {
			window.location.href = '../html/settingMoneyPassword.html';
		}
		else if ($(this).index() == 2) {
			window.location.href = '../html/aboutUs.html';
		}
	})

});