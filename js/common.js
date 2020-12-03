function init() {
    const menu = document.querySelector('.menu-trigger');
    const tran = document.querySelector('.tran');
    const row = document.querySelector('header');
    const header_1 = document.querySelector('header h1');
    const menu_1 = document.querySelector('.menu-trigger_1');

    menu.addEventListener('click', function () {
      

        menu.classList.toggle('active');
        tran.classList.toggle('active');
        console.log(tran.className == 'active')



        if (this.parents('header').className == 'active') {
            header_1.classList.add('active');

        } else {
            header_1.classList.remove('active');
        }

    });




    //2

    window.addEventListener('touchmove', function (e) {
        console.log(e)
        //  e.preventDefault();
        if (e.changedTouches[0].pageY > 100) {
            row.classList.add('active');
        } else {
            row.classList.remove('active');
        }
    });

}

window.addEventListener('DOMContentLoaded', init);
/*  var $spotHeight =  $('.hero-full-container a').offset().top + 100,
         
        function nav(){
            top = $(window).scrollTop();
            //top = window의 스크롤 올리고 내릴때의 top위치
            
            if(top > $spotHeight){*/

$(function () {

    var $spotHeight = $('header').offset().top;
    var top;

    function nav() {
        top = $(window).scrollTop();
        if (top > $spotHeight) {
            $('header').addClass('active');
            $('header > article h1').addClass('active');


            //모바일 크기 조정
            if ($(window).width() < 480) {
                $('.menu-trigger').css({
                    'transform': 'translateY(20%)'
                });

            } else if ($(window).width() > 480 && $(window).width() < 768) {
                $('.menu-trigger').css({
                    'transform': 'translateY(-50%)'
                });
            } else if ($(window).width() > 768) {
                $('.menu-trigger').css({
                    'transform': 'translateY(-100%)'
                });
            }

        } else {
            $('header').removeClass('active');
            $('header > article h1').removeClass('active');

            //모바일 크기 조정
            if ($(window).width() < 480) {
                $('.menu-trigger').css({
                    'transform': 'translateY(100%)'
                });

            } else if ($(window).width() > 480 && $(window).width() < 768) {
                $('.menu-trigger').css({
                    'transform': 'translateY(0%)'
                });
            } else if ($(window).width() > 768) {
                $('.menu-trigger').css({
                    'transform': 'translateY(10%)'
                });
            }


        }
    }
    $(window).on('scroll', nav);


});


$(function () {
    $('.sch_1').on('click', function () {
        alert('죄송합니다. 빠른 시일내로 준비하도록 하겠습니다.')
    });

    $('.tran').mouseleave(function () {
        $('.sch_1').children('span').fadeOut(500);
    });
  
    //end
});
