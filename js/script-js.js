/* in clear js

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
jokes();	*/

var button = $('#btn-joke'),
	text = $('#p-joke');
button.on('click', function() {
	jokes();
});
function jokes() {
	$.ajax({
		method: 'GET',
		url: 'http://api.icndb.com/jokes/random',
		success: function(response) {
			text.text(response.value.joke.replace(/&quot;/g, '"'));
			// replace(/&quot;/g, '"') - change every &quot; to " in string
		}
	});
}
jokes();

var qButton = $('.btn-quote'),
	tButton = $('.btn-tweet'),
	quote = $('.quote'),
	quoteUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?',
	author = $('.author'),
	tweet,
	tweeter = $('.tweet'),
	tweetLink = 'https://twitter.com/intent/tweet?text=';

function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}
function createTweet(input) {
	if(!input.quoteAuthor.length) {
		input.quoteAuthor = 'Unknown author';
	}
	var tweetText = "Quote of the day - " + input.quoteText + " Author: " + input.quoteAuthor;
	if (tweetText.length > 140) {
		getQuote();
	} else {
	tweet = tweetLink + encodeURIComponent(tweetText);
	quote.text(input.quoteText);
	author.text("Author: " + input.quoteAuthor);
	}
}
getQuote();
tButton.on('click', function() {
	window.open(tweet);
});
qButton.on('click', function() {
	getQuote();
});