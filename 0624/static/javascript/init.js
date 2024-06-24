
//초기세팅
let boardInit;   //게임판초기화함수
let stateInit;  //게임현황 초기화 함수
let imgLocation; //이미지 배치 함수
let start;  //게임시작 함수

let score=0;
let time=0;
let clickCount=0;
const imgName=["두리안.jpg","람부탄.jpg","망고.jpg","바나나.jpg","배.png","수박.jpg","용과.jpg","자두.jpg","파파야.jpg"]
let imgPlace=[];
let selectImg=[];
let imgCount=6;
$(function(){
    boardInit();
    $("#start").click(start);
});

boardInit= function(){
    $(".item").each(function(i,v){
        $(this).find("img").addClass("hide");
       $(this).append('<div class="itemHide"></div>');
    });
};

start=function(){
    stateInit();
    imgLocation();
    $(".item").on("click",imgClick);
    timeStart();

};
stateInit=function(){
    $("#gameStart").addClass("hide");
    $("#state").removeClass("hide");
    $("#score").text(`점수:${score}점`);
    $("#step").text(`${time}초`);
    $("#click").text(`클릭횟수:${clickCount}/30`);
}
imgLocation=function(){
    var temp=[];
    while(temp.length !=imgCount){
        var tempNum=Math.floor(Math.random()*imgName.length);
        if(temp.indexOf(tempNum)==-1)
            temp.push(tempNum);
    }
   imgPlace=temp.concat(temp);
   console.log(imgPlace);
   imgPlace=shuffle();
   $(".item").each(function(i){
    $(this).find("img").attr("src","./static/image/"+imgName[imgPlace[i]]);
    $(this).find("img").removeClass("hide");
   });
  setTimeout(function(){
    $(".item>img").addClass("hide");
  },1000);
   
}
function shuffle(){
   for(var i=imgPlace.length-1; i>0; i--){
    var j =Math.floor(Math.random()*(i+1));
    var t=imgPlace[i];
    imgPlace[i]=imgPlace[j];
    imgPlace[j]=t;
   }
   return imgPlace;
}