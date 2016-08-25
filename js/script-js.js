var button = document.getElementById('btn-joke'),
	text = document.getElementById('p-joke');
button.addEventListener('click', function() {
	jokes();
});
function jokes() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://api.icndb.com/jokes/random');
	xhr.addEventListener('load', function() {
		var response = JSON.parse(xhr.response);
		text.innerHTML = response.value.joke;
	});
	xhr.send();
}
jokes();