$(function () {
    /* 全局公共属性 */
    let wH = window.innerHeight,
        wW = window.innerWidth,
        c = "active";

    // 使用IE浏览器提示
    function hiUpgrade() {
        window.AESKey = '';
        // 判断浏览器是否支持placeholder属性
        function isSupportPlaceholder() {
            var input = document.createElement('input');
            return 'placeholder' in input;
        };
        //判断是否是IE浏览器，包括Edge浏览器
        function IEVersion() {
            //取得浏览器的userAgent字符串
            var userAgent = navigator.userAgent;
            //判断是否IE浏览器
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
    hiUpgrade();

    // 窗口发生改变刷新页面
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
            });

            // 滑块
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
        }


        // 返回顶部
        if ($(".backToTopBtn").length) {
            var btnTop = document.getElementById('backToTopBtn');
            btnTop.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // 手机
        if ($(".m_header_box").length) {
            function mHeaderBox() {
                let c = "active";
                let mHeader = $('#mHeader'),
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
                let li = nav.children().children();
                li.find('.one.active').siblings().show();
                li.find('ul').siblings('.one').addClass('is_active')
                li.find('ul').siblings('a').attr('href', 'javascript:;');
                li.find('ul').siblings().click(function () {
                    $(this).siblings().stop().slideToggle(300).parent().siblings().children('.active').siblings().stop().slideUp(300);
                    $(this).toggleClass(c).parent().siblings().children('.active').removeClass(c);
                });
            }
            mHeaderBox();
        }
    }
    headNav();




    // 滚轮下滑
    $(window).scroll(function () {
        headInit();
    })



    function headInit() {
        var t = $(window).scrollTop();
        // banner 覆盖top：0
        if ($(".header-opacity").length) {
            if (t >= 100) {
                $(".header-pc").addClass("pc-active")
            } else {
                $(".header-pc").removeClass("pc-active")
            }
        }
    }
    headInit();






    // 点击展开
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
        })
    }
    tabUl();

    // a标签锚点平滑过渡
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
    });


    // 滚动加载入场动画 --开始

    // 判断元素出现在可视窗口的时候添加clsss  
    // 传参一： 需要出现在窗口的类名 
    // 传参二： 需要 
    // 传参二： 需要再窗口出现位置 取值范围 例如 0.5  就是 vh * 0.5  窗口的一半 
    // wowFun("svgBox1",0.5); 
    // let wH = window.innerHeight, wW = window.innerWidth, c = "active";
    function wowFun(a, b, c) {
        var box = $(a);
        if (c > 1 || c < 0 || c == 0) {
            c = 1
        }
        if (box != "" || box != null) {
            box.each(function () {
                var _this = $(this),
                    topNum = _this.offset().top,
                    scrollTop = $(window).scrollTop() + (wH * c),
                    d = _this.attr("data-time");
                if (d == null || d == "undefined" || d == 0) {
                    d = 0;
                }
                if (scrollTop > topNum) {
                    setTimeout(function () {
                        _this.addClass(b);
                    }, d)
                } else {
                    _this.removeClass(b);
                }
                $(window).scroll(function () {
                    topNum = _this.offset().top, scrollTop = $(window).scrollTop() + (wH * c), scrollTop_wH = $(window).scrollTop() + wH;
                    if (scrollTop > topNum) {
                        _this.addClass(b);
                        _this.css({
                            "animation-delay": d + "ms"
                        })
                    } else if (scrollTop_wH < topNum || scrollTop_wH == topNum) {
                        _this.removeClass(b);
                    }
                });
            })
        }
    }
    wowFun(".s-animate", "fadeInLeft", 1);
    wowFun(".s-animate-up", "fadeInUp", 1);
    wowFun(".s-animate-rotate", "rotateonce", 1);








})



