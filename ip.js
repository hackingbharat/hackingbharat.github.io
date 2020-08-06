var request = new XMLHttpRequest();
request.open("GET", "http://ipinfo.io/json", true);
request.send();
request.onreadystatechange = function() {
    if (request.readyState == 4)
	      alert(request.responseText);
}
