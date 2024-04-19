
const images = ["res/img/Image1.jpg", "res/img/Image2.jpg", "res/img/Image3.jpg", "res/img/Image4.jpg"];

let currentImageIndex = 0;

// Function to change the displayed image
function changeImage(direction) 
{
	if (direction) 
	{
    		currentImageIndex += (direction === 'prev') ? -1 : 1;
  	} else {
    		currentImageIndex++; // Automatic change (no direction specified)
  	}
  
  // Handle overflow and underflow
  	if (currentImageIndex < 0) {
    		currentImageIndex = images.length - 1;
  	} else if (currentImageIndex >= images.length) {
    		currentImageIndex = 0;
  	}

	document.getElementById("current-image").src = images[currentImageIndex];
}

// Start the automatic image change with a delay of 5 seconds
window.onload = function() {
  		setInterval(changeImage, 5000); // Change image every 5 seconds
	};



function changeColor(color)
{
		var clr1="#0A100D", clr2="#B9BAA3",clr3="#D6D5C9",clr4="#A22C29",clr5="#5B6C5D";

	if(color=='c1')
	{
		document.getElementById('menubar').style.background=clr1;
		document.getElementById('text-on-image').style.background=clr1;
		document.getElementById('footer').style.background=clr1;
	}
	else if(color=='c2')
	{
		document.getElementById('menubar').style.background=clr2;
		document.getElementById('text-on-image').style.background=clr2;
		document.getElementById('footer').style.background=clr2;
	}
	else if(color=='c3')
	{
		document.getElementById('menubar').style.background=clr3;
		document.getElementById('text-on-image').style.background=clr3;
		document.getElementById('footer').style.background=clr3;
	}
	else if(color=='c4')
	{
		document.getElementById('menubar').style.background=clr4;
		document.getElementById('text-on-image').style.background=clr4;
		document.getElementById('footer').style.background=clr4;
	}
	else if(color=='c5')
	{
		document.getElementById('menubar').style.background=clr5;
		document.getElementById('text-on-image').style.background=clr5;
		document.getElementById('footer').style.background=clr5;
	}
	else
	{
		alert('Not a valid color');
	}

}
