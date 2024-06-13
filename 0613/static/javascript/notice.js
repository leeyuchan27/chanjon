
$(function(){

    $("#detail").keyup(function(){
       if($("#detail").val().length>=5){
        $("#save").removeAttr('disabled');
       }else{
        $("#save").attr('disabled','disabled');
       }
    });
// $(function(){
    $("#save").click(function(){
        let text=$("#detail").val();
        addList(text);
    //     if(text===''){
    //         alert("내용을 입력하세요");
    //         $("#detail").focus();
    //         return;
    //     }
    // });
});

});

function addList(text){
    $("#list").append('<li>'+text+'</li>');
}