$(function(){
	var $change = $('#content .change');
	var $detail = $('#content .detail');
	var $mask = $('#mask');
	var $detaildialog = $('#detail');
	var $delete = $detaildialog.find('.delete');
	var $close = $detaildialog.find('.close');
	$change.on('click',function(){
		window.location.href = '../proxy/newQR.html';
	});
	$detail.on('click',function(){
		$mask.show();
		$detaildialog.show();
	});
	$delete.on('click',function(){
		$mask.hide();
		$detaildialog.hide();
	})
	$close.on('click',function(){
		$mask.hide();
		$detaildialog.hide();
	})
});