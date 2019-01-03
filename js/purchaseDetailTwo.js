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
});