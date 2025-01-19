var canvas = document.querySelector("canvas");
        canvas.width =window.innerWidth;
        console.log(canvas.width);
        console.log(canvas.height); 
        
        canvas.height = window.innerHeight-5;
        var ColorVariable;

        
        document.addEventListener("DOMContentLoaded", Action);
        document.addEventListener("keypress",function(event) {
            var text = event.key;
            if(text == "S"){
                var aTag = document.createElement("a");
                aTag.href = canvas.toDataURL();
                aTag.download = `${Date.now()}.png`;
                aTag.click();
            }
        });
        var radius = 2;

        function Action() {


            
            

        canvas.addEventListener("touchstart",TouchStart);
        canvas.addEventListener("touchmove",TouchMove);
        canvas.addEventListener("touchend",TouchEnd);

        document.addEventListener("keypress",K);
        function K(e){
            var kye = e.key;
            if(kye == "w"){
                ColorVariable = "White";
                radius=2;

            }
            else if(kye == "b"){
                ColorVariable = "Black";
                radius = 20;
            }
            else if(kye == "r"){
                ColorVariable = "#FF1A6A";
                radius = 2;
            }
            else if(kye == "g"){
                ColorVariable = "#11FF00";
                radius = 2;
            }
            else if(kye == "y"){
                ColorVariable = "#F5D924";
                radius = 2;
            }
            else if(kye == "A"){
                var ctx = canvas.getContext("2d");
                ctx.fillRect(0,0,canvas.width,canvas.height);
                ctx.fillStyle = "black";
                ctx.fill();    
            }
            
        }
    }

        
        
         var Reservation = [];
        var Reservation2 = [];
      

        
        function TouchStart(event) {
            event.preventDefault();
            var canvas = document.querySelector("canvas");
            var ctx = canvas.getContext("2d");
            var t = event.changedTouches;
            var color = ColorVariable;
            
            for(let i = 0; i <t.length; i++) {
                ctx.beginPath();
                console.log(t[i]);
                Reservation.push(t[i]);
                console.log(t[i].offsetX);
                ctx.arc(t[i].pageX, t[i].pageY,radius, 0, 2 * Math.PI);
                ctx.fillStyle = color;
                ctx.fill();
                
                   
            }
            
        }
        function TouchMove(event){
            event.preventDefault();
            var canvas = document.querySelector("canvas");
            var ctx = canvas.getContext("2d");
            var t = event.changedTouches;
            for(let i = 0; i <t.length; i++) {
                ctx.beginPath();
                    Reservation.push(t[i].pageX);
                Reservation2.push(t[i].pageY);
                var x1 = Reservation[Reservation.length-2];
                var x2 = Reservation[Reservation.length-1]; 
                var y1 = Reservation2[Reservation2.length-2];
                var y2 = Reservation2[Reservation2.length-1];
                var midx = (x1+x2)/2;
                var midy = (y1+y2)/2;

                ctx.arc(midx, midy ,radius, 0, 2 * Math.PI);
                ctx.arc((x1+midx)/2, (y1+midy)/2 ,radius, 0, 2 * Math.PI);
                ctx.arc((x2+midx)/2, (y2+midy)/2 ,radius, 0, 2 * Math.PI);
                var halfmidx = (x1+midx)/2;
                var halfmidy = (y1+midy)/2;
                ctx.arc((x1+halfmidx)/2, (y1+halfmidy)/2 ,radius, 0, 2 * Math.PI);
                ctx.arc((midx+halfmidx)/2, (midy+halfmidy)/2 ,radius, 0, 2 * Math.PI);

                var halfmidx2 = (x2+midx)/2;
                var halfmidy2 = (y2+midy)/2;
                ctx.arc((x2+halfmidx2)/2, (y2+halfmidy2)/2 ,radius, 0, 2 * Math.PI);
                ctx.arc((midx+halfmidx2)/2, (midy+halfmidy2)/2 ,radius, 0, 2 * Math.PI);

                var qux = (x1+halfmidx)/2;
                var quy = (y1+halfmidy)/2;
                var qux2 = (midx+halfmidx)/2;
                var quy2 = (midy+halfmidy)/2;

                ctx.arc((halfmidx+qux2)/2, (halfmidy+quy2)/2 ,radius, 0, 2 * Math.PI);
                ctx.arc((qux2+midx)/2, (quy2+midy)/2 ,radius, 0, 2 * Math.PI);

                ctx.arc((x1+qux)/2, (y1+quy)/2 ,radius, 0, 2 * Math.PI);
                ctx.arc((qux+halfmidx)/2, (quy+halfmidy)/2 ,radius, 0, 2 * Math.PI);



                var qux3 = (x2+halfmidx2)/2;
                var quy3 = (y2+halfmidy2)/2;
                var qux4 = (midx+halfmidx2)/2;
                var quy4 = (midy+halfmidy2)/2;

                ctx.arc((halfmidx2+qux3)/2, (halfmidy2+quy3)/2 ,radius, 0, 2 * Math.PI);
                ctx.arc((qux3+x2)/2, (quy3+y2)/2 ,radius, 0, 2 * Math.PI);

                ctx.arc((midx+qux4)/2, (midy+quy4)/2 ,radius, 0, 2 * Math.PI);
                ctx.arc((qux4+halfmidx2)/2, (quy4+halfmidy2)/2 ,radius, 0, 2 * Math.PI);




                ctx.arc(t[i].pageX, t[i].pageY,radius, 0, 2 * Math.PI);
                
                ctx.fill();
                
                
                   
            }

            // ;[...t].forEach(x => {
            //     ctx.beginPath();
            
                
            //     var x1 = Reservation[Reservation.length-2];
            //     var x2 = Reservation[Reservation.length-1]; 
            //     var y1 = Reservation2[Reservation2.length-2];
            //     var y2 = Reservation2[Reservation2.length-1];
            //     var onex = (x1+x2)/20;
            //     var oney = (y1+y2)/20;
                
            //     // ctx.arc(onex*9,oney*9,radius, 0, 2 * Math.PI);
            //     // ctx.arc(onex*8,oney*8,radius, 0, 2 * Math.PI);
            //     // ctx.arc(onex*7,oney*7,radius, 0, 2 * Math.PI);
            //     // ctx.arc(onex*6,oney*6,radius, 0, 2 * Math.PI);
            //     ctx.arc(onex*10,oney*10,radius, 0, 2 * Math.PI);
            //     // ctx.arc(onex*4,oney*4,radius, 0, 2 * Math.PI);
            //     // ctx.arc(onex*3,oney*3,radius, 0, 2 * Math.PI);
                
            //     // ctx.arc(onex*1,oney*1,radius, 0, 2 * Math.PI);
            //     ctx.arc(x.pageX, x.pageY,radius, 0, 2 * Math.PI);0
                
               

                

                
                
            //     ctx.fill();
            //     ctx.stroke();               
            // });
            console.log("Move");
        }
        function TouchEnd(event){
            event.preventDefault();
            var canvas = document.querySelector("canvas");
            var ctx = canvas.getContext("2d");
            var t = event.changedTouches;
            ;[...t].forEach(x => {
                ctx.beginPath();
                
                ctx.arc(x.pageX, x.pageY, radius, 0, 2 * Math.PI);
                
                
                ctx.fill();  
                             
            });

        }