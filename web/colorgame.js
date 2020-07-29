var numOfSquares=6;
var colors=generateRandomColors(numOfSquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colorDiplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected"); 
    easyBtn.classList.add("selected");
    numOfSquares=3;
    colors=generateRandomColors(numOfSquares);
    pickedcolor=pickColor();
    colorDisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
        //colors array has now 3 elements
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
        else
        {
            squares[i].style.display="none";
        }
    }
});
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected"); 
    easyBtn.classList.remove("selected");
    numOfSquares=6;
    colors=generateRandomColors(numOfSquares);
    pickedcolor=pickColor();
    colorDisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
            squares[i].style.background=colors[i];
            squares[i].style.display="block";
        
    }
});
resetButton.addEventListener("click",function(){
   colors=generateRandomColors(numOfSquares);
   pickedcolor=pickColor();
   colorDisplay.textContent=pickedcolor;
   this.textContent="New Colors";
   messageDisplay.textContent="";
   for(var i=0;i<squares.length;i++)
   {
       squares[i].style.background=colors[i];
   }
   h1.style.background="steelblue";
});
colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
    //add initial color to square
    squares[i].style.background=colors[i];
    //add click listener to square
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.background; 
        if(clickedColor===pickedcolor)
        {
            //console.log(clickedColor+" "+pickedcolor);
            messageDisplay.textContent="Correct!";
            resetButton.textContent="Play Again";
            changeColors(clickedColor);
            h1.style.background=clickedColor;
        }    
        else
        {
            this.style.background="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}
function changeColors(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}
function pickColor()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num)
{
    //make an array 
    var arr=[];
    //add num random colors to the array
    for(var i=0;i<num;i++)
    {
        //get random colors and push into array
        arr.push(randomColors());
    }
    return arr;
}
function randomColors()
{
   //pick a red from 0 to 255 
   var r=Math.floor(Math.random()*256);
   //pick a green from 0 to 255 
   var g=Math.floor(Math.random()*256);
   //pick a blue from 0 to 255 
   var b=Math.floor(Math.random()*256);
   return "rgb(" +r + ", " + g +", " + b +")";
}