$(function(){
    $("#signup").on('click',requiredCheck);
});

function requiredCheck(){
   var id=$("#userId");
   var pw=$("#userPw");
   var re=$("#pwRe");
   var email=$("#email");
   var tel=$("#tel");
   var addr=$("#addr");
   
   if(id.val()==''){
    alert("아이디 입력하세요");
    id.focus(); 
   }else if(pw.val()==''){
    alert("비밀번호를 입력하세요");
    pw.focus();  re.val('');
   }else if(re.val()==''){
    alert("비밀번호 다시 입력해주세요");
    re.focus();
   }else if(pw.val()!=re.val()){
    alert("비밀번호가 잘못되었습니다.");
    pw.val(''); re.val('');
    pw.focus();
   }else if(email.val()==''){
    alert("이메일 입력하세요");
    email.focus();
   }else if(tel.val()==''){
    tel.focus();
   }else if(addr.val()==''){
    alert("주소를 입력하세요");
    addr.focus();
   }else{
    $("#signupForm").submit();
   }
}