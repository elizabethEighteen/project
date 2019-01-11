$(function(){
	//
	(function(){
		//代理或者会员
		var $proxy = $('#content .userType .proxy');
		var $member = $('#content .userType .member');
		$proxy.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		$member.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		//启用状态吗
		var $onOff = $('#content .onOff .con');
		$onOff.on('click',function(){
			$(this).toggleClass('active');
		})
	})();
	//dialog
	(function(){
		var $dialog = $('#dialog');
		var $mask = $('#mask');
		var $btn = $('#content .percent .con');
		var $cancel = $('#dialog .cancel');
		var $sure =$('#dialog .sure');
		var $ul = $('#dialog ul');
		//touch event
		createUI();
		var liHeight = $ul.find('li').height();
		var startY = 0;
		var nowY = 0;
		var startTop = 0;
		var dis = 0;
		var tempTop;
		var finishTop;
		var disN = 0;
		var $lis = $ul.find('li');
		
		$btn.on('click',function(){
			$mask.show();
			$dialog.show();
			stopScroll();
		});
		$cancel.on('click',function(){
			$mask.hide();
			$dialog.hide();
			recoverScroll();
		});
		$sure.on('click',function(){
			$mask.hide();
			$dialog.hide();
			recoverScroll();
			$btn.html($lis.eq(-disN+3).html());
		});
		$lis.on('click',function(){
			$btn.html($(this).html());
			$mask.hide();
			$dialog.hide();
		})
		
		$ul[0].addEventListener('touchstart',function(ev){
			var touch = ev.targetTouches[0];
			startY = parseInt(touch.pageY)
			startTop = parseInt($ul.css('top'));
			clearInterval($ul[0].timer);
		});
		$ul[0].addEventListener('touchmove',function(ev){
			var touch = ev.targetTouches[0];
			nowY = parseInt(touch.pageY)
			dis = nowY - startY;
			tempTop = dis + startTop;
			if (tempTop>0) {
				tempTop = 0;
			}else if (tempTop< -($lis.length-4)*liHeight) {
				tempTop = -($lis.length-4)*liHeight;
			}
			
			$ul.css('top',tempTop);
			
		});
		$ul[0].addEventListener('touchend',function(ev){
			finishTop = parseInt($ul.css('top'));
			disN = parseInt(Math.round(finishTop/liHeight));
			console.log(disN);
			$ul.animate({top: disN*liHeight});
		});
		$

		function createUI (){
			for (var i=0; i<50; i++) {
				var li = document.createElement('li');
				li.innerHTML = `1990()+${i}`;
				$ul[0].appendChild(li);
			}
		}

	})();
	//百分比slider
	(function(){
		var l1 = $('#content .slider .leftSection .p1');
		var l2 = $('#content .slider .leftSection .p2');
		var r1 = $('#content .slider .rightSection .p1');
		var r2 = $('#content .slider .rightSection .p2');
		var midWidth = parseInt($('#content .slider .midSection').width());
		var sliderLine = $('#content .slider .midSection .line');
		var sliderBall = $('#content .slider .midSection .ball');
		var span1 = $('#content .percent .con .span1');
		var span2 = $('#content .percent .con .span2');
		var startX = 0;
		var startLeft = 0;
		var nowX = 0;
		var dis = 0;
		var tempLeft =0;
		var percent = 0;
		var dis1 = parseInt(r1.html()) - parseInt(l1.html());
		var dis2 = parseFloat(r2.html()) - parseFloat(l2.html());
		sliderBall[0].addEventListener('touchstart',function(ev){
			var touch = ev.targetTouches[0];
			startLeft = parseInt(sliderBall.css('left'));
			startX = parseInt(touch.pageX);
		});
		sliderBall[0].addEventListener('touchmove',function(ev){
			var touch = ev.targetTouches[0];
			nowX = parseInt(touch.pageX);
			dis = parseInt(nowX - startX);
			tempLeft = startLeft + dis;
			if (tempLeft<0) {
				tempLeft = 0;
			}else if (tempLeft>midWidth) {
				tempLeft = midWidth;
			}
			percent = tempLeft/midWidth;
			// console.log(percent);
			sliderBall.css('left',tempLeft);
			sliderLine.width(tempLeft+sliderBall.width()/2);
			span1.html(parseInt(dis2*10*percent)/10);
			span2.html(parseInt(l1.html())+parseInt(dis1*percent));
		})
	})();
	/*阻止body跟着弹窗移动*/
	function stopScroll() {
	    document.body.addEventListener('touchmove',preventDefaultFn,{passive:false});
	    $('body').css({
	        'overflow': 'hidden'
	    })
	}

	function recoverScroll() {
	    // 隐藏时
	    // $('body').off('touchmove', preventDefaultFn);
	    document.body.removeEventListener('touchmove',preventDefaultFn,{passive:false})
	    $('body').css({
	        'overflow': 'auto'
	    })
	}
	function preventDefaultFn(event) {
	    event.preventDefault();
	}
});