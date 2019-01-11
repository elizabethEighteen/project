$(function(){
	//back
	var $back = $('header .back');
	var url = window.location.href;
	var str = url.split('?')[1];
	var arr = str.split('=');
	var type = arr[1];
	$back.on('click',function(){
		if (type == 'recharge') {
			window.location.href = '../html/rechargeRecord.html';
		}else if (type == 'zhangbian') {
			window.location.href = '../html/withDrawRecord.html';
		}
	});
	//title
	var $mainTitle = $('header .mainTitle');
	if (type == 'recharge') {
		$mainTitle.html('充值记录');
	}else if (type == 'zhangbian') {
		$mainTitle.html('账变记录');
	}
});