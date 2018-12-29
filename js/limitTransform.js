$(function(){
	//nav
	(function(){
		var $btns = $('#nav div');
		var $sections = $('#content .section')

		$btns.on('click',function(){
			$btns.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$sections.eq($(this).index()).show().siblings().hide();
		});
	})();
});