console.log("working");

//bg color change function
var x=document.getElementsByClassName("big")
function colorchange(color){
  console.log("working");
  x[0].style.backgroundColor=color;
}

//counter function
var i=0;
function increase(){
  if(i<20){
    i++;
    document.getElementById("count").innerHTML=i;
  }
}
function decrease(){
  if(i>-20){
    i--;
    document.getElementById("count").innerHTML=i;
  }
}

//countdown
function countdown(){
  console.log("working");
  var target= window.prompt("please enter date in given format","YYYY-MM-DD");
  target=new Date(target).getTime();
  var da = new Date();
   var n = da.getTimezoneOffset();
  setInterval(function(){
    var current = new Date().getTime();
    var diff= target-current;
    diff=diff+n*60*1000;
    var days= Math.floor(diff/(1000*60*60*24));
    var hours= Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    var mins= Math.floor((diff%(1000*60*60))/(1000*60));
    var sec= Math.floor((diff%(1000*60))/(1000));
    document.getElementById("countdown").innerHTML = days + " days " + hours + " hours "
    + mins + " mins " + sec + " sec ";
    if(diff<0){
      clearInterval();
      document.getElementById("countdown").innerHTML= "time up"
    }
  },1000);
}

//tip CALCULATOR
function tipcalculator(){
  console.log("working");
  var am=Number(document.getElementById("amount").value);
  var percent=Number(document.getElementById("percent").value);
  var tip= am*percent/100;
  document.getElementById("tip").value=tip.toFixed(2) ;
  am=am+tip;
  document.getElementById("total").value= am.toFixed(2) ;
}

//to do app
var taskList=document.getElementsByTagName('li');
var i;
for(i=0;i<taskList.length;i++){
  var span=document.createElement("span");
  var closebtn=document.createTextNode("\u00D7");
  span.className="close";
  span.appendChild(closebtn);
  taskList[i].appendChild(span);
}
var close= document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
  close[i].onclick=function(){
    var div=this.parentElement;
    div.style.display="none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
function addtask(){
  var li=document.createElement("li");
  var txt = document.getElementById("mytask").value;
  var text=document.createTextNode(txt);
  li.appendChild(text);
  document.getElementById("tasklist").appendChild(li);
  document.getElementById("mytask").value="";
  var span=document.createElement("span");
  var closebtn=document.createTextNode("\u00D7");
  span.className="close";
  span.appendChild(closebtn);
  li.appendChild(span);
  var close= document.getElementsByClassName("close");
  var i;
  for(i=0;i<close.length;i++){
    close[i].onclick=function(){
      var div=this.parentElement;
      div.style.display="none";
    }
  }
}
