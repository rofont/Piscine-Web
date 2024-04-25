

const body =document.querySelector('body');
const button = document.createElement("button");
const div = document.createElement("div")

button.innerText = "Click me!";

body.appendChild(div);
div.appendChild(button);
body.style.background = 'white';


button.addEventListener("click", function () {
	if (body.style.background === 'white') {
		console.log(body.style.background);
		button.style.fontSize = "150%";
		console.log("GREEN!!");
		body.style.background = 'green';
	}
	else if (body.style.background === 'green') {
			button.style.fontSize = "300%";
			console.log("RED!!");
			body.style.background = 'red';
	}
});
