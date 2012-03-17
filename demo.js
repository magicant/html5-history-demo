window.onload = function() {
	var links = document.getElementsByTagName("a");
	for (var i in links) {
		var link = links[i];
		alert(link.href);
	}
};
