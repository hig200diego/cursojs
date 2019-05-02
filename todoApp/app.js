function app() {
	var activities = document.getElementById('app-list').value;
	// Armezena os valores nessa variável
	var listItems = document.getElementById('todo-items').innerHTML;
	// Recebe os items do input e concatena
	listItems += "<li>" + activities + "</li>";
	// Adciona o novo item nas lista
	document.getElementById('todo-items').innerHTML = listItems;

}

document.querySelector('#app-add').addEventListener('keypress', function(event){
	var key = event.which || event.keyCode;

	if (key === 13) {
		console.log("Working!");
	}
});