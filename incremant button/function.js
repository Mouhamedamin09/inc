let value = document.getElementById("value");
let message = document.getElementById("message");
let count = 0;

function increment() {
  count = count + 1;
  value.innerText = count;
}
let i=0;
function save(){
	i++;
	let savedValue=count+" - "
	message.textContent += savedValue
	count=0;
	value.textContent = count;
	if (i===5){
		message.innerText='prevouis count:';
		i=0; 
	}
}