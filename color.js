alert("Connected");
var color=generateRandomColors(6);//get random colors on difficulty
var updated,newclick;
// var resetButclicked=false;
var reset=document.getElementById("reset");
reset.addEventListener("click", function()
{
    resetButclicked=true;
    color=generateRandomColors(6);
    updated=document.getElementById("updated");
    updated.textContent=color[randomNumber()];//randomNumber function;

    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color[i]; 
        // clicklisteners
        squares[i].addEventListener("click", function(){
            
            alert(this.style.backgroundColor);
            newclick=this.style.backgroundColor;
                   
            if(newclick!==updated.textContent)
            {
               alert("Wrong!!!");
               var Correct=document.getElementById("correct");
               Correct.textContent="Try again!!"
               this.style.backgroundColor="black";
            }
    
            else

            if(newclick===updated.textContent)
            { 
            var Correct=document.getElementById("correct");
            Correct.textContent="Correct!!"
            var colorWin=document.getElementById("colorWin");
            colorWin.style.backgroundColor="green";      
            }
        });
    }
    

})

var Correct=document.getElementById("correct");
Correct.textContent="All the best!!" 


updated=document.getElementById("updated");
updated.textContent=color[randomNumber()];//randomNumber function;




var squares=document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=color[i]; 
    // clicklisteners
    squares[i].addEventListener("click", function(){
        
        alert(this.style.backgroundColor);
        newclick=this.style.backgroundColor;
               
        if(newclick!==updated.textContent)
        {
           alert("Wrong!!!");
           var Correct=document.getElementById("correct");
           Correct.textContent="Try again!!"
           this.style.backgroundColor="black";
        }

        else
        if(newclick===updated.textContent)
        { 
        var Correct=document.getElementById("correct");
        Correct.textContent="Correct!!"
        var colorWin=document.getElementById("colorWin");
        colorWin.style.backgroundColor="green";  
        reset.textContent="Wanna Play again??";     
        }
    });
}



function generateRandomColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomcolor());  //call random color function
    }
    return arr;
}


function randomcolor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//function to generate random number to the array!
function randomNumber()
{
    var ranNum=Math.floor(Math.random()*7);
    return ranNum;
}