// 鼠标跟随
function imousehover(obj, obj2) {
    // 鼠标跟随效果
    const isPad =
        navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2 &&
        /MacIntel/.test(navigator.platform);

    class CustomCursor {
        constructor(hoverItems) {
            this.cursor = obj;
            this.cursorInner = $(".inner", this.cursor);
            this.pageX = 0;
            this.pageY = 0;
            this.move = true;
            this.hoverItems = hoverItems;
        }

        init() {
            if (this.cursor[0]) {
                this.initCursor();
                this.initHovers();
                this.initMove();
            }
        }

        initCursor() {
            this.pageX = $(window).width() / 2 - 50;
            this.pageY = $(window).height() / 2 - 50;
            $(document).on("mousemove", (e) => {
                this.pageX = e.clientX;
                this.pageY = e.clientY;
            });
            const render = () => {
                if (this.move) {
                    window.TweenMax.to(this.cursor, 0.5, {
                        x: this.pageX,
                        y: this.pageY,
                        ease: "Power1.easeOut",
                    });
                }
                requestAnimationFrame(render);
            };
            render();
        }

        initHovers() {
            const handleMouseEnter = (e) => {
                window.TweenMax.to(this.cursor, 0.5, {
                    scale: 1,
                    opacity: 1,
                    ease: "Power1.easeOut",
                });
                e.stopPropagation();
            };
            const handleMouseLeave = () => {
                window.TweenMax.to(this.cursor, 0.5, {
                    scale: 0,
                    opacity: 0,
                    ease: "Power1.easeOut",
                });

                // this.cursor.removeClass(function (i, v) {return v.replace('cursor', '');});
            };
            this.hoverItems.each(function (i, item) {
                $(item).on("mouseenter", handleMouseEnter);
                $(item).on("mouseleave", handleMouseLeave);
            });
        }
        initMove() {
            const handleMouseMove = (e) => {
                if ($(e.target).closest('.owl-nav')[0]) {
                    this.initCircle(e.target, "[class*='owl-']");
                } else if ($(e.target).closest('.searchOnOff')[0]) {
                    this.initCircle(e.target, ".searchOnOff");
                } else {
                    window.TweenMax.to(this.cursor, 0.5, {
                        scale: 1,
                        // background: 'yellow',
                        ease: "Power1.easeOut",
                    });
                    window.TweenMax.to(this.cursorInner, 0.5, {
                        opacity: 1,
                        ease: "Power1.easeOut",
                    });
                    this.move = true;
                }
                if ($(e.currentTarget).hasClass('ff_topSlider') || $(e.currentTarget).parents('.mlist.project')[0]) {
                    // const sxPos = (e.clientX / window.innerWidth) * 200 - 100;
                    // this.cursor.toggleClass("next", sxPos > 0);
                    this.cursor.addClass('more');
                } else if ($(e.currentTarget).hasClass('videom') || $(e.currentTarget).parents('.bodyvideom')[0]) {
                    this.cursor.addClass('play');
                } else if ($(e.currentTarget).parents('.team_tabs')[0]) {
                    this.cursor.addClass('drag');
                } else if ($(e.currentTarget).hasClass('post-next')) {
                    this.cursor.addClass('next');
                }
            };

            this.hoverItems.each(function (i, item) {
                $(item).on("mousemove", item, handleMouseMove);
            });
        }
        initCircle(target, elm) {
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
                ease: "Power1.easeOut",
            });
            window.TweenMax.to(this.cursorInner, 0.5, {
                opacity: 0,
                ease: "Power1.easeOut",
            });
        }
    }

    if (!isPad) {
        // $('body').append('<div class="cursor"><div class="inner">More</div></div>');
        const cursor = new CustomCursor(obj2);
        cursor.init();
    }
}

