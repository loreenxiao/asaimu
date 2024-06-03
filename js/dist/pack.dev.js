"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  var windoWidth = $(window).width();
  $(window).resize(function () {
    if (Math.abs($(this).width() - windoWidth) > 20) {
      window.location.href = "";
    }
  }); // 导航

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

    if (t >= 100) {
      $(".header-pc").addClass("pc-active");
    } else {
      $(".header-pc").removeClass("pc-active");
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

  tabUl(); // 可视化数据滚动

  function visualData(obj) {
    $(window).load(function () {
      obj.each(function () {
        var h = Number($(this).html());
        var t = "";
        var n = Math.ceil(h / 20);
        var a = true;
        var This = $(this);

        if ($(this).length != 0) {
          t = $(this).offset().top;
        }

        This.html(0);
        fn1();
        $(window).scroll(function () {
          fn1();
        });

        function fn1() {
          var wT = $(window).scrollTop();

          if (wT > t - $(window).height() + 50 && wT < t - 50 && a == true) {
            a = false;
            var y = 0;
            var timer2 = setInterval(function () {
              if (y >= h) {
                y = h;
                clearInterval(timer2);
              }

              This.html(y);
              y += n;
            }, 100);
          }
        }
      });
    });
  }

  visualData($(".num-move")); // 首页-banner

  function indexSlide() {
    var slide = new Swiper('.indexbanner .bannerbox', {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      speed: 900,
      effect: 'fade',
      // loop: true,
      watchOverflow: true,
      //因为仅有1个slide，swiper无效
      preventLinksPropagation: false,
      // 阻止点击事件冒泡
      navigation: {
        nextEl: '.indexbanner .bannerbox .swiper-button-next',
        prevEl: '.indexbanner .bannerbox .swiper-button-prev'
      },
      pagination: {
        el: '.indexbanner .bannerbox .swiper-pagination',
        clickable: true
      }
    });
  }

  indexSlide(); // 首页- 解决方案

  function indexSolution() {
    var slide = new Swiper('.index-solution .solution-card', {
      speed: 900,
      spaceBetween: 42,
      slidesPerView: 6,
      preventLinksPropagation: false,
      // 阻止点击事件冒泡
      pagination: {
        el: '.index-solution .solution-card .swiper-pagination',
        clickable: true
      },
      navigation: {
        prevEl: '.index-solution .swiper-button-prev',
        nextEl: '.index-solution .swiper-button-next'
      },
      breakpoints: {
        1560: {
          slidesPerView: 5,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 25
        },
        990: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    });
  }

  indexSolution(); // 首页- 定制方案

  function indexOrder() {
    var divBox = $('.index-order');

    if (divBox.length) {
      var getDiv = function getDiv(el) {
        return divBox.find(el);
      };

      var tabs = getDiv('.swipertab').children(),
          swiperBox = getDiv('.order-swiper'),
          prev = getDiv('.swiper-button-prev'),
          next = getDiv('.swiper-button-next'),
          speed = 500;
      tabs.click(function () {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        swiper.slideTo($(this).index());
      });
      var swiper = new Swiper(swiperBox, {
        speed: speed,
        spaceBetween: 20,
        allowTouchMove: false,
        effect: "fade"
      });
      var swiperArr = [];
      swiperBox.find('.swiper-box').each(function () {
        var pager = $(this).siblings('.swiper-pagination');
        var itemSwiper = new Swiper($(this), {
          // autoplay: {
          //     delay: 4000,
          //     disableOnInteraction: false,
          // },
          // speed: 900,
          // loop: true,
          // spaceBetween: 30,
          slidesPerView: 5,
          centeredSlides: true,
          preventLinksPropagation: false,
          // 阻止点击事件冒泡
          pagination: {
            el: '.swiper-box .swiper-pagination',
            clickable: true
          },
          navigation: {
            prevEl: '.swiper-box .swiper-button-prev',
            nextEl: '.swiper-box .swiper-button-next'
          },
          breakpoints: {
            768: {
              slidesPerView: 1
            },
            990: {
              slidesPerView: 3
            }
          }
        });
        swiperArr.push(itemSwiper);
      });
      prev.click(function () {
        return swiperArr[swiper.activeIndex].slidePrev();
      });
      next.click(function () {
        return swiperArr[swiper.activeIndex].slideNext();
      });
    }
  }

  indexOrder(); // 首页- EMC防护

  function indexProtect() {
    var _ref;

    var mySwiper = new Swiper('.index-EMC-protect .parner-wrap', (_ref = {
      loop: true,
      //可选选项，开启循环
      slidesPerView: 9,
      spaceBetween: 20,
      allowTouchMove: false,
      // speed: 8000,
      autoplay: true
    }, _defineProperty(_ref, "autoplay", {
      delay: 0,
      disableOnInteraction: false
    }), _defineProperty(_ref, "breakpoints", {
      768: {
        slidesPerView: 6
      },
      640: {
        slidesPerView: 4
      },
      480: {
        slidesPerView: 2
      }
    }), _ref));
  }

  indexProtect();
}); // 鼠标跟随

