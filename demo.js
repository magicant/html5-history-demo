function changeImage(imageSrc) {
	document.getElementById("image").src = imageSrc;
	document.title = imageSrc;
}

window.onload = function() {
	function setEvent(link, imageSrc) {
		link.onclick = function() {
			changeImage(imageSrc);
			history.pushState(imageSrc, null, link.href);
			return false;
		}
	}

	var links = document.getElementsByTagName("a");
	for (var i in links) {
		var link = links[i];
		setEvent(link, "image" + (Number(i) + 1) + ".png");
	}

	var img = document.getElementById("image");
	history.replaceState(img.src, null);
};

window.onpopstate = function() {
	changeImage(history.state);
};
