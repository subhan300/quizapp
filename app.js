
let question_array=[
{question : "what is the name of your city ? ",
answer : "karachi",  options:["islamabad","karachi","lahore"] },

{question : "what is your name ? ",
answer : "subhan",  options:["islamabad","subhan","salman"]},
{question : "what is your favourite book ? ",
answer : "maths",  options:["physics","chemistry","maths"]}


]
let question_count=0
let score=0
function next_btn(){


let user_ans=document.querySelector("p.optionsc.active").innerHTML
if(user_ans==question_array[question_count].answer){
   score +=10

   console.log(score)
  
}
if(question_count==question_array.length-1){
  alert("your score is" + score)
    location.href="endpage.html"
   
    }
    
    
question_count++
question_show(question_count)
removeactive()

}


function question_show(q){
    let target_question=document.getElementById("question")
    let put_question=question_array[q].question;
    target_question.innerHTML=put_question
    // oper question chl gaya ap options donga

    var optionsc=document.getElementsByClassName("optionsc")
   
     for(let i=0;i<optionsc.length;i++){
       
    

    optionsc[i].innerHTML=question_array[q].options[i]}
}

function addactive(e){
   removeactive()
    e.classList.add("active")
}
   
function removeactive(){
let optionsac=document.getElementsByClassName("active")

for(let i=0;i<optionsac.length;i++){
      optionsac[i].classList.remove("active")
      

}

}
    //   target_options.innerHTML=` <p class="card-text" id="optionsid1" class="optionsc"  >${question_array[0].options[0]}</p>
    //   <p class="card-text" id="optionsid2" class="optionsc" > ${question_array[0].options[1]}</p>
    //   <p class="card-text" id="optionsid3" class="optionsc" >${question_array[0].options[2]} </p>`
