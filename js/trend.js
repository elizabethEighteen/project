$(function(){
	//从全部彩种跳转过来
	var $mainTitle = $('header .lotteryType');
	var totalType = localStorage.getItem('trendType');
	if (totalType) {
		$mainTitle.html(totalType+'<span></span>')
	}else {
		$mainTitle.html('北京赛车<span></span>')
	}
	colorballs();
	//基本走势
	(function(){
		var $kinds = $('#content .tabContent .five .kinds');
		var $items = $kinds.find('span');
		var startX = 0;
		var startLeft = 0;
		var nowX =0;
		var dis = 0;
		var temp = 0;
		var wrapWidth = $(window).width();
		// console.log(wrapWidth);
		var kindsWidth = $kinds.width();
		$items.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		$kinds[0].addEventListener('touchstart',function(ev) {
			var touch = ev.targetTouches[0];
			startLeft = parseInt($kinds.css('left'));
			startX = parseInt(touch.pageX);
		});
		$kinds[0].addEventListener('touchmove',function(ev) {
			var touch = ev.targetTouches[0];
			nowX = parseInt(touch.pageX);
			dis = nowX - startX;
			temp = startLeft + dis;
			// console.log(kindsWidth);
			if (temp>0) {
				temp = 0;
			}
			if (temp<(wrapWidth- kindsWidth)) {
				temp = (wrapWidth- kindsWidth);
			}
			$kinds.css('left',temp);
		})
	})();
	//号码分布
	(function(){
		var $btns1 = $('#content .tabContent .four .tabNumber span');
		var $btns2 = $('#content .tabContent .four .kinds span');
		var $balls = $('#content .tabContent .four .balls');
		var chooseNumber1 = 0;
		var isFirst = true;
		var isTwo = false;
		$btns1.on('click',function(){
			if (isTwo) {
				for (var i=0; i<$balls.length; i++) {
					var $spans = $balls.eq(i);
					for (var j=0; j<10; j++) {
						$spans.find('span').addClass('mask');
					}
				}
			}
			isTwo = false;
			if (isFirst) {
				for (var i=0; i<$balls.length; i++) {
					var $spans = $balls.eq(i);
					for (var j=0; j<10; j++) {
						$spans.find('span').addClass('mask');
					}
				}
				isFirst = false;
			}
			$btns2.removeClass('active');
			chooseNumber1 = $(this).index()+1;
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				run1(chooseNumber1);
			}else {
				unrun1(chooseNumber1);
			}
		});
		$btns2.on('click',function(){
			isTwo = true;
			$(this).addClass('active').siblings().removeClass('active');
			$btns1.removeClass('active');
			for (var i=0; i<$balls.length; i++) {
				var $spans = $balls.eq(i);
				for (var j=0; j<10; j++) {
					$spans.find('span').addClass('mask');
				}
			}
			if ($(this).index() == 0) {
				run1(1);
				run1(3);
				run1(5);
				run1(7);
				run1(9);
			}else if  ($(this).index() == 1) {
				run1(2);
				run1(4);
				run1(6);
				run1(8);
				run1(10);
			}else if  ($(this).index() == 2) {
				run1(6);
				run1(7);
				run1(8);
				run1(9);
				run1(10);
			}else if  ($(this).index() == 3) {
				run1(1);
				run1(2);
				run1(3);
				run1(4);
				run1(5);
			}
		});
		function run1 (num1) {
			
			for (var i=0; i<$balls.length; i++) {
				var $spans = $balls.eq(i);
				for (var j=0; j<10; j++) {
					var n = $spans.find('span').eq(j).html();
					n = parseInt(n);
					if (n == num1) {
						$spans.find('span').eq(j).removeClass('mask');
					}
				}
			}
		}
		function unrun1 (num1) {
			for (var i=0; i<$balls.length; i++) {
				var $spans = $balls.eq(i);
				for (var j=0; j<10; j++) {
					var n = $spans.find('span').eq(j).html();
					n = parseInt(n);
					if (n == num1) {
						$spans.find('span').eq(j).addClass('mask');
					}
				}
			}
		}
	})();
	/*tab第一个nav*/
	(function(){
		var $btns = $('#content .tabTitle div')
		var $sections = $('#content .tabContent .item');
		$btns.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$sections.eq($(this).index()).show().siblings().hide();
			if ($(this).index() == 4) {
				canvasRun();
			}
		})
	})();
	//开奖号码第二个nav
	(function(){
		var $btns = $('#content .tabContent .one .navTitle .itemTwo');
		var $uls = $('#content .tabContent .one .conWrap ul')
		$btns.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$uls.eq($(this).index()-2).show().siblings().hide();
		});
	})();
	//canvas
	function canvasRun (){
		var c1 = document.getElementById('c1');
		var t1 = document.getElementById('t1');
		var $trs = $('#t1 tbody tr');
		var $tbody = $('#t1 tbody');
		var $tdWidth = $trs.find('td').outerWidth();
		// alert($tdWidth);
		var $tdHeight = $trs.outerHeight(true);
		// var tdHeight = 
		var arr = [];
		var x = 0;
		var y = 0;
		var x1 = 0;
		var y1 = 0;

		//画布大小
		c1.width = $tbody.width()*0.8;
		c1.height = $tbody.height();
		for (var i=0; i<$trs.length; i++) {
			var $tds = $trs.eq(i).find('td');
			for ( var j=0; j<10; j++) {
				if ($tds.eq(j).hasClass('active')) {
					// console.log($tds.eq(j).index());
					arr.push($tds.eq(j).index());
				}
			} 
		}		
		// console.log(arr);
		// console.log($tdWidth,$tdHeight);
		var cxt = c1.getContext('2d');
		cxt.strokeStyle = 'rgb(236,0,34)';
		cxt.lineWidth = 2;
		for (var i=0; i<(arr.length-1); i++) {
			//加3
			x = (arr[i]-0.5)*($tdWidth);
			y = (i+0.5)*($tdHeight+0.2);
			x1 = (arr[i+1]-0.5)*($tdWidth);
			y1 = (i+1.5)*($tdHeight+0.2);
			
			cxt.moveTo(x,y);
			cxt.lineTo(x1,y1);
			cxt.stroke();
		}
	}
	//给十个球加底色等等
	function colorballs () {
		var colorArr = ['#fbdf43','#3582ff','#4d4e46','#f2772c',
		'#97fbfe','#5707ff','#e3e3e3','#fd2b21','#731402','#54c11f'];
		//号码分布
		var $ballArr = $('#content .tabContent .four .balls');
		for (var i=0; i<$ballArr.length; i++) {
			for (var j=0; j<10; j++) {
				var n = $ballArr.eq(i).find('span').eq(j).html();
				n = parseInt(n);
				$ballArr.eq(i).find('span').eq(j).css('backgroundColor',colorArr[n-1]);
			}
		}
		//号码
		var $ballArr1 = $('#content .tabContent .conWrap .ul11 .balls');
		for (var i=0; i<$ballArr1.length; i++) {
			for (var j=0; j<10; j++) {
				var n = $ballArr1.eq(i).find('span').eq(j).html();
				n = parseInt(n);
				$ballArr1.eq(i).find('span').eq(j).css('backgroundColor',colorArr[n-1]);
				
			}
		}
		//大小
		var $ballArr2 = $('#content .tabContent .conWrap .ul12 .balls');
		for (var i=0; i<$ballArr2.length; i++) {
			for (var j=0; j<10; j++) {
				var n = $ballArr2.eq(i).find('span').eq(j).html();
				if (n == '大') {
					$ballArr2.eq(i).find('span').eq(j).addClass('active');
				}else {
					$ballArr2.eq(i).find('span').eq(j).removeClass('active');
				}
				
			}
		}
		//单双
		var $ballArr3 = $('#content .tabContent .conWrap .ul13 .balls');
		for (var i=0; i<$ballArr3.length; i++) {
			for (var j=0; j<10; j++) {
				var n = $ballArr3.eq(i).find('span').eq(j).html();
				if (n == '双') {
					$ballArr3.eq(i).find('span').eq(j).addClass('active');
				}else {
					$ballArr3.eq(i).find('span').eq(j).removeClass('active');
				}
				
			}
		}
		//冠军龙虎
		var $ballArr4 = $('#content .tabContent .conWrap .ul14 .balls');
		for (var i=0; i<$ballArr4.length; i++) {
			for (var j=0; j<10; j++) {
				var n = $ballArr4.eq(i).find('span').eq(j).html();
				if (n == '龙') {
					$ballArr4.eq(i).find('span').eq(j).addClass('yellow');
				}else if (n == '虎') {
					$ballArr4.eq(i).find('span').eq(j).addClass('grey');
				}
				
			}
		}
	}
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
		var $btn = $('header .date');
		var $dialog = $('#dateDialog');
		var $mask = $('#mask');
		var $sure = $('#dateDialog .sure')
		var $cancel = $('#dateDialog .cancel');
		var tempMonth = month;
		var tempDay = day;
		var tempYear = year;
		//页面显示时间
		// $btn.html(`${realYear}-${month}-${day}`);
		//
		$btn.on('click',function(){
			$mask.show();
			$dialog.show();
			var a = getCalcDays($(this).html());
			createUi(a);
	
			checkAll(`${realYear}-${tempMonth}-${tempDay}`);
			
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
			// console.log(tempMonth);
			$btn.html(`${tempMonth}月${tempDay}日<span></span>`);
			
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
	//切换彩种
	(function(){
		var $btn = $('header .lotteryType');
		$btn.on('click',function(){
			window.location.href = '../html/totalType.html?type=trend';
		})
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