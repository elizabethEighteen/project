$(function(){
	//清除
	(function(){
		var $btn = $('footer .p2');
		$btn.on('click',function(){
			clearBalls();
			// console.log(1);
		});
	})();
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
	//投注弹窗
	(function(){
		var $btn = $('footer .cathectic');
		var $mask = $('#mask');
		var $phurchasesDialog = $('#phurchasesDialog');
		var $close = $phurchasesDialog.find('.close');
		var $null = $phurchasesDialog.find('.null');
		var $blank = $phurchasesDialog.find('.blank');
		var $sure = $phurchasesDialog.find('.sure');
		$btn.on('click',function(){
			$mask.show();
			$phurchasesDialog.show();
		});
		$close.on('click',function(){
			$mask.hide()
			$phurchasesDialog.hide();
		});
		$null.on('click',function(){
			$mask.hide()
			$phurchasesDialog.hide();
		});
		$blank.on('click',function(){
			$mask.hide()
			$phurchasesDialog.hide();
		});
		$sure.on('click',function(){
			$mask.hide()
			$phurchasesDialog.hide();
		});
	})();
	//选彩票
	(function(){
		//数字盘
		var $oneBalls = $('#content1 .ul1 .balls .item');
		var $fastChoose = $('#content1 .ul1 .btns .item')
		$oneBalls.on('click',function(){
			$(this).toggleClass('active');
		})
		$fastChoose.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			if ($(this).index() == 0) {
				$(this).parents('li').find('.balls .itme').addClass('active');
			}else if ($(this).index() == 1) {
				$(this).parents('li').find('.balls .itme').removeClass('active');
				for (var i=5; i<10; i++) {
					$(this).parents('li').find('.balls .itme').eq(i).addClass('active');
				}
			}else if ($(this).index() == 2) {
				$(this).parents('li').find('.balls .itme').removeClass('active');
				for (var i=0; i<5; i++) {
					$(this).parents('li').find('.balls .itme').eq(i).addClass('active');
				}
			}else if ($(this).index() == 3) {
				$(this).parents('li').find('.balls .itme').removeClass('active');
				for (var i=0; i<9; i+=2) {
					$(this).parents('li').find('.balls .itme').eq(i).addClass('active');
				}
			}
			else if ($(this).index() == 4) {
				$(this).parents('li').find('.balls .itme').removeClass('active');
				for (var i=1; i<10; i+=2) {
					$(this).parents('li').find('.balls .itme').eq(i).addClass('active');
				}
			}else {
				$(this).parents('li').find('.balls .itme').removeClass('active');
			}
		});
		//双面盘
		var $oneBalls = $('#content1 .ul2 .balls .item');
		$oneBalls.on('click',function(){
			$(this).toggleClass('active');
		})
		//冠军和值
		var $oneBalls = $('#content1 .ul3 .balls .item');
		$oneBalls.on('click',function(){
			$(this).toggleClass('active');
		})
	})();
	function clearBalls (){
		var $balls = $('#content1 li .balls .item');

		for (var i = 0; i<$balls.length; i++) {
			// console.log(i);
			$balls.eq(i).removeClass('active');
		}
	}
});