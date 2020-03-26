var userscore=0;
var compscore=0;
for(var i=0;i<3;i++){
  document.querySelectorAll("i")[i].addEventListener("click",handleclick);
}
function handleclick(){
  var temp = this.id;
  if(temp==="i1"){
    var userchoice=1;
    var compchoice=Math.floor(Math.random()*(3)+1);
    game(compchoice,userchoice);
  }
  if(temp==="i2"){
    var userchoice1=2;
      var compchoice1=Math.floor(Math.random()*(3)+1);
    game(compchoice1,userchoice1);
  }
  if(temp==="i3"){
    var userchoice2=3;
      var compchoice2=Math.floor(Math.random()*(3)+1);
    game(compchoice2,userchoice2);
  }
}

function game(comp,user){
  if(user===1){
    if(comp===1){
    document.querySelector("#result").innerHTML="🚩 Its a draw 🚩";
    document.querySelector("#user").innerHTML=userscore;
    document.querySelector("#comp").innerHTML=compscore;
    }
    if(comp===2){
    document.querySelector("#result").innerHTML=" Comp Won 🚩";
    compscore++;
    document.querySelector("#user").innerHTML=userscore;
    document.querySelector("#comp").innerHTML=compscore;
    }
    if(comp===3){
    document.querySelector("#result").innerHTML=" 🚩 You Won";
    userscore++;
    document.querySelector("#user").innerHTML=userscore;
    document.querySelector("#comp").innerHTML=compscore;
    }
  }
  if(user===2){
    if(comp===1){
    document.querySelector("#result").innerHTML=" 🚩 You Won";
    userscore++;
    document.querySelector("#user").innerHTML=userscore;
    document.querySelector("#comp").innerHTML=compscore;
    }
    if(comp===2){
      document.querySelector("#result").innerHTML="🚩Its a draw🚩";
      document.querySelector("#user").innerHTML=userscore;
      document.querySelector("#comp").innerHTML=compscore;
    }
    if(comp===3){
      document.querySelector("#result").innerHTML=" Comp Won 🚩";
      compscore++;
      document.querySelector("#user").innerHTML=userscore;
      document.querySelector("#comp").innerHTML=compscore;
    }
  }
  if(user===3){
    if(comp===1){
      document.querySelector("#result").innerHTML=" Comp Won 🚩";
      compscore++;
      document.querySelector("#user").innerHTML=userscore;
      document.querySelector("#comp").innerHTML=compscore;

    }
    if(comp===2){
    document.querySelector("#result").innerHTML=" 🚩 You Won";
    userscore++;
    document.querySelector("#user").innerHTML=userscore;
    document.querySelector("#comp").innerHTML=compscore;
    }
    if(comp===3){
    document.querySelector("#result").innerHTML="🚩Its a draw🚩";
    document.querySelector("#user").innerHTML=userscore;
    document.querySelector("#comp").innerHTML=compscore;
    }
  }
}
