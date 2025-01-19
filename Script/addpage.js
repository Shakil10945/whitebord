var x = 0;
document.addEventListener("DOMContentLoaded", Action);
function UniqueName(){
    var now = new Date();
    month = now.getMonth()+1;
    date = now.getDate();

    year = now.getFullYear();

    time = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();


    canvasName = `D${date}${month}${year}T${time}${min}${sec}.png`;
    return canvasName;
}


function Action(){
document.addEventListener("keypress",function(e){
var kye = e.key;

if(kye == "n" || kye == "N"){
    x++;
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    

    var data  = canvas.toDataURL();
    // console.log(data); 
    console.log(x);
    localStorage.setItem(x,data);
    ctx.fill();
    ctx.fillStyle = "black"; 
    ctx.fillRect(0,0,canvas.width,canvas.height);   
}

if(kye == "D" || kye == "d"){
  
    
    localStorage.clear();
    console.log("D");
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fill();
    x=0;    
    
    
    
}
if(kye == "Q" || kye == "q"){
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "White";
    ctx.strokeStyle ="White";
    var text = prompt("How are you ?");
    var dimention = prompt("x,y,Size");
    var array = dimention.split(',');
    var xx = array[0];
    var yy = array[1];
    var Size = array[2];
    
    ctx.font = `${Size}px Li Oporajita Unicode`;
    

    ctx.fillText(`${text}`,xx,yy);
}
if(kye == "z" || kye == "Z"){
if(localStorage.length == x){
    x++;
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    
    var data  = canvas.toDataURL();
    // console.log(data); 
    
    localStorage.setItem(x,data);
}

if(x>1){
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    

    x = x-1;
    console.log("x"+x);

var imag = new Image();
var getData = localStorage.getItem(x);
imag.addEventListener("load",function(e){
    ctx.drawImage(imag,0,0,canvas.width,canvas.height);
});

imag.src = getData;
console.log(x);

}else{
    console.log("else");
    console.log("x"+x);

    

}

}
if(kye == "I"|| kye == "i"){
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
   var name = prompt("Name");
   
   console.log("HI");
   
   var img = new Image();
   img.sec = `${name}`;
   img.addEventListener("load",function(){
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
   });
}
if(kye == "x" || kye == "X"){

var total =localStorage.length;
if(x < total){
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    console.log("x"+x);

    x = x+1;

var imag = new Image();
var getData = localStorage.getItem(x);
imag.addEventListener("load",function(e){
    ctx.drawImage(imag,0,0,canvas.width,canvas.height);
});

imag.src = getData;
console.log(x);
}
else{
    console.log("else");
    console.log("x"+x);

    
}
}
if(kye == "u"){
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    console.log(UniqueName());

    var data  = canvas.toDataURL();
    // console.log(data); 
    
    localStorage.setItem(x,data);
    console.log("U");
}

});
}
