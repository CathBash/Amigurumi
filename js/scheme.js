let disqus_config = function () {
	this.page.url = "http://a0723293.xsph.ru/index.html";
	this.page.identifier = "123";
};

(function () {
	let d = document,
		s = d.createElement("script");
	s.src = "https://yarncraft-1.disqus.com/embed.js";
	s.setAttribute("data-timestamp", +new Date());
	(d.head || d.body).appendChild(s);
})();

// button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

function topFunction() {
	document.documentElement.scrollTop = 0;
}
