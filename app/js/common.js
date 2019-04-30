(function($) {
    $(document).ready(function() {

        tabsSwitcher();

        function tabsSwitcher() {

            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('ul.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });
            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });
            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('h3.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });
            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content2').removeClass('active').eq($(this).index()).addClass('active');
            })

        }






        //scroll sections animation for food-truck-page
        $(window).scroll(function() {
            var $height = $(window).scrollTop();

            if($height > 600) {
                // $('.third-section .items .item .wrap-img img').addClass('visible');
            } else {
                // $('.third-section .items .item .wrap-img img').removeClass('visible');
            }

            if($height > 400) {
                // $('.red-text, .img-lier, .grey-block').removeClass('scroll-section');
            }
            if($height == 0) {
                // setTimeout(function () {
                $('.red-text, .img-lier, .grey-block').addClass('scroll-section');
                // $('.header').removeClass('active')
                // }, 500);
            }

        });




        //=============================scroll on form=============================


                window.onscroll = function() {

                    var element = document.getElementById('scroll-1');
                    var topPos = element.getBoundingClientRect().top + window.scrollY;//todo start section id position

                    var element2 = document.getElementById('scroll-2');
                    var topPos2 = element2.getBoundingClientRect().top + window.scrollY;//todo start section id position

                    var element3 = document.getElementById('scroll-3');
                    var topPos3 = element3.getBoundingClientRect().top + window.scrollY;//todo start section id position

                    var element4 = document.getElementById('scroll-4');
                    var topPos4 = element4.getBoundingClientRect().top + window.scrollY;//todo start section id position

                    var element5 = document.getElementById('scroll-5');
                    var topPos5 = element5.getBoundingClientRect().top + window.scrollY;//todo start section id position




                    // console.log(topPos, topPos2);

                    // var menuItem = document.getElementById('menu_item-1');
                    var menuItem1 = $('#menu_item-1 .menu__progressActiveBorder')[0];
                    var menuItem2 = $('#menu_item-2 .menu__progressActiveBorder')[0];
                    var menuItem3 = $('#menu_item-3 .menu__progressActiveBorder')[0];
                    var menuItem4 = $('#menu_item-4 .menu__progressActiveBorder')[0];
                    var menuItem5 = $('#menu_item-5 .menu__progressActiveBorder')[0];
                    // console.log(menuItem, 11);
                    // console.log(menuItem1, 22);




                    // var $height = $(window).scrollTop();
                    // console.log($height);


                    // top = $(element).offset().top;
                    // console.log(menumenuItem1Item);



                    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

                    // console.log(scrolled, topPos);
                    if(scrolled >= topPos){
                        // $(menuItem1).css({"stroke-dashoffset": "148.652", "stroke-dasharray": "239.761px, 249.761px"});// todo 0.5
                        $(menuItem1).css("stroke-dashoffset", "1e-05");//todo 1
                    }else{
                        $(menuItem1).css({"stroke-dashoffset": "239.761", "stroke-dasharray": "0px, 999999px;"});// todo 0
                    }
                    if(scrolled >= topPos2){
                        $(menuItem2).css("stroke-dashoffset", "1e-05");//todo 1
                    }else{
                        $(menuItem2).css({"stroke-dashoffset": "239.761", "stroke-dasharray": "0px, 999999px;"});// todo 0
                    }
                    if(scrolled >= topPos3){
                        $(menuItem3).css("stroke-dashoffset", "1e-05");//todo 1
                    }else{
                        $(menuItem3).css({"stroke-dashoffset": "239.761", "stroke-dasharray": "0px, 999999px;"});// todo 0
                    }
                    if(scrolled >= topPos4){
                        $(menuItem4).css("stroke-dashoffset", "1e-05");//todo 1
                    }else{
                        $(menuItem4).css({"stroke-dashoffset": "239.761", "stroke-dasharray": "0px, 999999px;"});// todo 0
                    }
                    if(scrolled >= topPos5){
                        $(menuItem5).css("stroke-dashoffset", "1e-05");//todo 1
                    }else{
                        $(menuItem5).css({"stroke-dashoffset": "239.761", "stroke-dasharray": "0px, 999999px;"});// todo 0
                    }





                    //animate circles

                    myFunction();
                    function myFunction() {
                        // if(!isResizeble) {
                            var element2 = document.getElementById('scroll-2');
                            var topPos2 = element2.getBoundingClientRect().top + window.scrollY;//todo start section id position
                            // console.log(topPos2);
                            var scrolled = window.pageYOffset || document.documentElement.scrollTop;
                            // console.log(scrolled);
                            if (scrolled >= topPos2 - 200) {
                                // console.log(topPos2);
                                // $(function(){
                                //     $('.circlechart').circlechart();
                                // });
                                $('.second-section .second-block .wrap-items .items .circle-chart__info').css("animation", "circle-chart-appear 2s forwards");
                                $('.circle-chart__circle').css("animation", "circle-chart-fill 2s reverse");

                                isResizeble = true;
                                // console.log(isResizeble);
                            }else{
                                // console.log('2222')
                                // myFunction = null;
                                $('.second-section .second-block .wrap-items .items .circle-chart__info').css("animation", "none");
                                // $('.circle-chart-appear').css("animation", "circle-chart-fill 2s ease 0s 1 reverse none running");
                                $('.circle-chart__circle').css("animation", "none");
                            }

                        // }
                    }


                };
        $(function(){
            $('.circlechart').circlechart();
        });
        var isResizeble = false;




                $(".progress-bar, .scroll__container, .second-section .wrap-button, .scroll-button").on("click","a", function (event) {
                    //отменяем стандартную обработку нажатия по ссылке
                    event.preventDefault();

                    //забираем идентификатор бока с атрибута href
                    var id  = $(this).attr('href'),
                        //узнаем высоту от начала страницы до блока на который ссылается якорь
                        top = $(id).offset().top;

                    //анимируем переход на расстояние - top за 1500 мс
                    $('body,html').animate({scrollTop: top}, 500);


                });


        //====================================================================




        $(window).on('load resize', function() {
            if ($(window).width() < 768) {

                slider1();

            } else {
                $(".benefits-slider.slick-initialized").slick("unslick");
            }
        });
        
        function slider1() {
            $('.benefits-slider:not(.slick-initialized)').slick({
                dots: false,
                arrows: false,
                // infinite: true,
                rtl: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                // centerMode: true,
                prevArrow: '<span class="slick-prev"></span>',
                nextArrow: '<span class="slick-next"></span>',
                // variableWidth: true,
                autoplay: true,
                // rows: 2,
                // slidesPerRow: 1,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            arrows: true,
                            rows: 1,
                            slidesPerRow: 1,
                            // dots: true,
                            // centerMode: true,
                            // centerPadding: '80px',
                            slidesToScroll: 1
                            // infinite: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: true
                        }
                    }
                ]
            });
        };




    });
})(jQuery);