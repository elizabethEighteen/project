$(function(){
	//back
	var $back = $('header .back');
	$back.on('click',function(){
		var url = window.location.href;
		var str = url.split('?')[1];
		var arr = str.split('=');
		var type = arr[1];
		if (type == 'index') {
			window.location.href = '../index.html';
		}else if (type == 'mine') {
			window.location.href = '../html/mine.html';
		}else if (type == 'prize') {
			window.location.href = '../html/everdayPrize.html';
		}
	});
	//快速注册
	(function(){
		var $btn = $('#content .bot .one');
		$btn.on('click',function(){
			window.location.href = '../html/register.html?type=login'
		});
	})();
	//记住密码
	(function(){
		var $btn = $('#content .remember');
		$btn.on('click',function(){
			$btn.toggleClass('active');
		})
	})();
	//监听按键抬起高亮显示登录按钮
	(function(){
		var $userBtn = $('#content .userName');
		var $passWord = $('#content .passWord');
		var $loginBtn = $('#content .btn');
		$userBtn[0].onkeyup = function(){
			if ($userBtn.val() && $passWord.val()) {
				$loginBtn.addClass('active');
			}else {
				$loginBtn.removeClass('active');
			}
		}
		$passWord[0].onkeyup = function(){
			if ($userBtn.val() && $passWord.val()) {
				$loginBtn.addClass('active');
			}else {
				$loginBtn.removeClass('active');
			}
		}
	})();
});