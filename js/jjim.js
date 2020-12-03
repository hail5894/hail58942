$(function () {
    //start  
    setTimeout(function () {
        var type, types = JSON.parse(localStorage.getItem('type')) || [];
        var fix, fixed = JSON.parse(localStorage.getItem('fix')) || [];
        var cart, carts = JSON.parse(localStorage.getItem('cart')) || [];
        
        console.log(fixed);
        
        $('button .heart').on('click', jjim);
        $('button #ex').on('click', carted);
        $('.m_1').on('click',fix_1);
        $('button .button_sch').on('click',function(){
        alert('죄송합니다. 빠른 시일내로 준비하도록 하겠습니다.')
        });  
 
        
        //fix
        function fix_1(e) {
            fix = $(this).attr('data-type');
            fixed.push(fix);
            localStorage.setItem('fix', JSON.stringify(fixed));

            fixed.sort(); 
            
        }


            
        //jjim
        //var a=1은 flase 0=true임 true될때 실행
        function jjim(e) {
           e.preventDefault();
            var a =1;
            type = $(this).parents('.m_1').attr('data-type');
            if(types==''){
                types.push(type);
                localStorage.setItem('type', JSON.stringify(types));
                alert('찜 목록에 추가 되었습니다.');
            }else{
                 types.forEach(function (i) {
                    if (type === i) {
                        alert('이미 처리되었습니다.');
                        a = 0;
                    } 
                 });
                 if(a){
                    types.push(type);
                    localStorage.setItem('type', JSON.stringify(types));
                    alert('찜 목록에 추가 되었습니다.');
                }
            }
        }
      
       
        
        //cart
        function carted(e) {
            console.log('a');
            e.preventDefault();
            cart = $(this).parents('.m_1').attr('data-type');
            var a =1;
            if(carts==''){
                carts.push(cart);
                localStorage.setItem('cart', JSON.stringify(carts));
                alert('장바구니에 추가 되었습니다.');
            }else{
                 carts.forEach(function (i) {
                    if (cart === i) {
                        alert('이미 처리되었습니다.');
                        a = 0;
                    } 
                 });
                 if(a){
                    carts.push(cart);
                    localStorage.setItem('cart', JSON.stringify(carts));
                    alert('장바구니에 추가 되었습니다.');
                }
            }

            }



    }, 100);

    //end    
})
