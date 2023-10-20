var box = document.querySelector("#box");
var distance = "5";
var margin = -800;
var int;

function animate() {
  int = setInterval(function() {
      
	  margin = (margin > window.innerWidth ? -800 : margin + Number(3));
      box.style.marginLeft = margin + "px";
	  
    },
    1000 / Number(24))
}

animate();

function reset() {
  clearInterval(int);
  margin = -800;
  animate();
}

frameRate.addEventListener("change", reset);
distance.addEvenetListener("change", reset);
