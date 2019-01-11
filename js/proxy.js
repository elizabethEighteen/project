$(function(){
	//
	var $btns = $('#content li');
	$btns.on('click',function(){
		if ($(this).index() == 0) {
			window.location.href = '../html/proxy/proxyIntroduction.html';
		}else if ($(this).index() == 1) {
			window.location.href = '../html/proxy/extendManage.html';
		}else if ($(this).index() == 2) {
			window.location.href = '../html/proxy/proxyCommission.html';
		}else if ($(this).index() == 3) {
			window.location.href = '../html/proxy/proxyCathecticDetail.html';
		}else if ($(this).index() == 4) {
			window.location.href = '../html/proxy/proxyTradeDetail.html';
		}
	});
});