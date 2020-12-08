// Event handling
document.addEventListener("DOMContentLoaded",
	function(event){
		function sayHello(event){
			console.log(event);//MouseEvent will appear(it has many properties inside)
			this.textContent = "Said it!";//when onclick is in html file "this" pointing to the global object,
			//but when it's in js file it points to button object(where the click is located)
			var name = document
			.getElementById("name").value;
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

		//Unobstrusive event binding
		// document.querySelector("button")
		// 	.addEventListener("click", sayHello);

		document.querySelector("button")
			.onclick = sayHello;
//Event API: https://developer.mozilla.org/en-US/docs/Web/API/Event
		document.querySelector("body")
			.addEventListener("mousemove",
				function(event){
					if (event.shiftKey === true){
						console.log("X is: "+event.clientX);
						console.log("Y is: "+event.clientY);
					}
				})
});
