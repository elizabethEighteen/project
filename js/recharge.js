$(function(){
	var $lis = $('#content li');
	$lis.on('click',function(){
		if ($(this).index() == 4) {
			window.location.href = '../html/rechargeCard.html';
		}else {
			window.location.href = '../html/rechargeDetail.html';
		}
		
	})
});