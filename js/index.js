/*
http://css-tricks.com/example/index.html
	window.location.protocol = "http:"
	window.location.host = "css-tricks.com"
	window.location.pathname = "example/index.html"

* */

$( document ).ready(function() {
	console.log( "ready!" );
	var actualURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
	alert(actualURL);
});