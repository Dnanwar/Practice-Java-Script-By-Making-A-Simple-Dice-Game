function diceRoll(){
    //alert("Button Pressed");
    var num1=document.querySelector(".dice-body .dots");
    var num2=document.querySelector(".second-dice .dots");


    var one="<div class='one'></div>";
    var two="<div class='three1'></div><div class='three3'></div>"
    var three="<div class='three1'></div><div class='one'></div><div class='three3'></div>"
    var five="<div class='five-top-rigth'></div><div class='five-bottom-left'></div>"+three;
    var four="<div class='three1'></div><div class='three3'></div><div class='five-top-rigth'></div><div class='five-bottom-left'></div>"
    var six=four+"<div class='six-mid-1'></div><div class='six-mid-2'></div>"
    
    var arr=[one,two,three,four,five,six];

    var val1=Math.floor(Math.random() * 6);
    num1.innerHTML=arr[val1];

    var val2=Math.floor(Math.random() * 6);
    num2.innerHTML=arr[val2];

    var msg=document.querySelector("h1");
    if(val1==val2){
         msg.innerHTML="Draw";
    }
    if(val1>val2){
        msg.innerHTML="Player-1 Wins";
    }
    if(val1<val2){
     msg.innerHTML="Player-2 Wins";
}

}