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
});
anime({
	targets: ".first-title",
	translateY: [100, 0],
	duration: 1500,
	opacity: [0, 1],
	delay: 300,
});
anime({
	targets: ".introduction",
	translateX: [100, 0],
	duration: 1200,
	opacity: [0, 1],
	delay: 1600,
});
anime({
	targets: ".bar-nav",
	opacity: [0, 1],
	duration: 1200,

	delay: 900,
});
