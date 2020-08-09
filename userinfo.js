function user_name(){
let user_name_store=document.getElementById("input");
console.log(user_name_store.value)
user_name_store.value=" "
location.href="quiz.html"
return user_name_store


}
function user(){
let user_name_store=document.getElementById("input").value;
let p=document.getElementById("welcome_user");
p.innerHTML=user_name_store}
