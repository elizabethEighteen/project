$(function(){
	//nav
	(function(){
		var $btns = $('#top1 .nav .item');
		var $uls = $('#content1 ul');
		$btns.on('click',function(){
			$btns.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$uls.eq($(this).index()).show().siblings().hide();
		});
	})();
	//dialog弹窗
	(function(){
		var $lotteryBtn = $('header .changeType');
		var $mask = $('#mask');
		var $lotteryDialog = $('#lotteryTypeDialog');
		var $mainTitle = $('header .mainTitle');

		var $lotteryLis = $lotteryDialog.find('li');
		var isShow = false;
		$lotteryBtn.on('click',function(){
			if (isShow) {
				$mask.hide();
				$lotteryDialog.hide();
				isShow = false;
			}else {
				$mask.show();
				$lotteryDialog.show();
				isShow = true;
			}
		});
		
		$lotteryLis.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$mask.hide();
			$lotteryDialog.hide();
			$mainTitle.html($(this).html()+'<span></span>');
			isShow = false;
		});
	})();
});