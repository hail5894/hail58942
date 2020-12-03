/*
function init() {

    var slide = document.querySelector('.slide div');
    var slide_1 = document.querySelectorAll('.slide_1');
    var arrow = document.querySelectorAll('.icon p');
    var circle = document.querySelector('.circle span');
    var idx = 0;




   //1

    arrow[0].addEventListener('click', prev);
    arrow[1].addEventListener('click', next);

    function prev() {
        if (idx != 0) {
            idx--;
        }
        update();
        slide.style = "left:" + (-idx * 100) + "%;";
        for (let i = 0; i < circle.children.length; i++) {
            if (idx == i) {
                circle.children[i].classList.add('active');
            } else {
                circle.children[i].classList.remove('active');
            }

        }

    }
    function next() {

        if (idx != slide_1.length - 1) {
            idx++;
        }
        update();
        slide.style = "left:" + (-idx * 100) + "%;";

        for (let i = 0; i < circle.children.length; i++) {
            if (idx == i) {
                circle.children[i].classList.add('active');

            } else {
                circle.children[i].classList.remove('active'); }

        }


    }
    function update() { }



    //2---setInterval---
    var move = 0;
    var lel = 0;
    circle.children[0].classList.add('active');
    slide.style.left = "-" + move + "%";
    
    function moveEvent() {
        setInterval(function () {
            slide.style.transition = '1s';
            move += 100;
            
            slide.style.left = "-" + move + "%";
            
          //  console.log(lel);
            lel++;
        for (let i = 0; i < circle.children.length; i++) {
                if (lel == i) {
                    circle.children[i].classList.add('active');

                } else if (lel == 4) {
                    circle.children[0].classList.add('active');
                    circle.children[i].classList.remove('active');
                } else {
                    circle.children[i].classList.remove('active');
                }
            }
          

            
            if (lel == slide_1.length) {

                setTimeout(function () {
                    lel = 0;
                    move = 0;
                    slide.style.transition = '0s';
                    slide.style.left = "-" + move + "%";
                  
                    circle.children[0].classList.add('active');

                }, 0)
            }
        }, 5000)
    }
    moveEvent();



    //2 FIX
    var aside = document.querySelector('.gd ul');
    


}

window.addEventListener('DOMContentLoaded', init);
*/

$(function () {
    $('.s_v1').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        //눈으로 보이는 슬라이드 개수
        slidesToScroll: 1,
        //버튼 누를때 바뀌는 슬라이드 개수 (한칸씩이동)
        autoplay: true,
        autoplaySpeed: 5000,

    });

  

    //2
  
});
