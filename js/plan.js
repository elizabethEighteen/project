$(function(){
	//active加中字
	(function(){
		var $trs = $('#content tbody tr');
		for (var i=0; i<$trs.length; i++) {
			var $tds = $trs.eq(i).find('td');
			for (var j=0; j<$tds.length; j++) {
				if ($tds.eq(j).hasClass('active')) {
					$tds.eq(j).append($('<span>中</span>'));
					// console.log(j);
				}
			}
		}
	})();
	//dialog弹窗
	(function(){
		var $lotteryBtn = $('header .mainTitle');
		var $typeBtn = $('header .changeType');
		var $mask = $('#mask');
		var $lotteryDialog = $('#lotteryTypeDialog');
		var $typeDialog = $('#typeDialog');

		var $lotteryLis = $lotteryDialog.find('li');
		var $typeLis = $typeDialog.find('li');
		var isShow = false;
		$lotteryBtn.on('click',function(){
			$typeDialog.hide();
			if (isShow) {
				$mask.hide();
				$lotteryDialog.hide();
				isShow = !isShow;
			}else {
				$mask.show();
				$lotteryDialog.show();
				isShow = !isShow;
			}
		});
		$typeBtn.on('click',function(){
			$mask.hide();
			$lotteryDialog.hide();
			$typeDialog.toggle();
		});
		$lotteryLis.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$mask.hide();
			$lotteryDialog.hide();
			$lotteryBtn.html($(this).html()+'<span></span>');
		});
		$typeLis.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$typeDialog.hide();
			$typeBtn.html($(this).html()+'<span></span>');
		});
	})();
});