function imousehover(obj, obj2) {
  // 鼠标跟随效果
  var isPad = navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform);

  var CustomCursor =
  /*#__PURE__*/
  function () {
    function CustomCursor(hoverItems) {
      _classCallCheck(this, CustomCursor);

      this.cursor = obj;
      this.cursorInner = $(".inner", this.cursor);
      this.pageX = 0;
      this.pageY = 0;
      this.move = true;
      this.hoverItems = hoverItems;
    }

    _createClass(CustomCursor, [{
      key: "init",
      value: function init() {
        if (this.cursor[0]) {
          this.initCursor();
          this.initHovers();
          this.initMove();
        }
      }
    }, {
      key: "initCursor",
      value: function initCursor() {
        var _this = this;

        this.pageX = $(window).width() / 2 - 50;
        this.pageY = $(window).height() / 2 - 50;
        $(document).on("mousemove", function (e) {
          _this.pageX = e.clientX;
          _this.pageY = e.clientY;
        });

        var render = function render() {
          if (_this.move) {
            window.TweenMax.to(_this.cursor, 0.5, {
              x: _this.pageX,
              y: _this.pageY,
              ease: "Power1.easeOut"
            });
          }

          requestAnimationFrame(render);
        };

        render();
      }
    }, {
      key: "initHovers",
      value: function initHovers() {
        var _this2 = this;

        var handleMouseEnter = function handleMouseEnter(e) {
          window.TweenMax.to(_this2.cursor, 0.5, {
            scale: 1,
            opacity: 1,
            ease: "Power1.easeOut"
          });
          e.stopPropagation();
        };

        var handleMouseLeave = function handleMouseLeave() {
          window.TweenMax.to(_this2.cursor, 0.5, {
            scale: 0,
            opacity: 0,
            ease: "Power1.easeOut"
          }); // this.cursor.removeClass(function (i, v) {return v.replace('cursor', '');});
        };

        this.hoverItems.each(function (i, item) {
          $(item).on("mouseenter", handleMouseEnter);
          $(item).on("mouseleave", handleMouseLeave);
        });
      }
    }, {
      key: "initMove",
      value: function initMove() {
        var _this3 = this;

        var handleMouseMove = function handleMouseMove(e) {
          if ($(e.target).closest('.owl-nav')[0]) {
            _this3.initCircle(e.target, "[class*='owl-']");
          } else if ($(e.target).closest('.searchOnOff')[0]) {
            _this3.initCircle(e.target, ".searchOnOff");
          } else {
            window.TweenMax.to(_this3.cursor, 0.5, {
              scale: 1,
              // background: 'yellow',
              ease: "Power1.easeOut"
            });
            window.TweenMax.to(_this3.cursorInner, 0.5, {
              opacity: 1,
              ease: "Power1.easeOut"
            });
            _this3.move = true;
          }

          if ($(e.currentTarget).hasClass('ff_topSlider') || $(e.currentTarget).parents('.mlist.project')[0]) {
            // const sxPos = (e.clientX / window.innerWidth) * 200 - 100;
            // this.cursor.toggleClass("next", sxPos > 0);
            _this3.cursor.addClass('more');
          } else if ($(e.currentTarget).hasClass('videom') || $(e.currentTarget).parents('.bodyvideom')[0]) {
            _this3.cursor.addClass('play');
          } else if ($(e.currentTarget).parents('.team_tabs')[0]) {
            _this3.cursor.addClass('drag');
          } else if ($(e.currentTarget).hasClass('post-next')) {
            _this3.cursor.addClass('next');
          }
        };

        this.hoverItems.each(function (i, item) {
          $(item).on("mousemove", item, handleMouseMove);
        });
      }
    }, {
      key: "initCircle",
      value: function initCircle(target, elm) {
        var _sTop = $(window).scrollTop();

        var _offset = Math.min($(target).closest(elm).outerWidth(), $(target).closest(elm).outerHeight());

        var _x = Math.round($(target).closest(elm).offset().left + _offset / 2);

        var _y = Math.round($(target).closest(elm).offset().top + _offset / 2 - _sTop);

        this.move = false;
        window.TweenMax.to(this.cursor, 0.5, {
          scale: 0.5,
          x: _x,
          y: _y,
          background: 'rgba(255,255,255,0)',
          ease: "Power1.easeOut"
        });
        window.TweenMax.to(this.cursorInner, 0.5, {
          opacity: 0,
          ease: "Power1.easeOut"
        });
      }
    }]);

    return CustomCursor;
  }();

  if (!isPad) {
    // $('body').append('<div class="cursor"><div class="inner">More</div></div>');
    var cursor = new CustomCursor(obj2);
    cursor.init();
  }
}