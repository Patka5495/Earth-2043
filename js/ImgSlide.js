var ImgSlide1 = function(){
    var bannerLeft=0;
    var bannerLeft2=0;
    var first=1;
    var first2=1;
    var last;
    var last2;
    var imgCnt=0;
    var imgCnt2=0;
    var $img = $(".modelingImg1 img");
    var $img2 = $(".modelingImg2 img");


    $img.each(function(){   // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left",bannerLeft);
        bannerLeft += $(this).width()+5;
        $(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가
    });
    $img2.each(function(){   // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left",bannerLeft2);
        bannerLeft2 += $(this).width()+5;
        $(this).attr("id", "banner2"+(++imgCnt2));  // img에 id 속성 추가
    })

    if( imgCnt > 2){
    last = imgCnt;
    last2 = imgCnt2;
    console.log(last);
    setInterval(function() {
        $img.each(function(){
            $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
        });
        $first = $("#banner"+first);
        $last = $("#banner"+last);
        if($first.position().left < -200) {    // 제일 앞에 배너 제일 뒤로 옮김
            $first.css("left", $last.position().left + $last.width()+5 );
            first++;
            last++;
            if(last > imgCnt) { last=1; }   
            if(first > imgCnt) { first=1; }
        }
        $img2.each(function(){
            $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
        });
        $first2 = $("#banner2"+first2);
        $last2 = $("#banner2"+last2);
        if($first2.position().left < -200) {    // 제일 앞에 배너 제일 뒤로 옮김
            $first2.css("left", $last2.position().left + $last2.width()+5 );
            first2++;
            last2++;
            if(last2 > imgCnt2) { last2=1; }   
            if(first2 > imgCnt2) { first2=1; }
        }
    }, 5);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 
    }
}
$(document).ready(function(){    
    ImgSlide1();
});