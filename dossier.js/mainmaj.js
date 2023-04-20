const modale = document.getElementById("modal1");

const btnCloseModale = document.getElementById("close");

const openModal = function () {
	modale.style.display = null;
};
const closeModal = function () {
	modale.style.display = "none";
};

btnCloseModale.addEventListener("click", closeModal);
window.onclick = function (event) {
	if (event.target == modale) {
		modale.style.display = "none";
	}
};
const btnWorks = document.getElementById("works");
btnWorks.addEventListener("click", () => {
	openModal();
});

const swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	slidesPerView: 1,
	spaceBetween: 30,
	mousewheel: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

anime({
	targets: ".coach",
	translateX: [-100, 0],
	duration: 1200,
	opacity: [0, 1],
	delay: 1000,
	easing: "easeOutQuint",
});
anime({
	targets: ".first-title",
	translateY: [100, 0],
	duration: 1500,
	opacity: [0, 1],
	delay: 300,
});

anime({
	targets: ".bar-nav",
	opacity: [0, 1],
	duration: 1200,

	delay: 900,
});

// cette const permet de definir 10%
const ratio = 0.1;
const options = {
	root: null,
	rootMargin: "0px",
	threshold: ratio,
};
const handleIntersect = function (entries, observer) {
	entries.forEach(function (entry) {
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add("visible");
			observer.unobserve(entry.target);
		}
	});
};
const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(document.querySelector(".title-pull"));

// COnstruction function pour faire l'effet curseur

document.addEventListener("DOMContentLoaded", function () {
	const curseur = document.querySelector(".cursor");
	document.addEventListener("mousemove", function (e) {
		curseur.style.cssText =
			"left: " + e.clientX + "px; top: " + e.clientY + "px;";
	});
});
