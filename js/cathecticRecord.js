$(function(){
	//选择时间
	(function(){
		var date = new Date();
		var year = date.getYear()+1890;
		var realYear = date.getYear()+1900;
		var month = date.getMonth()+1;
		var day  = date.getDate();
		// console.log(month,year,day);
		var $year = $('#dateDialog .year').find('ul');
		var $month = $('#dateDialog .month').find('ul');
		var $day = $('#dateDialog .day').find('ul');
		var $btn = $('#content .start');
		var $btn2 = $('#content .finish');
		var $dialog = $('#dateDialog');
		var $mask = $('#mask');
		var $sure = $('#dateDialog .sure')
		var $cancel = $('#dateDialog .cancel');
		var tempMonth = month;
		var tempDay = day;
		var tempYear = realYear;
		var isStart = false;
		var startFirst = true;
		var finishFirst = true;
		//重选按钮
		var $refreshBtn = $('#content .reStart');
		$refreshBtn.on('click',function(){
			$btn.html('开始时间');
			$btn2.html('结束时间');
			startFirst = true;
			finishFirst = true;
		})
		//页面显示时间
		// $btn.html(`${realYear}-${month}-${day}`);
		// $btn2.html(`${realYear}-${month}-${day}`);
		//
		$btn.on('click',function(){
			isStart = true;
			$mask.show();
			$dialog.show();
			var a = getCalcDays($(this).html());
			createUi(a);
			if (startFirst) {
				checkAll(`${realYear}-${tempMonth}-${tempDay}`);
				startFirst = false;
			}else {
				checkAll($(this).html());
			}
			stopScroll();
		});
		$btn2.on('click',function(){
			isStart = false;
			$mask.show();
			$dialog.show();
			var a = getCalcDays($(this).html());
			createUi(a);
			if (finishFirst) {
				checkAll(`${realYear}-${tempMonth}-${tempDay}`);
				finishFirst = false;
			}else {
				checkAll($(this).html());
			}
			stopScroll();
		});
		$cancel.on('click',function(){
			$dialog.hide();
			$mask.hide();
			recoverScroll();
		});
		$sure.on('click',function(){
			// var month = parseInt()
			$dialog.hide();
			$mask.hide();                                                                                                                                                                         
			if (isStart) {
				$btn.html(`${tempYear}-${tempMonth}-${tempDay}`);
			}else {
				$btn2.html(`${tempYear}-${tempMonth}-${tempDay}`)
			}
			
			recoverScroll();
		});
		//判断这个月多少天
		function getCalcDays (string){
			// var Cdate = new Date();
			var arr = string.split('-');
			var Cyear = arr[0];
			var Cmonth = arr[1];
			var isLeap = isLeapYear(Cyear);
			var isBig = isBigMonth(Cmonth);
			if (isBig) {
				return 31;
			}else  {
				if ( Cmonth == 2) {
					return isLeap? 29:28;
				}else {
					return 30;
				}
			}


			function isLeapYear(year) {
			    var cond1 = year % 4 == 0;  //条件1：年份必须要能被4整除
			    var cond2 = year % 100 != 0;  //条件2：年份不能是整百数
			    var cond3 = year % 400 ==0;  //条件3：年份是400的倍数
			    //当条件1和条件2同时成立时，就肯定是闰年，所以条件1和条件2之间为“与”的关系。
			    //如果条件1和条件2不能同时成立，但如果条件3能成立，则仍然是闰年。所以条件3与前2项为“或”的关系。
			    //所以得出判断闰年的表达式：
			    var cond = cond1 && cond2 || cond3;
			    if(cond) {
			        return true;
			    } else {		
			        return false;
			    }
			}
			function isBigMonth (month){
				if (month == 1 || month == 3 || month == 5
					|| month == 7  || month == 8 || month == 10
					|| month == 12) {
					return true;
				}else {
					return false;
				}
			}
		}

		function createUi (num) {
			$year.html('');
			$month.html('');
			$day.html('');
			for (var i=0; i<10; i++) {
				var li = document.createElement('li');
				li.innerHTML = `${year+i+1}年`;
				$year[0].appendChild(li);
			
			}
			for (var i=0; i<12; i++) {
				var li = document.createElement('li');
				li.innerHTML = `${i+1}月`;
				$month[0].appendChild(li);
				
			}
			for (var i=0; i<num; i++) {
				var li = document.createElement('li');
				li.innerHTML = `${i+1}日`;
				$day[0].appendChild(li);
				
			}
		}
		//校准时间
		function checkAll (string) {
			var arr = string.split('-');
			tempYear = arr[0];
			tempMonth = arr[1];
			tempDay = arr[2];
			// console.log(arr);
			var liHeight = $year.find('li').height();
			$year.css('top',-(tempYear-year-2)*liHeight);
			$month.css('top',-(tempMonth-2)*liHeight);
			$day.css('top',-(tempDay-2)*liHeight);
			//调整时间
			check($year,8);
			check($month,10);
			check($day,29);
		}

		function check (el,num) {
			var x,endx;
			var nowtop = parseInt(el.css('top'));
			var liHeight = $year.find('li').height();
			el[0].addEventListener('touchstart',function(ev){
				var touch = ev.targetTouches[0];
				 x = parseInt(touch.pageY);
				 nowtop = parseInt(el.css('top'));
				clearInterval($year[0].timer);
				clearInterval($month[0].timer);
				clearInterval($day[0].timer);
				
			});
			el[0].addEventListener('touchmove',function(ev){
				var touch = ev.targetTouches[0];
				endx = parseInt(touch.pageY);				
				var disx = endx - x;
				var temp = disx+nowtop;
				// console.log(temp);


				if (temp > liHeight) {
					temp = liHeight;
				}else {
					temp = temp<-num*liHeight? -num*liHeight: temp;
				}

				el.css('top',temp);
			});
			el[0].addEventListener('touchend',function(){
				nowtop = parseInt(el.css('top'));
				var temp = Math.round(nowtop/liHeight);
				el.animate({top: temp*liHeight});
				if (num == 10) {
					tempMonth = Math.abs(temp)+2;
					// console.log(1);
					var str = `${tempYear}-${tempMonth}-${tempDay}`
					var a = getCalcDays(str);
					createUi(a);
				}
				if (num == 29) {
					tempDay = Math.abs(temp)+2;
				}
				if (num == 8) {
					tempYear = Math.abs(temp)+2+year;
					var str = `${tempYear}-${tempMonth}-${tempDay}`
					var a = getCalcDays(str);
					createUi(a);
				}
			})
		}

	})();
	//dialog弹窗
	(function(){
		var $lotteryBtn = $('header .free');
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
			$lotteryBtn.html($(this).html()+'<span></span>');
			isShow = false;
		});
	})();
	//navBtn 
	(function(){
		var $btns = $('#content .types .item');
		$btns.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
	})();
	//back
	(function(){
		var $btn = $('header .back');
		$btn.on('click',function(){
			var url = window.location.href;
			var str = url.split('?')[1];
			var arr = str.split('=');
			var type = arr[1];
			if (type == 'mine') {
				window.location.href = '../html/mine.html';
			}
		})
	})();
	//点击每条记录
	(function(){
		var $lis = $('#content li');
		$lis.on('click',function(){
			window.location.href = '../html/cathecticDtail.html';
		});
	})();

	/*阻止body跟着弹窗移动*/
	function stopScroll() {
    // 弹出时
	    // $('body').on('touchmove', preventDefaultFn,{passive:false});

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