$(function(){
	//
	var $btns1 = $('#content .l1 li');
	var $btns2 = $('#content .l2 li')
	var $btns3 = $('#content .l3 li')
	$btns1.on('click',function(){
		window.location.href = '../html/purchaseDetail.html';
	});
	$btns2.on('click',function(){
		window.location.href = '../html/purchaseDetailTwo.html';
	});
	$btns3.on('click',function(){
		window.location.href = '../html/purchaseDetailThree.html';
	});
});