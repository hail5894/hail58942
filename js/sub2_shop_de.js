function init() {

    var slide = document.querySelector('.re_photo_ri_1 ul');
    var slide_1 = slide.querySelectorAll('li');
    var arrow = document.querySelectorAll('.pasing a');

    var idx = 0;


    /* 1 */

    arrow[0].addEventListener('click', prev);
    arrow[1].addEventListener('click', next);


    function prev(e) {
        e.preventDefault();
        if (idx != 0) {
            idx--;
        }
        update();
        slide.style = "left:" + (-idx * 100) + "%;";

        //   console.log(slide);

    }


    slide.style.transition = '1s';
    slide.style = "left:" + (-idx * 100) + "%;";

    function next(e) {
        e.preventDefault();
        slide.style.transition = '1s';
        if (idx != slide_1.length - 1) {
            idx++;
        }
        update();
        slide.style = "left:" + (-idx * 100) + "%;";

    }

    function update() {}

}

window.addEventListener('DOMContentLoaded', init);



/*----------------------------------*/
$(function () {


    //처음에 숨겨진 녀석들
    $('.product').hide();
    $('.hr_1').hide();

    var num = 0,
        trArr = [],
        aa = 0;
    // $("#add").change(onSelectChange);
    $("#add").on('change', onSelectChange);

    
    //태그 만드는 함수
    function fun() {
        var selected = $("#add option:selected");
        //1 비누추가를 눌렀을때
        if (selected.val() != 0) {
            $('.product').show();
            $('.hr_1').show();
            //계속해서 비누 추가할수 있게끔 output에 써놓고 뿌리기
            output += "<tr><td class='product_1'>";
            output += "<p> 대갈빡(1 장)<br>-<span>" + selected.text() + "</span></p></td>";
            output += " <td class='product_2'>";
            output += "<input type='hidden' name='sell_price' value='1'>";
            output += "<input type='text' name='amount' value='1' calss='input_1'>";
            output += "<span><a href='#'><img src='img/detail/btn_count_up.gif' alt=></a>";
            output += "<a href='#'><img src='img/detail/btn_count_down.gif' alt=''></a></span><a href='#' class='x'><img src='img/detail/btn_price_delete.gif'></a></td>";
            output += "<td class='product_3'><div><input type='hidden' class='product_3-1' value='30000'><p></p></div><span><img src='img/icon_cash.gif' alt=''>1,500원</span></div></td>";
            output += "</tr>";
        }
    }

    function onSelectChange(e) {
        //trArr 배열추가해서 각각 값을 더해주게끔 도와주는 함수
        trArr.push(aa);
        aa++;
        //뿌리는 함수, 클릭하는 함수 발동
        fun();
        
        //html 뿌리기 결과
        $("#output").html(output);
         arr();
        $('.product_3 p').html( toString(parseInt($('.product_3-1').val()))+'원');
        
        $('.product_2 span a').on('click', arr);
        
    

        //3.삭제 x버튼
        $('.x').on('click', function () {
            $(this).parents('tr').empty();
            //$('.num,.ea').remove();  
        });

    }

    //2. 숫자증감 클릭시 비누 개수,가격에 대해서..
    function arr(e) {
   
        //input 정의
        if (event.type == 'change') {
            //change 이벤트
            var v = 1;
            var $this = $('#output tr');
        }else{
            //클릭했을 때 이벤트
            var v = parseInt($(this).parents('span').prev().val());
            ($(this).index() == 0) ? v++ : v--;
            $(this).parents('span').prev().val(v);
            var $this = $(this).parents('tr');
            
             //input값에 대한 가격 합산
            num = 30000;
            var price = parseInt($(this).parents('span').prev().val());
            input = price * num;
            
            $this.find('.product_3 p').html(toString(input) + '원');
            $this.find('.product_3-1').val(input);
            var priceValue = parseInt($this.find('.product_3-1').val());
        }

        //결과 뿌리기
        var tot = 0;
        $.each(trArr, function (i, v) {
            tot += parseInt($('#output tr').eq(trArr[i]).find('.product_3-1').val())
            
        });
        
        $('.num').html(toString(tot));
        $('.ea').html("(" + v + "개)");

    }


    //3. 3자리 콤마찍기
    function toString(n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


});