// 文字过渡动画
// 首页-关于我们-文字过渡动画
function aniText() {
    var PC = $(window).width() > 1024,
        mobile = $(window).width() <= 1024,
        winWidth = $(window).width(),
        winHeight = $(window).height();
    if (mobile) {}
    if (PC) {
        const textElements = gsap.utils.toArray('.ani-text');
        textElements.forEach(text => {
            gsap.to(text, {
                backgroundSize: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: text,
                    start: 'center 80%',
                    end: 'center 50%',
                    scrub: true,
                    // markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20},
                },
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
        const textElements = gsap.utils.toArray('.ani-text2');
        textElements.forEach(text => {
            gsap.to(text, {
                backgroundSize: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: text,
                    start: 'center 80%',
                    end: 'center 50%',
                    scrub: true,
                    // markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20},
                },
            });
        });
    }
}
aniText2();



// 导航栏下沉导航-开始
$(document).ready(function () {
    $("#header .header-pc .header-wrap .header-right .column .header-btn").hover(function () {
        $(this).find(".search-panel").stop().slideDown()
    }, function () {
        $(this).find(".search-panel").stop().slideUp(); // 鼠标移出时的操作
    })

    // $("#header .header-pc .header-wrap .header-right .column .header-btn").mouseleave(function(){

    // })

    // 判断是否首页--头部 !white
    var opacity = $("#header").hasClass("header-opacity");
    var headewhite = $("#header").hasClass("header-white-bg");
    // 点击切换选中标题
    // $("#header .header-pc .header-wrap .header-right .nav dl").click(function () {

    //     $(this).find(".onetitle").addClass('active').siblings().removeClass('active');
    // })

    // var querycs = window.location.href.split(".html");
    // var domain = window.location.hostname;
    // querycs = querycs[0].split(domain);
    // console.log(querycs)
    // var querycsthis = querycs[1] ? querycs[1] : '/';
    // console.log(querycsthis)
    // $(".onetitle").each(function (i, v) {
    //     var query = $(this).attr('href');
    //     var vars = query.split(".html");
    //     // console.log(vars[0]);
    //     // console.log(querycsthis);
    //     if (vars[0] == querycsthis) {
    //         $(this).addClass('active').siblings().removeClass('active');
    //     }
    // })
    $('#c-list').click(function (e) {
        $("#hi-resume-popper").css("display", "flex");
    });
    $('.form .close-icon').click(function (e) {
        $("#hi-resume-popper").css("display", "none");
    });



    $("#header .header-pc .header-wrap .header-right .nav dl").hover(function () {
        // 下拉默认选中第一项
        // $("#header .header-pc .header-wrap .header-right .nav dl .downpanel .innerbox2 .titlelist .twonav").removeClass('active')
        // $('#header .header-pc .header-wrap .header-right .nav dl .downpanel .innerbox2 .titlelist .twonav:first').addClass('active');


        $(this).find(".downpanel").stop().slideDown();
        if (opacity) {
            $(".header-pc").addClass("pc-active");
        }
    }, function () {

        $(this).find(".downpanel").stop().slideUp();
        if (opacity) {
            $(".header-pc").removeClass("pc-active");
        }
    })


    // 搜索
    $("#header .header-pc .header-wrap .header-right .column .header-search").hover(function () {
        $(".header-pc").addClass("pc-active");
    }, function () {
        $(".header-pc").removeClass("pc-active");
        if (headewhite) {
            $(".header-pc").addClass("pc-active");

        }
    })
    // 二级显示
    $(".header-pc .nav dl").mouseover(function () {
        // var i = $(this).index();
        $(".header-pc .nav dd").stop().slideUp(300);
        $(this).find("dd").stop().slideDown(300);
    });

    $(".header-pc .header-wrap .nav").mouseleave(function () {
        $(".header-pc .nav dd").stop().slideUp(300);
    });

    // 导航栏行业方案-切换
    $("#header .header-pc .header-wrap .header-right .nav dl .downpanel .innerbox2 .titlelist .twonav").mouseover(function () {
        var d = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");


    })



})
// 导航栏下沉导航-结束





// ---------------------------------------------  首页-banner
function indexSlide() {
    var slide = new Swiper('.indexbanner .pro-ban', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 900,
        effect: 'fade',
        watchOverflow: true, //因为仅有1个slide，swiper无效
        preventLinksPropagation: false, // 阻止点击事件冒泡
        pagination: {
            el: '.indexbanner .pro-ban .swiper-pagination',
            clickable: true,
        },
    });
}
indexSlide();


// ---------------------------------------------  首页-行业应用
function indexApplySlide() {
    var slide1 = new Swiper('.index-apply-wrap .info .innerbox .apply-center', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 900,
        effect: 'fade',
        watchOverflow: true, //因为仅有1个slide，swiper无效
        preventLinksPropagation: false, // 阻止点击事件冒泡

    });
    var slide2 = new Swiper('.index-apply-wrap .image', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 900,
        effect: 'fade',
        watchOverflow: true, //因为仅有1个slide，swiper无效
        preventLinksPropagation: false, // 阻止点击事件冒泡

    });


    $(".index-apply-wrap .info .innerbox .apply-bottom .itemlist .item").hover(function () {
        var d = $(this).index();
        slide1.slideTo(d);
        slide2.slideTo(d);

    });

}
indexApplySlide();



