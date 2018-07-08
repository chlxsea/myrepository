
function todoList() {
	var item = document.getElementById("todoInput").value;
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);
	document.getElementById("todoInput").value=" ";
}

document.getElementById("todoInput")
	.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
			document.getElementById("submit-button").click();
	}
});

