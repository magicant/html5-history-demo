window.onload = function() {
	function setEvent(link, imageSrc) {
		link.onclick = function() {
			alert(imageSrc);
			return false;
		}
	}

	var links = document.getElementsByTagName("a");
	for (var i in links) {
		var link = links[i];
		setEvent(link, "image" + (Number(i) + 1) + ".png");
	}
};
