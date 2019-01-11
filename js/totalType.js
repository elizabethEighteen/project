$(function(){
	//全局变量判断进入购彩还是趋势
	var kind = '';
	var url = window.location.href;
	var str = url.split('?')[1];
	var arr = str.split('=');
	var type = arr[1];
	kind = type;
	//导航栏回退按钮
	(function(){
		var $btn = $('header .back');
		$btn.on('click',function(){
			// var url = window.location.href;
			// var str = url.split('?')[1];
			// var arr = str.split('=');
			// var type = arr[1];
			if (type == 'phurchase') {
				window.location.href = '../html/purchase.html';
			}else if (type == 'trend') {
				window.location.href = '../html/trend.html';
			}
		});
	})();
	//彩种点击事件
	(function(){
			var $btns1 = $('#content .l1 li');
			var $btns2 = $('#content .l2 li')
			var $btns3 = $('#content .l3 li')
			var $lis = $('#content li');
		if (kind == 'phurchase') {
			$btns1.on('click',function(){
				window.location.href = '../html/purchaseDetail.html';
			});
			$btns2.on('click',function(){
				window.location.href = '../html/purchaseDetailTwo.html';
			});
			$btns3.on('click',function(){
				window.location.href = '../html/purchaseDetailThree.html';
			});
		}else if (kind == 'trend') {
			$lis.on('click',function(){
				var $p = $(this).find('p');
				window.location.href = '../html/trend.html';
				localStorage.setItem('trendType',$p.html());
			});
		}
	})();
});