$(function(){
	//选择彩种类型
	(function(){
		var $alltype = $('header .bottom .leftBtn a');
		var $btns = $('header .bottom .rightSlider li');
		var $ul = $('#content ul');
		var typeArr = ['北京赛车','极速赛车','重庆时时彩','极速时时彩','腾讯分分彩',
		'江苏快三','极速快三','五分彩','三分彩','秒秒彩','','','','','','','',''
		,'','']
		var rateArr = [];
		$alltype.on('click',function(){
			$(this).addClass('active');
			$btns.removeClass('active');
			creatUl(0,20)
		});
		$btns.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$alltype.removeClass('active');
			if ($(this).index() == 0) {
				creatUl(0,2);
			}else if ($(this).index() == 1) {
				creatUl(2,4);
			}else if ($(this).index() == 2) {
				creatUl(4,10);
			}
		});
		//创建ul
		function creatUl (begin,finish) {
			$ul.html('');
			for (var i=begin; i<finish; i++) {
				var li = document.createElement('li');
				li.innerHTML = `
				<a class="shadow" href="./purchaseDetail.html">
					<img src="../img/lotteryType${i+1}.png" alt="">
					<p class="name">${typeArr[i]}</p>
					<p class="howTime">每10分钟开奖</p>
					<p class="deadTime">03:10:00</p>
				</a>
				`
				$ul[0].appendChild(li);
			}
		}
	})();
	//选择全部彩种
	(function(){
		var $btn = $('header .top a');
		$btn.on('click',function(){
			window.location.href = '../html/totalType.html?type=phurchase'
		});
	})();
});