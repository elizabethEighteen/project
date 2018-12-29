$(function(){
	//password 
	(function(){
		var $btn = $('#content .withDrawAmount .amountPassword');
		var $password = $btn.find('#special')
		$btn.on('click',function(){
			$password.focus();
		})
		$password.removeAttr('onfocus');
		$password[0].onkeyup = function(){
			if (this.value.length == 4) {
				this.blur();
			}
		};
	})();
});