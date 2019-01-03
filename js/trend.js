$(function(){

	/*tab*/
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
});