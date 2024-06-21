

const com=["scissors.png","rock.png","paper.png"];
let record=[];
let comHd=0;
let comSelect=0;


$(function(){

    $("#comImg").attr('src','./static/image/'+com[0]);

    $("#game").click(startAndStop);
});

function startAndStop(){

    if($(this).text()==='종료'){
        $(this).text("시작"); 
        clearInterval(comHd);
        $(".userImg").off('click');
    }
    else{
    $(this).text("종료");
    comStart();


    $(".userImg").click(userSelect);

    }
}
function userSelect(){
    var idx=$(".userImg").index($(this));

    $(this).css('border','1px solid white');

    $(this).css('border','');

    }
function comStart(){
    comHd=setInterval(function(){

        if(comSelect==2) comSelect=-1;
        $("#comImg").attr('scr','./static/image/'+com[++comSelect]);
    },100);
}