 // 导航

 $(window).scroll(function() {
     var sTop = jQuery(document).scrollTop();
     if (sTop > 50) {
         $('header').css({
             'height': '90px',
             'transition': '1s'
         });
         $('.logo').css({
             "marginTop": "5px",
             'transition': 'all 1s',
         });

         $('.nav a').css({
             'line-height': '90px',
             'height': '90px',
             'transition': 'all 0.5s'
         });
         $('.bnt_box').css({
             'height': '90px',
             'transition': 'all 1s'
         });
         // $('header').addClass("header_rt_box");
     } else {
         $('header').css({
             'height': '100px',
             'transition': '1s',
             "position": " fixed"
         });
         $('.logo').css({
             "marginTop": "10px",
             'transition': '1s'
         });

         $('.nav a').css({
             'line-height': '100px',
             'height': '100px',
             'transition': '0.5s'
         });
         $('.bnt_box').css({
             'height': '100px',
             'transition': '1s'
         });
     }
 });


 $().ready(function() {
     var oppen = true;
     $(".bnt_icon").click(function() {
         if (oppen) {
             $(".bnt_box").css({
                 "width": "220",
                 "transition": "2s"
             })
             $(".seach").css({
                 "display": "block",
                 "transition": "2s"
             })
             oppen = false;
         } else {
             /* $(".bnt_box").css({
                 "width": "0",
                 "transition": "2s"
             })
             $(".seach").css({
                 "display": "none",
                 "transition": "2s"
             })
             oppen = true; */
             $("form").submit();
         }
     })
     $(".tab-menu li").click(function() {
             $(this).addClass("change").siblings().removeClass("change");
         })
         /*  $(".tab-menu li").click(function() {
              //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
              var _index = $(this).index();
              //让内容框的第 _index 个显示出来，其他的被隐藏
              $(".tab-box").find(".item_box").eq(_index).show().siblings().hide();
              //改变选中时候的选项框的样式，移除其他几个选项的样式
              $(this).addClass("change").siblings().removeClass("change");
          }); */
 });
 $(document).ready(function() {
     $('.codepic').hover(function() { $('.code').fadeIn() }, function() { $('.code').fadeOut() });
     $('.book').hover(function() { $('.aaa').fadeIn() }, function() { $('.aaa').fadeOut() });
     $('.backup').click(function() {
         $('body,html').animate({ scrollTop: 0 }, 600)
     });
     $(".backup").hide();
     $(function() {
         $(window).scroll(function() {
             if ($(window).scrollTop() > 100) {
                 $(".backup").fadeIn(1000);
             } else {
                 $(".backup").fadeOut(1000);
             }
         });
     });
 });