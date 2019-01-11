$(function(){
	colorballs();
	//再来一注
	var $oneMoreTime = $('#oneMoretime');
	$oneMoreTime.on('click',function(){
		window.location.href = '../html/purchaseDetail.html';
	});

	function colorballs () {
		var colorArr = ['#fbdf43','#3582ff','#4d4e46','#f2772c',
		'#97fbfe','#5707ff','#e3e3e3','#fd2b21','#731402','#54c11f'];
		//号码分布
		var $balls = $('#content .four .balls');
		
		for (var j=0; j<10; j++) {
			var n = $balls.find('span').eq(j).html();
			n = parseInt(n);
			// console.log(n);
			$balls.find('span').eq(j).css('backgroundColor',colorArr[n-1]);
			
		}
	
	}
});
