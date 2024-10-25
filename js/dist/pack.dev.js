"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  // 加载-滚动条丝滑滚动 --extend.css
  // class Utils {
  //     lenisInit() {
  //         const initSmoothScrolling = () => {
  //             this.lenis = new Lenis({
  //                 mouseMultiplier: 1.2,
  //                 smooth: true,
  //                 smoothTouch: true
  //             });
  //             const scrollFn = (time) => {
  //                 this.lenis.raf(time);
  //                 requestAnimationFrame(scrollFn);
  //             };
  //             requestAnimationFrame(scrollFn);
  //         };
  //         initSmoothScrolling();
  //     }
  // }
  // class App extends Utils {
  //     constructor() {
  //         super();
  //         this.init();
  //     }
  //     init() {
  //         this.lenisInit();
  //         this.definedAn();
  //     }
  //     definedAn() {
  //         let that = this;
  //         $('.l-morebox').hover(function () {
  //             let jttl = gsap.timeline({
  //                 paused: true
  //             });
  //             jttl.to($(this).find('svg.jt'), {
  //                     xPercent: 100
  //                 })
  //                 .set($(this).find('svg.jt'), {
  //                     xPercent: -100
  //                 })
  //                 .to($(this).find('svg.jt'), {
  //                     xPercent: 0
  //                 });
  //             jttl.play();
  //         }, function () {});
  //         if ($('.index-title').length > 0) {
  //             let panels = gsap.utils.toArray(".index-title");
  //             panels.forEach((v, i) => {
  //                 let name = $(v).find('.name>*');
  //                 let nname = $(v).find('.nname>*');
  //                 gsap.from(name, {
  //                     xPercent: 100,
  //                     opacity: 0,
  //                     stagger: 0.05,
  //                     ease: 'power2.inOut',
  //                     scrollTrigger: {
  //                         trigger: v,
  //                         start: "top bottom",
  //                         toggleActions: "play resume resume reset"
  //                     }
  //                 });
  //                 gsap.from(nname, {
  //                     xPercent: 100,
  //                     opacity: 0,
  //                     stagger: 0.05,
  //                     ease: 'power2.inOut',
  //                     scrollTrigger: {
  //                         trigger: v,
  //                         start: "top bottom",
  //                         toggleActions: "play resume resume reset"
  //                     }
  //                 });
  //             });
  //         }
  //     }
  // }
  // const _app = new App();

  /* 全局公共属性 */
  var wH = window.innerHeight,
      wW = window.innerWidth,
      c = "active"; // 使用IE浏览器提示

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
    var t = $(window).scrollTop(); // banner 覆盖top：0

    if ($(".header-opacity").length) {
      if (t >= 100) {
        $(".header-pc").addClass("pc-active");
      } else {
        $(".header-pc").removeClass("pc-active");
      }
    }
  }

  headInit(); // 点击展开

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

  tabUl(); // a标签锚点平滑过渡

  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 60 // 调整滚动位置以适应导航栏的高度

      }, 1000, function () {
        window.location.hash = target.selector;
      });
    }
  }); // 滚动加载入场动画 --开始
  // 判断元素出现在可视窗口的时候添加clsss  
  // 传参一： 需要出现在窗口的类名 
  // 传参二： 需要 
  // 传参二： 需要再窗口出现位置 取值范围 例如 0.5  就是 vh * 0.5  窗口的一半 
  // wowFun("svgBox1",0.5); 
  // let wH = window.innerHeight, wW = window.innerWidth, c = "active";

  function wowFun(a, b, c) {
    var box = $(a);

    if (c > 1 || c < 0 || c == 0) {
      c = 1;
    }

    if (box != "" || box != null) {
      box.each(function () {
        var _this = $(this),
            topNum = _this.offset().top,
            scrollTop = $(window).scrollTop() + wH * c,
            d = _this.attr("data-time");

        if (d == null || d == "undefined" || d == 0) {
          d = 0;
        }

        if (scrollTop > topNum) {
          setTimeout(function () {
            _this.addClass(b);
          }, d);
        } else {
          _this.removeClass(b);
        }

        $(window).scroll(function () {
          topNum = _this.offset().top, scrollTop = $(window).scrollTop() + wH * c, scrollTop_wH = $(window).scrollTop() + wH;

          if (scrollTop > topNum) {
            _this.addClass(b);

            _this.css({
              "animation-delay": d + "ms"
            });
          } else if (scrollTop_wH < topNum || scrollTop_wH == topNum) {
            _this.removeClass(b);
          }
        });
      });
    }
  }

  wowFun(".s-animate", "fadeInLeft", 1);
  wowFun(".s-animate-up", "fadeInUp", 1);
  wowFun(".s-animate-rotate", "rotateonce", 1); // 可视化数据滚动
  // function visualData(obj) {
  //     $(window).load(function () {
  //         obj.each(function () {
  //             var h = Number($(this).html());
  //             var t = "";
  //             var n = Math.ceil(h / 20);
  //             var a = true;
  //             var This = $(this);
  //             if ($(this).length != 0) {
  //                 t = $(this).offset().top;
  //             }
  //             This.html(0);
  //             fn1();
  //             $(window).scroll(function () {
  //                 fn1();
  //             });
  //             function fn1() {
  //                 var wT = $(window).scrollTop();
  //                 if (wT > t - $(window).height() + 50 && wT < t - 50 && a == true) {
  //                     a = false;
  //                     var y = 0;
  //                     var timer2 = setInterval(function () {
  //                         if (y >= h) {
  //                             y = h;
  //                             clearInterval(timer2);
  //                         }
  //                         This.html(y);
  //                         y += n;
  //                     }, 100);
  //                 }
  //             }
  //         });
  //     });
  // }
  // visualData($(".num-move"));
  // 首页-banner

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
          //     delay: 3000,
          //     disableOnInteraction: false,
          // },
          // speed: 900,
          loop: true,
          spaceBetween: 22,
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
            480: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 3
            } // 990: {
            //     slidesPerView: 3,
            // },

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
      // spaceBetween: 20,
      allowTouchMove: false,
      speed: 3000,
      autoplay: true
    }, _defineProperty(_ref, "autoplay", {
      delay: 0,
      disableOnInteraction: false
    }), _defineProperty(_ref, "breakpoints", {
      1200: {
        slidesPerView: 7
      },
      990: {
        slidesPerView: 5,
        spaceBetween: 18
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }), _ref));
  }

  indexProtect(); // --------------------------------------------- 关于我们--发展历程

  function isMobileDevice() {
    // 检测是否为移动设备
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function development() {
    // 根据设备类型设置 Swiper 的方向
    var direction = isMobileDevice() ? 'horizontal' : 'vertical';
    var mySwiper = new Swiper('.development-culture .leftwrap .scrollcontent', {
      // loop : true,//可选选项，开启循环
      direction: direction,
      spaceBetween: 10,
      slidesPerView: 3,
      speed: 1000,
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        990: {
          slidesPerView: 1.8
        },
        1280: {
          slidesPerView: 2
        }
      },
      pagination: {
        el: '.development-culture .leftwrap .scrollcontent .swiper-pagination',
        clickable: true
      }
    });
    var mySwiper2 = new Swiper('.development-culture .innerbox .rightwrap .swiperlogo .item .logo', {
      // loop : true,//可选选项，开启循环
      speed: 1000,
      effect: "fade",
      pagination: {
        el: '.development-culture .innerbox .rightwrap .swiperlogo .item .logo .swiper-pagination',
        clickable: true
      },
      on: {
        slideChange: function slideChange() {
          console.log('Slide changed', this.activeIndex);
          var d = this.activeIndex;
          $(".development-culture .leftwrap .yeartab li").eq(d).click();
        }
      }
    });
    $(".development-culture .leftwrap .yeartab li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      var index = $(this).index();
      mySwiper.slideTo(index);
      mySwiper2.slideTo(index);
    });
  }

  development(); // 产品-滚动锚点

  $(".product-list-wrap .innerbox .left-box ul li").click(function () {
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('html, body').animate({
      scrollTop: $(".product-list-wrap .innerbox .right-box .rowline").eq(index).offset().top // 获取锚点的位置

    }, 500); // 动画持续时间
  });
  $(document).ready(function () {
    // 给每个按钮绑定点击事件
    $('.product-list-wrap .innerbox .left-box ul li').click(function () {
      var buttonDataId = $(this).data('id');
      var targetDiv = $('#divList .item[data-id="' + buttonDataId + '"]'); // 清除所有 div 的 active 类

      $('.product-list-wrap .innerbox .right-box .rowline').removeClass('active'); // 给当前点击对应的 div 添加 active 类

      targetDiv.addClass('active'); // 滚动到对应的 div

      $('html, body').animate({
        scrollTop: targetDiv.offset().top
      }, 500); // 更新按钮的状态

      $('.product-list-wrap .innerbox .left-box ul li').removeClass('selected');
      $(this).addClass('selected');
    }); // 初始化第一个 div 和按钮为 active 和 selected 状态

    $('.product-list-wrap .innerbox .right-box .rowline:first-child').addClass('active');
    $('.product-list-wrap .innerbox .left-box ul li:first-child').addClass('selected'); // 监听滚动事件

    $(window).on('scroll', function () {
      detectActiveDiv();
    });

    function detectActiveDiv() {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      $('.product-list-wrap .innerbox .right-box .rowline').each(function () {
        var divTop = $(this).offset().top;
        var divHeight = $(this).outerHeight();

        if (divTop <= scrollTop + windowHeight && divTop + divHeight >= scrollTop) {
          // 当前 div 在可视区域内
          $(this).addClass('active').siblings().removeClass('active');
          updateButtonState($(this));
        } else {
          $(this).removeClass('active');
        }
      });
    }

    function updateButtonState(activeDiv) {
      var activeDivId = activeDiv.data('id');
      $('.product-list-wrap .innerbox .left-box ul li').removeClass('selected');
      $('.product-list-wrap .innerbox .left-box ul li[data-id="' + activeDivId + '"]').addClass('selected');
    }
  }); // 产品详情---产品特性 参数搜索 相关下载

  $(".product-seristab-wrap .seris-content .section-one .tab-title li").click(function () {
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $(".product-seristab-wrap .seris-content .section-one .tab-content .sectionitem").eq(index).addClass('on').siblings().removeClass('on');
  }); // 产品详情---不同系列

  $(".product-seristab-wrap .seris-tab li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  }); // 企业文化

  $(".company-culture .innerbox .item").hover(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
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
        var _this2 = this;

        this.pageX = $(window).width() / 2 - 50;
        this.pageY = $(window).height() / 2 - 50;
        $(document).on("mousemove", function (e) {
          _this2.pageX = e.clientX;
          _this2.pageY = e.clientY;
        });

        var render = function render() {
          if (_this2.move) {
            window.TweenMax.to(_this2.cursor, 0.5, {
              x: _this2.pageX,
              y: _this2.pageY,
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
        var _this3 = this;

        var handleMouseEnter = function handleMouseEnter(e) {
          window.TweenMax.to(_this3.cursor, 0.5, {
            scale: 1,
            opacity: 1,
            ease: "Power1.easeOut"
          });
          e.stopPropagation();
        };

        var handleMouseLeave = function handleMouseLeave() {
          window.TweenMax.to(_this3.cursor, 0.5, {
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
        var _this4 = this;

        var handleMouseMove = function handleMouseMove(e) {
          if ($(e.target).closest('.owl-nav')[0]) {
            _this4.initCircle(e.target, "[class*='owl-']");
          } else if ($(e.target).closest('.searchOnOff')[0]) {
            _this4.initCircle(e.target, ".searchOnOff");
          } else {
            window.TweenMax.to(_this4.cursor, 0.5, {
              scale: 1,
              // background: 'yellow',
              ease: "Power1.easeOut"
            });
            window.TweenMax.to(_this4.cursorInner, 0.5, {
              opacity: 1,
              ease: "Power1.easeOut"
            });
            _this4.move = true;
          }

          if ($(e.currentTarget).hasClass('ff_topSlider') || $(e.currentTarget).parents('.mlist.project')[0]) {
            // const sxPos = (e.clientX / window.innerWidth) * 200 - 100;
            // this.cursor.toggleClass("next", sxPos > 0);
            _this4.cursor.addClass('more');
          } else if ($(e.currentTarget).hasClass('videom') || $(e.currentTarget).parents('.bodyvideom')[0]) {
            _this4.cursor.addClass('play');
          } else if ($(e.currentTarget).parents('.team_tabs')[0]) {
            _this4.cursor.addClass('drag');
          } else if ($(e.currentTarget).hasClass('post-next')) {
            _this4.cursor.addClass('next');
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
} // 文字过渡动画
// 首页-关于我们-文字过渡动画


function aniText() {
  var PC = $(window).width() > 1024,
      mobile = $(window).width() <= 1024,
      winWidth = $(window).width(),
      winHeight = $(window).height();

  if (mobile) {}

  if (PC) {
    var textElements = gsap.utils.toArray('.ani-text');
    textElements.forEach(function (text) {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 50%',
          scrub: true // markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20},

        }
      });
    });
  }
}

aniText();

function aniText2() {
  var PC = $(window).width() > 1024,
      mobile = $(window).width() <= 1024,
      winWidth = $(window).width(),
      winHeight = $(window).height();

  if (mobile) {}

  if (PC) {
    var textElements = gsap.utils.toArray('.ani-text2');
    textElements.forEach(function (text) {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 50%',
          scrub: true // markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20},

        }
      });
    });
  }
}

aniText2(); // 导航栏下沉导航-开始

$(document).ready(function () {
  $("#header .header-pc .header-wrap .header-right .column .header-btn").hover(function () {
    $(this).find(".search-panel").stop().slideDown();
  }, function () {
    $(this).find(".search-panel").stop().slideUp(); // 鼠标移出时的操作
  }); // $("#header .header-pc .header-wrap .header-right .column .header-btn").mouseleave(function(){
  // })
  // 判断是否首页--头部 !white

  var opacity = $("#header").hasClass("header-opacity");
  var headewhite = $("#header").hasClass("header-white-bg");
  $("#header .header-pc .header-wrap .header-right .nav dl").hover(function () {
    $(this).find(".downpanel").stop().slideDown();

    if (opacity) {
      $(".header-pc").addClass("pc-active");
    }
  }, function () {
    $(this).find(".downpanel").stop().slideUp();

    if (opacity) {
      $(".header-pc").removeClass("pc-active");
    }
  }); // 搜索

  $("#header .header-pc .header-wrap .header-right .column .header-search").hover(function () {
    $(".header-pc").addClass("pc-active");
  }, function () {
    $(".header-pc").removeClass("pc-active");

    if (headewhite) {
      $(".header-pc").addClass("pc-active");
    }
  }); // 产品中心-切换

  $("#header .header-pc .header-wrap .header-right .nav dl .downpanel .innerbox2 .titlelist span").hover(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(this).addClass("active").siblings().removeClass("active");
  });
}); // 导航栏下沉导航-结束
// 行业分类

$(document).ready(function () {
  // 一级切换
  $(".product-sort-wrap .left-nav li:eq(0)").addClass("active");
  $(".product-sort-wrap .left-nav li:eq(0) .bottomlist").slideToggle();
  $(".product-sort-wrap .left-nav ul").on("click", 'li .top', function () {
    var dd = $(this).next();
    var li = $(this).parent();
    var other = li.siblings();
    var otherDd = other.find(".bottomlist");
    li.toggleClass("active");
    dd.slideToggle();
    other.removeClass("active");
    otherDd.slideUp();
  }); // 二级切换

  $(".product-sort-wrap .left-nav ul li .bottomlist p").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
}); // 新闻列表

function newsList() {
  var slide = new Swiper('.newswrap .newbanner', {
    speed: 900,
    effect: "fade",
    preventLinksPropagation: false,
    // 阻止点击事件冒泡
    pagination: {
      el: '.newswrap .newbanner .swiper-pagination',
      clickable: true
    }
  });
}

newsList(); // EMC方案设计

function solutionTabSwiper() {
  var slide = new Swiper('.casedesign-wrap .innerbox .designbox .swiperbox', {
    speed: 900,
    slidesPerView: 1,
    effect: 'fade',
    preventLinksPropagation: false // 阻止点击事件冒泡

  });
  $(".casedesign-wrap .innerbox .designbox .case-tab .name").click(function () {
    var a = $(this).index();
    $(".about-history-swiper .swiper-pagination-bullet").eq($(this).index()).click();
    $(this).addClass("active").siblings().removeClass("active");
    slide.slideTo(a);
  });
}

solutionTabSwiper(); // EMC测试服务

function checkType(data) {
  var res = '';

  if (_typeof(data) === 'object' && Array.isArray(data)) {
    //检查 data 是否是一个数组。Array.isArray() 是一个全局函数，用于判断给定的值是否为数组。
    res = 'Array';
  } else if (_typeof(data) === 'object' && !Array.isArray(data)) {
    //Array.isArray检查一个变量是否为数组
    res = 'Object';
  } else {
    res = '';
  }

  return res;
}

function teamActiveSwiper() {
  var swiper1ActiveIndex = 0; // 第一个轮播的索引

  var swiper1 = new Swiper('.solution-two-section1 .bottomwrap .oneSwiper', {
    speed: 1000,
    pagination: {
      el: '.solution-two-section1 .bottomwrap .oneSwiper .swiper-pagination',
      clickable: true
    },
    allowTouchMove: false,
    on: {}
  });
  var swiper2 = new Swiper('.solution-two-section1 .bottomwrap .twoSwiper', {
    speed: 1000,
    autoplay: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    allowTouchMove: false,
    pagination: {
      el: '.solution-two-section1 .bottomwrap .twoSwiper .swiper-pagination',
      clickable: false
    }
  });
  var mobile = $(window).width() <= 768;

  if (mobile) {
    $('.solution-two-section1 .bottomwrap .innerbox .image').detach().appendTo('.solution-two-section1 .bottomwrap .innerbox .info .tabitem .active .bottom');
  }

  $(".solution-two-section1 .bottomwrap .innerbox .info .tabitem li").hover(function () {
    var index = $(this).index();
    $(".solution-two-section1 .bottomwrap .innerbox .image .swiper-pagination1 .swiper-pagination-bullet").eq($(this).index()).click();
    $(this).addClass("active").siblings().removeClass("active");

    if (mobile) {
      $('.solution-two-section1 .bottomwrap .innerbox .image').detach().appendTo('.solution-two-section1 .bottomwrap .innerbox .info .tabitem .active .bottom');
    }
  });
}

teamActiveSwiper();

function serverwrap() {
  var swiper = new Swiper('.whichserver-wrap .innerwrap .bottomwrap .innerbox .image', {
    // speed: 1000,
    // autoplay: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.whichserver-wrap .innerwrap .bottomwrap .innerbox .image .swiper-pagination'
    },
    on: {}
  });
  $(".whichserver-wrap .innerwrap .bottomwrap .innerbox .info .tab-ul ul li").click(function () {
    var index = $(this).index();
    $(".whichserver-wrap .innerwrap .bottomwrap .innerbox .image .swiper-pagination .swiper-pagination-bullet").eq(index).click();
  });
}

serverwrap(); // 4.1 EMC测试服务

$(".test-server-wrap .innerbox .bottom-global .info .item").hover(function () {
  $(this).addClass('active').siblings().removeClass('active');
}); // --------------------------------------------- EMC测试服务

function EMCTestServer() {
  var slide = new Swiper('.test-server-wrap .innerbox .bottom-global .bg .swiperimg', {
    loop: true,
    //可选选项，开启循环
    allowTouchMove: false,
    effect: "fade",
    speed: 1000
  });
  $(".test-server-wrap .innerbox .bottom-global .info .item").hover(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var index = $(this).index();
    slide.slideTo(index);
  });
}

EMCTestServer();

function certifyBook() {
  var slide = new Swiper('.certify-wrap .innerbox .booklist', {
    speed: 900,
    spaceBetween: 20,
    slidesPerView: 4,
    preventLinksPropagation: false,
    // 阻止点击事件冒泡
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: '.certify-wrap .innerbox .swiperbox .booklist .swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.certify-wrap .innerbox .swiperbox .swiper-button-prev',
      nextEl: '.certify-wrap .innerbox .swiperbox .swiper-button-next'
    }
  });
}

