"use strict";

$(function () {
  // 使用IE浏览器提示
  function hiUpgrade() {
    window.AESKey = ''; // 判断浏览器是否支持placeholder属性

    function isSupportPlaceholder() {
      var input = document.createElement('input');
      return 'placeholder' in input;
    }

    ; //判断是否是IE浏览器，包括Edge浏览器

    function IEVersion() {
      //取得浏览器的userAgent字符串
      var userAgent = navigator.userAgent; //判断是否IE浏览器

      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;

      if (isIE) {
        // ie10及以下
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);

        if (fIEVersion <= 10 || !isSupportPlaceholder()) {
          return true;
        }
      } else if (!!window.ActiveXObject || "ActiveXObject" in window) {
        // ie11
        return true;
      } else {
        return false;
      }
    }

    var tpl = '<div id="hi-upgrade"><div class="hi-wrap"><p class="hi-title">无法正常浏览本网站！</p><div class="hi-close">继续浏览</div><div class="hi-text1"><p>1、您的浏览器版本过低，请升级您的浏览器。</p><p>2、如果您的浏览器是最新版本，请<span>切换到极速模式</span>访问。</p><p>3、您使用的是IE浏览器，请<span>使用主流浏览器</span>访问。</p></div><p class="hi-text2"><span>主流浏览器下载</span></p><ul class="hi-list"><li><a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank"><div class="hi-ico1"></div><p>谷歌浏览器</p></a></li><li><a href="http://www.firefox.com.cn/download/" target="_blank"><div class="hi-ico2"></div><p>火狐浏览器</p></a></li><li><a href="https://www.uc.cn" target="_blank"><div class="hi-ico3"></div><p>UC浏览器</p></a></li><li><a href="http://browser.360.cn" target="_blank"><div class="hi-ico4"></div><p>360浏览器</p></a></li><li><a href="https://browser.qq.com" target="_blank"><div class="hi-ico5"></div><p>QQ浏览器</p></a></li><li><a href="https://ie.sogou.com" target="_blank"><div class="hi-ico6"></div><p>搜狗浏览器</p></a></li></ul></div></div>';

    if (IEVersion()) {
      document.write(tpl);
    }
  }

  hiUpgrade(); // 窗口发生改变刷新页面
  // var windoWidth = $(window).width();
  // $(window).resize(function () {
  //     if (Math.abs($(this).width() - windoWidth) > 20) {
  //         window.location.href = "";
  //     }
  // });
  // 导航

  function headNav() {
    // pc
    if ($(".header-pc").length) {
      // 触发白底
      // $("#header").mouseover(function () {
      //     $(this).addClass("active");
      //     console.log("111")
      // }).mouseleave(function () {
      //     $(this).removeClass("active");
      //     console.log("222")
      // })
      // 二级显示
      $(".header-pc .nav dl").mouseover(function () {
        // var i = $(this).index();
        $(".header-pc .nav dd").stop().slideUp(300);
        $(this).find("dd").stop().slideDown(300);
      });
      $(".header-pc .header-wrap .nav").mouseleave(function () {
        $(".header-pc .nav dd").stop().slideUp(300);
      }); // 滑块

      var $nav_bor = $(".header .nav .bor");
      var $nav_a = $(".nav dl");
      var $on_a = $('.nav dt a.active');

      if ($on_a.length) {
        $nav_bor.css({
          'width': $on_a.parents("dl").width() + 'px',
          'left': $on_a.parents("dl").position().left
        });
        $nav_a.mouseover(function () {
          $nav_bor.stop().animate({
            'width': $(this).innerWidth() + 'px',
            'left': $(this).position().left
          });
        });
        $(".nav").mouseleave(function () {
          // console.log($on_a.p)
          $nav_bor.stop().animate({
            'width': $on_a.parents("dl").width() + 'px',
            'left': $on_a.parents("dl").position().left
          });
        });
      }
    } // 返回顶部


    if ($(".backToTopBtn").length) {
      var btnTop = document.getElementById('backToTopBtn');
      btnTop.addEventListener('click', function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    } // 手机


    if ($(".m_header_box").length) {
      var mHeaderBox = function mHeaderBox() {
        var c = "active";
        var mHeader = $('#mHeader'),
            title = mHeader.children('#mHeaderTitle'),
            btn = title.find('#menuBtn'),
            body = mHeader.children('#mHeaderBody'),
            nav = body.find('#menuNav');
        btn.click(function () {
          if (!$(this).hasClass(c)) {
            $(this).addClass(c);
            body.stop().slideDown(500);
          } else {
            body.stop().slideUp(300);
            $(this).removeClass(c);
          }
        });
        var li = nav.children().children();
        li.find('.one.active').siblings().show();
        li.find('ul').siblings('.one').addClass('is_active');
        li.find('ul').siblings('a').attr('href', 'javascript:;');
        li.find('ul').siblings().click(function () {
          $(this).siblings().stop().slideToggle(300).parent().siblings().children('.active').siblings().stop().slideUp(300);
          $(this).toggleClass(c).parent().siblings().children('.active').removeClass(c);
        });
      };

      mHeaderBox();
    }
  }

  headNav(); // 滚轮下滑

  $(window).scroll(function () {
    headInit();
  });

  function headInit() {
    var t = $(window).scrollTop();

    if (t >= 66) {
      $(".header-pc").addClass("pc-active"); // 头部导航--2层变1层

      $(".header-wrap-up .container").css("width", "94%");
      $(".header-pc .header-wrap-down").css("background-color", "rgba(255, 255, 255, 0)");
      $(".header-pc .header-wrap-down").css("top", "0");
      $(".header-pc .header-wrap-down").css("height", "0.66rem");
    } else {
      $(".header-pc").removeClass("pc-active"); // 头部导航--1层变2层

      $(".header-wrap-up .container").css("width", "66.67%");
      $(".header-pc .header-wrap-down").css("top", "inherit");
      $(".header-pc .header-wrap-down").css("background-color", "#F7F7F7");
      $(".header-pc .header-wrap-down").css("height", "0.52rem");
    }
  }

  headInit(); //数字跳动

  $('.jump-num').countUp({
    delay: 5,
    time: 800
  }); // 点击展开

  function tabUl() {
    $(".tab-ul ul li:eq(0)").addClass("active");
    $(".tab-ul ul li:eq(0) .bom").slideToggle();
    $(".tab-ul ul").on("click", 'li .top', function () {
      var dd = $(this).next();
      var li = $(this).parent();
      var other = li.siblings();
      var otherDd = other.find(".bom");
      li.toggleClass("active");
      dd.slideToggle();
      other.removeClass("active");
      otherDd.slideUp();
    });
  }

  tabUl(); // 首页-banner

  function indexSlide() {
    var mySwiper = new Swiper('.indexbanner .bannerbox', {
      slidesPerView: 1,
      speed: 800,
      loop: true,
      autoplay: true,
      effect: 'fade',
      pagination: {
        el: '.indexbanner .swiper-pagination',
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          // return '<span class="' + className + '">' + 0+(index + 1) + '</span>';
          return '<div class="' + className + '">' + '</div>';
        }
      }
    });
    document.getElementById('play-button').addEventListener('click', function () {
      if (mySwiper.autoplay.running) {
        // 停止播放
        mySwiper.autoplay.stop();
        $('.play-stop').css("display", "inline-block");
        $('.play-start').css("display", "none");
      } else {
        // 继续播放
        mySwiper.autoplay.start();
        $('.play-start').css("display", "inline-block");
        $('.play-stop').css("display", "none");
      }
    });
  }

  indexSlide(); // 首页- product

  function indexProduct() {
    var slide = new Swiper('.index-product .itemlist', {
      speed: 900,
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        990: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      navigation: {
        prevEl: '.index-product .swiper-button-prev',
        nextEl: '.index-product .swiper-button-next'
      },
      pagination: {
        el: '.index-product .swiper-pagination',
        clickable: true
      }
    });
  }

  indexProduct();
});