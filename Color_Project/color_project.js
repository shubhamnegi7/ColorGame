var numsquare = 6;
var colors = generatecolor(numsquare);
var squares = document.querySelectorAll(".square");
var colorPicker= pickedcolor();
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybutton = document.querySelector("#easybtn");
var hardbutton = document.querySelector("#hardbtn");

easybutton.addEventListener("click", function(){
	easybutton.classList.add("selected");
	hardbutton.classList.remove("selected");
	numsquare = 3;
	colors = generatecolor(numsquare);
	colorPicker = pickedcolor();
	display.textContent = colorPicker;
	for(var i=0; i<squares.length;i++)
{
		if(colors[i])
	{
		squares[i].style.background = colors[i];
	}
	else
	{
		squares[i].style.background = "none"
	}
}
	
	
});

hardbutton.addEventListener("click", function(){
	
	easybutton.classList.remove("selected");
	hardbutton.classList.add("selected");
	numsquare =6;
	colors = generatecolor(numsquare);
	colorPicker = pickedcolor();
	display.textContent = colorPicker;
	for(var i = 0; i<squares.length; i++)
	{
	squares[i].style.background=colors[i];
	squares[i].style.background= "block";	
		
	}	
});
	
var display = document.querySelector("#color_display");

var messagedisplay = document.querySelector("#messagedisplay");

resetbutton.addEventListener("click", function()
{
	colors = generatecolor(6);
	colorPicker=pickedcolor();
	display.textContent=colorPicker;
	for(var i = 0; i < squares.length; i++)
 {
 	squares[i].style.background=colors[i];
 	
 }
 h1.style.background = "steelblue";
 messagedisplay.textContent=""; 
 resetbutton.textContent="New Colors";
});
display.textContent=colorPicker;

for(var i = 0; i < squares.length; i++)
 {
 	squares[i].style.background=colors[i];
 squares[i].addEventListener("click",function() {
 
 var clickedcolor= this.style.background;
 	if(clickedcolor==colorPicker)
 	{
 		messagedisplay.textContent="correct";
 		changecolor(clickedcolor);
 		h1.style.background=clickedcolor;
 		resetbutton.textContent="Try Again!?"
 	}
	 	else{
	 		this.style.background= "#232323";
	 		messagedisplay.textContent="wrong"
	 	}
 });
 }

 function changecolor(color)
 {
 	for( var i = 0; i<squares.length;i++)
 	{
 		squares[i].style.background = color ; 
 		
		 	
 	}
 }

 function pickedcolor()
 {
 	var v = Math.floor(Math.random()*squares.length);
 	return colors[v]
 }


function generatecolor(num)
{
	var arr = [] 
		for(var i = 0;i<num; i++)
		{
				arr.push(randomcolor());
		}
	return arr;
}



function randomcolor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}

