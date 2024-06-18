let endCount=0;
let play분=0; 
let play초=0;
let time=0;
let bingo=[];


$(function(){
    $("#start").click(start);

    // var tdClick=document.getElementsByClassName("num");
    // for(var i=0; i<tdClick.length; i++){
    //     tdClick[i].addEventListener('click',function(){alert("클릭");});
    // }
    $(".num").click(bingoCheck);
       


});

function bingoCheck(){
    $(this).css('background','black');
    $(this).css('color','white');
}

function start(){
    $(this).hide();
    $("#screen").show();
    $("#ok").text(endCount);
    
    $("#playTime").text('00:00');
    time=setInterval(function(){
        play초++;
       if(play초==60){
        play분++;
        play초=0;
       } 
        var 초Text=play초<=9? '0'+play초:play초;
        var 분Text=play분<=9? '0'+play분:play분;

        var timeText=`${분Text}:${초Text}`;
   
        $("#playTime").text(timeText);

 },1000);


   init();
   draw(); 

}

function init(){
    while(bingo.length !=25){
        var tmp=Math.floor(Math.random()*50)+1;
        if(bingo.indexOf(tmp)==-1)
            bingo.push(tmp);
        
        

    }
}

function draw(){
   var td= $(".num");
   console.log(td);
   for(var i=0; i<td.length;i++){
    td.eq(i).text(bingo[i]);
   }
}