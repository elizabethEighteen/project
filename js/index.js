$(function(){
	(function() {
         setRem();
         window.addEventListener('orientation' in window ? "deviceorientation":"resize",setRem);
         function setRem(){
            var html = document.documentElement;
            var htmlWidth = html.getBoundingClientRect().width;
            html.style.fontSize = htmlWidth / 15 + "px";
         }
	})();
	//热门彩票
   (function(){
      var $btns = $('#content .lotteryCon li');
      $btns.on('click',function(){
         window.location.href = './html/purchaseDetail.html';
      });
   })();
   //轮播图
   (function () {
      var iNow = 0;
      var timmer;
      var $oUl = $('#content .banner ul');
      var $con = $oUl.html();
      var liWidth = $oUl.find('li').width()
      var liNum = $oUl.find('li').length;

      $oUl.html($con+$con);
      $oUl.width($oUl.find('li').length*liWidth +20);
      function move () {
         iNow ++;
         if (iNow == liNum*2) {
            $oUl.css('left',0);
            iNow = 0;
         }
         $oUl.animate({left:-iNow*liWidth});
      }
      timmer = setInterval(move,2000);
   })();
   //跑马灯
   (function(){
      var $p = $('#content .slider .scriptCon');
      var $midWrap = $('#content .slider .midWrap');
      var $pWidth = $p.outerWidth();
      var length = $p.html().length;
      var timmer = null;
      var inow = 0;
      //设置p宽度
      $pWidth = (length+1)*14;
      $p.width($pWidth);
      // console.log($pWidth);
      // console.log($p.html().length);
      function move (){
         inow++;
         if (inow > $pWidth) {

            inow = -$midWrap.width();
         }
         $p.css('left',-(inow));
      }
      timmer = setInterval(move,30);
   })();
   //中奖榜
   (function(){
      var $ul = $('#content .prize ul');
      var $lis = $ul.find('li');
      var $ulHeight = $ul.height();
      var inow = 0;
      var timmer = null;
      function move (){
         inow ++;
         if (inow> ($ulHeight-$lis.height()*6)) {
            inow = 0;
         }
         $ul.css('top',-inow);
      }
      timmer = setInterval(move,30);

   })();
   //登录注册
   (function(){
      var $login = $('header .login');
      var $register = $('header .register');
      $login.on('click',function(){
        window.location.href = './html/login.html?loginType=index';
      });
      $register.on('click',function(){
         window.location.href = './html/register.html?loginType=index';
      })
   })();
   //dialog
   (function(){
      var $mask = $('#mask');
      var $dialog = $('#dialog');
      var $liTitle =  $('#dialog .lititle');
      var $licon = $('#dialog .licon');
      var $close = $('#dialog .close');
      $close.on('click',function(){
         $mask.hide();
         $dialog.hide();
      });
      $liTitle.on('click',function(){
         // $(this).toggleClass('active');
         // $(this).siblings('.licon').hide();
         $(this).next().toggle();
      })
   })();
});