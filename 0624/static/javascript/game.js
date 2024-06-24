function timeStart(){
    setInterval(function(){
        time++;
        $("#step").text(`${time}초`);
    },1000);
}
function imgClick(){
    var idx=$(".item").index($(this));
    var $clickImg=$(".item").eq(idx).find("img");
    $clickImg.removeClass("hide");
    $clickImg.addClass("select");
    if(selectImg.length==1){
        if(selectImg[0].div==idx) return;
    }
    selectImg.push({이미지:imgPlace[idx],div:idx});
    if(selectImg.length==2){
        if(matching()){
            score++;
            $(".item").eq(selectImg[0].div).find("img").removeClass("select");
            $(".item").eq(selectImg[1].div).find("img").removeClass("select");
            $(".item").eq(selectImg[0].div).off("click");
            $(".item").eq(selectImg[1].div).off("click");

            selectImg=[];
        }else{
            setTimeout(function(){
             $(".item").eq(selectImg[0].div).find("img").removeClass("select");
             $(".item").eq(selectImg[1].div).find("img").removeClass("select");
             $(".item").eq(selectImg[0].div).find("img").addClass("hide");
             $(".item").eq(selectImg[1].div).find("img").addClass("hide");
             selectImg=[];
            },1000);
        }
        updateState();

    }
    function updateState(){
        clickCount++;
        $("#score").text(`점수:${score}점`)
        $("#click").text(`클릭횟수:${clickCount}/30`);

        if(clickCount==31){
            $(".item").off("click");
            alert("횟수초과로 게임오버")
        }

    }

}

function matching(){
    if(selectImg[0].이미지==selectImg[1].이미지)
        return true;
    else
        return false;
}