// ---------------------------------------------  首页-软件服务
function indexSolfSlide() {
    var slide = new Swiper('.software-server-wrap .innerbox .content .right', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 900,
        effect: 'fade',
        watchOverflow: true, //因为仅有1个slide，swiper无效
        preventLinksPropagation: false, // 阻止点击事件冒泡
        pagination: {
            el: '.software-server-wrap .innerbox .content .right .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.software-server-wrap .left .pagination-operate .nextbtn',
            prevEl: '.software-server-wrap .left .pagination-operate .prebtn',
        },

    });
}
indexSolfSlide();


// ---------------------------------------------  首页-硬件产品
function indexhalfRobotSlide() {
    var slide = new Swiper('.hardware-products-wrap .innerbox .swiperwrap .swiperlist', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 900,
        effect: 'fade',
        watchOverflow: true, //因为仅有1个slide，swiper无效
        preventLinksPropagation: false, // 阻止点击事件冒泡
        pagination: {
            el: '.hardware-products-wrap .innerbox .swiperwrap .swiperlist .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hardware-products-wrap .innerbox .swiperwrap .swiperlist .pagination-operate .nextbtn',
            prevEl: '.hardware-products-wrap .innerbox .swiperwrap .swiperlist .pagination-operate .prebtn',
        },

    });
}
indexhalfRobotSlide();


// ---------------------------------------------  产品详情-应用场景
function applicationScenariosSlide() {
    var slide = new Swiper('.application-scenarios .innerbox .info', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 900,
        effect: 'fade',
        watchOverflow: true, //因为仅有1个slide，swiper无效
        preventLinksPropagation: false, // 阻止点击事件冒泡
        pagination: {
            el: '.application-scenarios .innerbox .info .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.application-scenarios .prebtn',
            prevEl: '.application-scenarios .nextbtn',
        },

    });
}
applicationScenariosSlide();


// ---------------------------------------------  行业详情-核心价值
function industryValueWrapSlide() {
    var slide = new Swiper('.industry-value-wrap .innerbox .i-list', {
        speed: 900,
        slidesPerView: 2,
        spaceBetween: 40,
        preventLinksPropagation: false, // 阻止点击事件冒泡
        watchOverflow: true,
        navigation: {
            nextEl: '.industry-value-wrap .nextbtn',
            prevEl: '.industry-value-wrap .prebtn',
        },
        pagination: {
            el: '.industry-value-wrap .innerbox .i-list .swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

        },
    });
}
industryValueWrapSlide()
// ---------------------------------------------  新闻-推荐新闻

function recomentnewsWrapSlide() {
    var slide = new Swiper('.recomentnews-wrap .innerbox .i-list', {
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 40,
        preventLinksPropagation: false, // 阻止点击事件冒泡
        watchOverflow: true,
        navigation: {
            nextEl: '.recomentnews-wrap .nextbtn',
            prevEl: '.recomentnews-wrap .prebtn',
        },
        pagination: {
            el: '.recomentnews-wrap .innerbox .i-list .swiper-pagination',
            clickable: true,
        },


    });
}
recomentnewsWrapSlide()


// ---------------------------------------------  核心技术--Robotics 

