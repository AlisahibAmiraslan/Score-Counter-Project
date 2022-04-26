let count = 0;

const valueEl = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach( function(item) {
	item.addEventListener("click",function(e){
     const styles = e.currentTarget.classList;
     if(styles.contains("decrease")){
     	count--;
     }else if (styles.contains("increase")) {
     	count++;
     }else {
     	count = 0;
     }
 
     valueEl.textContent = count;
	});
});