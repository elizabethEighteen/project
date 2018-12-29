$(function(){
	/*tab*/
	(function(){
		var $btns = $('#content .tabTitle div')
		var $sections = $('#content .tabContent .item');
		$btns.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$sections.eq($(this).index()).show().siblings().hide();
		})
	})();
});