function recomentnewsWrapSlide() {
    var slide = new Swiper('.core-robotics-wrap .innerbox .i-bottom .swiperimg', {
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 40,
        effect: "fade",
        preventLinksPropagation: false, // 阻止点击事件冒泡
        watchOverflow: true,
        pagination: {
            el: '.core-robotics-wrap .innerbox .i-bottom .swiperimg .swiper-pagination',
            clickable: true,
        }
    });
    $(".core-robotics-wrap .innerbox .i-top .tablist .item").click(function () {
        var d = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        slide.slideTo(d)

    })

}
recomentnewsWrapSlide()

// ---------------------------------------------  软件详情--AI

function softdetailListWrap() {
    var slide = new Swiper('.softlist-section-one .innerbox .bottom-wrap .tabinfo', {
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 40,
        effect: "fade",
        preventLinksPropagation: false, // 阻止点击事件冒泡
        watchOverflow: true,
        pagination: {
            el: '.core-robotics-wrap .innerbox .i-bottom .swiperimg .swiper-pagination',
            clickable: true,
        }
    });
    $(".softlist-section-one .innerbox .bottom-wrap .tabul .title").click(function () {
        var d = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        slide.slideTo(d)

    })

}
softdetailListWrap()

// --------------------------------------------- 产品列表
function checkType(data) {
    let res = ''
    if (typeof data === 'object' && Array.isArray(data)) { //检查 data 是否是一个数组。Array.isArray() 是一个全局函数，用于判断给定的值是否为数组。
        res = 'Array'
    } else if (typeof data === 'object' && !Array.isArray(data)) { //Array.isArray检查一个变量是否为数组
        res = 'Object'
    } else {
        res = ''
    }
    return res
}

// --------------------------------------------- 软件架构
function softServerWrap() {
    var swiper1ActiveIndex = 0 // 第一个轮播的索引
    var box = $('.pl-section-one');
    if (box.length) {
        //    软件


        var swiper1 = new Swiper('.pl-section-one .firstcontainer', {
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            // },
            effect: "fade",
            fadeEffect: {
                crossFade: true //开启淡出。过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。
            },
            preventLinksPropagation: false, // 阻止点击事件冒泡
            // pagination: {
            //     el: '.equiment-wrap .banner_sp',
            //     clickable: true,
            // },
            allowTouchMove: false,
            on: {
                slideChangeTransitionStart: function () { //切换时分类也要改变状态
                    var d = this.activeIndex;
                    console.log("1d", d)
                },
                slideChange: function (mySwiper) {
                    swiper1ActiveIndex = this.activeIndex;
                },
            },
        });

        const swiper2 = new Swiper('.productlist-wrap .soft-imglist', {
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            spaceBetween: 20,
            allowTouchMove: false,
            navigation: {
                nextEl: '.productlist-wrap .nextbtn',
                prevEl: '.productlist-wrap .prebtn',
            },
            pagination: {
                el: '.productlist-wrap .soft-imglist .swiper-pagination',
                clickable: true,
            },
            on: {
                slideChangeTransitionStart: function () { //切换时分类也要改变状态
                    var d = this.activeIndex;
                    // $(".productlist-wrap .pl-section-one .innerbox .tabinfo .soft-server .tabitem span").eq(d).click();

                    $('.productlist-wrap .pl-section-one .innerbox .tabinfo .soft-server .tabitem span').stop().removeClass('active').eq(d).addClass('active');

                },
            }
        });
        // 软件切换
        $(".productlist-wrap .pl-section-one .innerbox .tabtitle .name").click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            swiper1.slideTo(index)
        });

        // 软件服务内部点击事件
        $(".productlist-wrap .pl-section-one .innerbox .tabinfo .soft-server .tabitem span").hover(function () {
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            // swiper2.slideTo(index);
            if (checkType(swiper2) === 'Array') {
                swiper2[swiper1ActiveIndex].slideTo(index)
            } else {
                swiper2.slideTo(index)

            }

        });

    }

}
softServerWrap();





