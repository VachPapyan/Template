												        // Navbar

$(document).ready(function(){
	$('.toggle span').click(function(){
		$('ul').slideToggle(700);
	})
})


														// Get Live Updates   ACARDION

$(document).ready(function(){
  $('h4').next().hide();
	$('h4').click(function(){
		$(this).next().slideToggle();
 });
});


														// Scrolling the page 

function slowScroll(id){

	var offset = 0;

	$('html, body').animate ({
		scrollTop: $(id).offset().top - offset
	}, 2000);
	return false;
}


   														// Back  To  Top

window.onload=function(){
	var y;
	document.getElementById('top').onclick=function(){
		y=window.pageYOffset;
		 scrollToTop();
	}
	function scrollToTop(){
		if(y>0){
		window.scrollTo(0,y);
		y=y-20;
		setTimeout(scrollToTop,10);
		}
		else{ 
			window.scrollTo(0,0);
		}
	}
}   														


   													//CLOCK


let hour = document.querySelector("#clock");
  clock=() =>{
	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	hour.innerText = hours + ":" + minutes + ":" + seconds;
}
clock()
setInterval(clock,1000)




