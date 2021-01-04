$(function () {
    //start  


    //속성
    $.ajax({
        url: 'xml/sub2_shop.xml',
        type: 'GET',
        //GET 데이터를 url문서로 보내서 명령처리를하고 ..있으나마나,,
        data: {},
        //data a라는 변수에 10보낼때?
        beforeSend: function () {
            //로드를 하기전 상태 →로딩중:이미지 넣을때?
            $('.loading').fadeIn();
        },

        complete: function () {
            //문서를 로드한 후 상태 / 로딩중을 삭제
            $('.loading').fadeOut();
        },
        success: function (e) {
            //문서가 로드성공후 정상적으로 사용할 수 있을때

            var product = '',
                pro_1 = '',
                pro_2 = '',
                pro_3 = '',
                type, kind, url, imgSrc, tit_1, tit_2, price, review, event, num;
            //re(리뷰 링크는 나중에)
            var jjim = JSON.parse(localStorage.getItem('type'));
            var fix_1 = JSON.parse(localStorage.getItem('fix'));
            var carted = JSON.parse(localStorage.getItem('cart'));
            console.log(fix_1)

            function funList(code) {
                product = '';
                pro_1 = '';
                pro_2 = '';
                pro_3 = '';

                $(e).find('item').each(function (i) {
                    //        console.log($(data).find('item'));

                    type = $(this).find('type').text();
                    kind = $(this).find('kind').text();
                    url = $(this).find('url').text();
                    imgSrc = $(this).find('imgSrc').text();
                    tit_1 = $(this).find('tit_1').text();
                    tit_2 = $(this).find('tit_2').text();
                    price = $(this).find('price').text();
                    review = $(this).find('review').text();
                    event = $(this).find('event').text();
                    num = $(this).find('num').text();

                    
                    /*---------jjim----------------------------*/
                    //jjim한거 jjim.html 추가
                    if (jjim != null) {
                        jjim.forEach(function (key, value) {
                            if (key == num) {
                                //jjim
                                pro_1 += "<div class='m_1 event col-md-3 col-sm-6 col-xs-12' data-type='" + num + "'>"
                                pro_1 += "<div class='m_1-1'>"
                                pro_1 += "<figure class='description'>"
                                pro_1 += "<a href='sub2_shop_de.html'>"
                                pro_1 += "<p><img src='" + imgSrc + "' alt=''></p></a>"
                                if (!code == event) {
                                    pro_1 += '';
                                } else {
                                    pro_1 += "<span>" + event + "</span>";
                                }
                                pro_1 += "<figcaption>"
                                pro_1 += "<div class='section1'>"
                                pro_1 += "<p class='review'><a href='sub3_review.html'>후기글:" + review + "</a></p>"
                                pro_1 += "<div class='button'>"
                                pro_1 += "<button><img src='img/icon_sch1.png' alt=''></button>"
                                pro_1 += "<button><img class='heart active' src='img/icon_heart1.png' alt=''></button>"
                                pro_1 += "<button><img src='img/icon_cart1.png 'alt=''></button></div></div>"

                                pro_1 += "<div class=section2>"
                                pro_1 += "<p>" + tit_1 + "</p>"
                                pro_1 += "<p>" + tit_2 + "</p>"
                                pro_1 += "<strong>" + price + "</strong></div></figcaption></figure>"
                                pro_1 += "<div class='buy_now'>"
                                pro_1 += "<a href='#'>BUY NOW</a>"
                                pro_1 += "<a href='sub2_shop_de.html'>VIEW MORE</a>"
                                pro_1 += "</div></div></div>"
                            }
                        });
                        $('.jjim_2').html(pro_1);
                    }
                    
                    
                    /*----------cart-------------*/
                      if (carted != null){
                        carted.forEach(function (key, value) {
                            if (key == num) {
                                //jjim
                                pro_3 += "<div class='m_1 event col-md-3 col-sm-6 col-xs-12' data-type='" + num + "'>"
                                pro_3 += "<div class='m_1-1'>"
                                pro_3 += "<figure class='description'>"
                                pro_3 += "<a href='sub2_shop_de.html'>"
                                pro_3 += "<p><img src='" + imgSrc + "' alt=''></p></a>"
                                if (!code == event) {
                                    pro_3 += '';
                                } else {
                                    pro_3 += "<span>" + event + "</span>";
                                }
                                pro_3 += "<figcaption>"
                                pro_3 += "<div class='section1'>"
                                pro_3 += "<p class='review'><a href='sub3_review.html'>후기글:" + review + "</a></p>"
                                pro_3 += "<div class='button'>"
                                pro_3 += "<button><img src='img/icon_sch1.png' alt=''></button>"
                                pro_3 += "<button><img class='heart active' src='img/icon_heart1.png' alt=''></button>"
                                pro_3 += "<button><img src='img/icon_cart1.png 'alt=''></button></div></div>"

                                pro_3 += "<div class=section2>"
                                pro_3 += "<p>" + tit_1 + "</p>"
                                pro_3 += "<p>" + tit_2 + "</p>"
                                pro_3 += "<strong>" + price + "</strong></div></figcaption></figure>"
                                pro_3 += "<div class='buy_now'>"
                                pro_3 += "<a href='#'>BUY NOW</a>"
                                pro_3 += "<a href='sub2_shop_de.html'>VIEW MORE</a>"
                                pro_3 += "</div></div></div>"
                            }
                        });
                        $('.cart_2').html(pro_3);
                    }
                    
                    
                    /*=============fix===================*/

                    if (fix_1 != null) {
                        fix_1.forEach(function (key, value) {
                            if (key == num) {
                                pro_2 += "<li><a href='sub2_shop_de.html'><img src='" + imgSrc + "' alt=''></a></li>"
                            }
                        });
                        $('.gd ul').html(pro_2);
                        $('.gd ul li:gt(2)').hide();
                    }

                    /*--------------------------*/

                    //index,shop 상품 업데이트
                    if (code == type || code == "all") {
                        if (num == 'p001') {
                            product += "<h2>BEST ITEM</h2>"
                        }

                        product += "<div class='m_1 event col-md-3 col-sm-6 col-xs-12' data-type='" + num + "'>"
                        product += "<figure class='description'>"
                        product += "<a href='sub2_shop_de.html'>"
                        product += "<p><img src='" + imgSrc + "' alt=''></p>"
                        product += "</a>"
                        if (!code == event) {
                            product += '';
                        } else {
                            product += "<span>" + event + "</span>";
                        }
                        product += "<figcaption>"
                        product += "<div class='section1'>"
                        product += "<p class='review'><a href='sub3_review.html'>후기글:" + review + "</a></p>"
                        product += "<div class='button'>"
                        product += "<button>"
                        product += "<img  class='button_sch' src='img/icon_sch1.png' alt=''>"
                        product += "</button>"
                        product += "<button>"
                        product += "<img class='heart' src='img/icon_heart1.png' alt=''>"
                        product += "</button>"
                        product += "<button>"
                        product += "<img id='ex' src='img/icon_cart1.png' alt=''>"
                        product += "</button></div>"
                        product += "</div>"
                        product += "<div class='section2'>"
                        product += "<p>" + tit_1 + "</p>"
                        product += "<p>" + tit_2 + "</p>"
                        product += "<strong>" + price + "</strong>"
                        product += "</div>"
                        product += "</figcaption>"
                        product += "</figure>"
                        product += "</div>"

                    }

                });

                //shop
                $('.wrap').html(product);

                //index
                $('.goods_1').html(product);
                $('.goods_1 .m_1:gt(7)').hide();






                if (code == "all") {
                    $('.shop_1 a h2').addClass('active');
                } else {
                    $('.shop_1 a h2').removeClass('active');
                }


                $('.shop_2 p a').removeClass('active');
                $(".shop_2 p a[href='" + code + "']").addClass('active');



            }

            funList("all");


            $('.shop_2 p a').on('click', function (e) {

                e.preventDefault();
                var type = $(this).attr('href');
                funList(type);
                history.pushState({
                    page: type
                }, 'pageHistory', '');


            });

            $(window).on('popstate', function () {
                var type;
                try {
                    type = history.state.page;
                } catch {
                    type = 'all';
                }

                funList(type);
            });

        }
    });
    //1. 제일먼저 잘들어오는지 확인할것->console.log('성공')으로 볼것 혹은 네트워크에 xml파일이 잘 들어오면 성공임


    //end    
})