certifyBook();

function creativeWrap() {
  var slide = new Swiper('.quality-test-wrap .innerbox .testbox .case-content .panelbox1 .bottomswiper', {
    speed: 900,
    effect: "fade",
    preventLinksPropagation: false,
    // 阻止点击事件冒泡
    navigation: {
      prevEl: '.quality-test-wrap .innerbox .testbox .case-content .panelbox1 .bottomswiper .swiper-button-prev',
      nextEl: '.quality-test-wrap .innerbox .testbox .case-content .panelbox1 .bottomswiper .swiper-button-next'
    },
    on: {
      slideChange: function slideChange(mySwiper) {
        // -----S ------
        swiper1ActiveIndex = this.activeIndex; // -----E ------

        $(".quality-test-wrap .innerbox .testbox .case-content .panelbox1 .steptop .item").eq(swiper1ActiveIndex).addClass('active').siblings().removeClass('active');
      }
    }
  });
  $(".quality-test-wrap .innerbox .testbox .case-content .panelbox1 .steptop .item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var a = $(this).index();
    slide.slideTo(a);
  });
}

creativeWrap();
$(document).ready(function () {
  function qualityTestWrap() {
    var slide = new Swiper('.panelbox2 .test-slide-wrap .itemlist', {
      autoplay: true,
      speed: 900,
      spaceBetween: 20,
      slidesPerView: 4,
      observer: true,
      //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,
      //修改swiper的父元素时，自动初始化swiper
      preventLinksPropagation: false,
      // 阻止点击事件冒泡
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        }
      },
      pagination: {
        el: '.panelbox2 .test-slide-wrap .itemlist .swiper-pagination',
        clickable: true
      }
    });
  }

  qualityTestWrap();
  $('.quality-test-wrap .innerbox .testbox .case-tab .name').click(function (e) {
    qualityTestWrap();
    var index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".quality-test-wrap .innerbox .testbox .case-content .panelbox").eq(index).addClass("active").siblings().removeClass("active");
  });
});
$(document).ready(function () {
  var swiper = new Swiper('.production-strength-wrap .bottombox .itemlist', {
    speed: 900,
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    preventLinksPropagation: false,
    // 阻止点击事件冒泡
    breakpoints: {
      768: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: '.production-strength-wrap .bottombox .itemlist .swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.production-strength-wrap .topbox .pagination-box .operatebtn .swiper-button-prev',
      nextEl: '.production-strength-wrap .topbox .pagination-box .operatebtn .swiper-button-next'
    },
    on: {
      // 在slide改变时更新当前页码
      slideChange: function slideChange() {
        updatePageInfo(swiper);
      }
    }
  }); // 初始化时更新一次当前页码

  if (swiper) {
    // 确认Swiper实例存在
    updatePageInfo(swiper);
  }

  function updatePageInfo(swiperInstance) {
    // 检查Swiper是否已经初始化
    if (!swiperInstance) {
      return;
    }

    var $current = $('.production-strength-wrap .topbox .pagination-box .pagebox .current');
    var $all = $('.production-strength-wrap .topbox .pagination-box .pagebox .all'); // 获取当前活动的slide索引

    var currentIndex = swiperInstance.realIndex + 1; // 将索引转换为从1开始的页码
    // 获取总页数
    // const totalPages = swiperInstance.slides.length;
    // 获取总页数（不包括复制的slide）

    var actualTotalPages = 0;
    $.each(swiperInstance.slides, function (_, slide) {
      if (!$(slide).hasClass('swiper-slide-duplicate')) {
        actualTotalPages++;
      }
    }); // 更新显示

    $current.text(currentIndex);
    $all.text(actualTotalPages);
  }
});