// --------------------------------------------- 硬件架构

 // 硬件架构
 $(".pl-section-two .innerbox .tabtitle .name").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var d = $(this).index();
    $('.pl-section-two .innerbox .tabinfo .firstcontainer .swiperlist').stop().removeClass('swiperactive').eq(d).addClass('swiperactive');
    // opacity 会占位--此处选中第二项硬件产品时要隐藏硬件架构模块（第一项）
    console.log('d',d)
    if(d == 1){
        $(".pl-section-two .innerbox .tabinfo .swiperlist .image").addClass("showopacity")
    }else{
        $(".pl-section-two .innerbox .tabinfo .swiperlist .image").removeClass("showopacity")
    }

});


function halfServerWrap() {
    var swiper1ActiveIndex = 0 // 第一个轮播的索引
    var box = $('.pl-section-two');
    if (box.length) {
        
        var swiper1 = new Swiper('.pl-section-two .secondcontainer', {
            effect: "fade",
            fadeEffect: {
                crossFade: true //开启淡出。过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。
            },
            preventLinksPropagation: false, // 阻止点击事件冒泡
            allowTouchMove: false,
            on: {
                slideChangeTransitionStart: function () { //切换时分类也要改变状态
                    var d = this.activeIndex;
                    console.log("1d",d)
                },
                slideChange: function (mySwiper) {
                    // -----S ------
                    swiper1ActiveIndex = this.activeIndex
                    // -----E ------
                },
            },
        });

        var swiper2 = new Swiper('.pl-section-two .innerbox .tabinfo .swiperlist .thirdcontainer .haftlist-item', {
            slidesPerView: 3,
            spaceBetween: 30,
            preventLinksPropagation: false, // 阻止点击事件冒泡
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.pl-section-two .pagination-operate .nextbtn',
                prevEl: '.pl-section-two .pagination-operate .prebtn',
            },
            breakpoints: {
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
    
            },
            allowTouchMove: false,
           
        });

       
        // 硬件架构内部点击事件
        $(".pl-section-two .innerbox .tabinfo .swiperlist .hafttab span").hover(function () {
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            swiper1.slideTo(index)
            // if (checkType(swiper2) === 'Array') {
            //     swiper1[swiper1ActiveIndex].slideTo(index)
            // } else {
            //     swiper1.slideTo(index)

            // }

        });



    }

}
halfServerWrap();

// ---------------------------------------------  生态伙伴-千巡科技集成商

function parnerListSlide() {
    var slide = new Swiper('.parner-section4 .innerbox .swiperimg', {
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 40,
        effect: "fade",
        preventLinksPropagation: false, // 阻止点击事件冒泡
        watchOverflow: true,
        navigation: {
            nextEl: '.parner-section4 .nextbtn',
            prevEl: '.parner-section4 .prebtn',
        },
        pagination: {
            el: '.parner-section4 .swiper-pagination',
            clickable: true,
        }
    });
    $(".core-robotics-wrap .innerbox .i-top .tablist .item").click(function () {
        var d = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        slide.slideTo(d)

    })

}
parnerListSlide()


// ---------------------------------------------  荣誉资质

function honorSlide() {
    var slide = new Swiper('.honor-wrap .innerbox .swiperimg', {
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 40,
        effect: "fade",
        preventLinksPropagation: false, // 阻止点击事件冒泡
        watchOverflow: true,
        navigation: {
            nextEl: '.honor-wrap .nextbtn',
            prevEl: '.honor-wrap .prebtn',
        },
        pagination: {
            el: '.parner-section4 .swiper-pagination',
            clickable: true,
        }
    });
    $(".core-robotics-wrap .innerbox .i-top .tablist .item").click(function () {
        var d = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        slide.slideTo(d)

    })

}
honorSlide()




// ---------------------------------------------  应用行业

function  applicationSlide() {
    var slide = new Swiper('.all-industry-wrap .innerbox .swiperlist', {
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 40,
        effect: "fade",
        preventLinksPropagation: false, // 阻止点击事件冒泡
        watchOverflow: true,
    });
    $(".all-industry-wrap .innerbox .i-top .itemtab .item").click(function () {
        var d = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        slide.slideTo(d)

    })

}
applicationSlide()