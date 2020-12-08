//DOM Monipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument)

function sayHello(){
	var name = document.getElementById("name").value;
	var message = "<h2>Hello "+name+"!</h2>";

	// document
	// .getElementById("content")
	// .textContent=message;

	document
	.getElementById("content")
	.innerHTML=message;


	if (name==="student"){
		var title = 
		document
		.getElementById("title")//.queryselector("#id") also allowed
		.textContent;
		title+= " & Loving it";
		var title = document
		.querySelector("h1")
		.textContent=title;
	}

}