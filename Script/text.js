var btn11 = document.querySelector("#btn11");
var btn12 = document.querySelector("#btn12");

btn11.addEventListener("click",function(){
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.strokeStyle ="black";
    var text = prompt("How are you ?");
    var dimention = prompt("x,y,Size");
    var array = dimention.split(',');
    var x = array[0];
    var y = array[1];
    var Size = array[2];
    console.log(x);
    ctx.font = `${Size}px Li Oporajita Unicode`;
    ctx.fillText(`${text}`,x,y);
    
    
});
btn12.addEventListener("click",function(){

    var x = Math.floor(Math.random()*136)*10;
    var y= Math.floor(Math.random()*80)*10;
    console.log(y);
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    console.log(x);
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.fill();
});