const btns = document.querySelectorAll("#slide-nav .slide-btn");
const videoSlide = document.querySelectorAll(".header-video");
const titles = document.querySelectorAll(".header__content-title");
const links = document.querySelectorAll(".header__content-link");
const infos = document.querySelectorAll(".header__content-info");

let sliderNav = function (ctl) {
	btns.forEach((btn) => {
		btn.classList.remove("active");
	});
	videoSlide.forEach((ele) => {
		ele.classList.remove("active");
	});
	titles.forEach((ti) => {
		ti.classList.remove("active");
	});
	links.forEach((link) => {
		link.classList.remove("active");
	});
	infos.forEach((info) => {
		info.classList.remove("active");
	});

	btns[ctl].classList.add("active");
	videoSlide[ctl].classList.add("active");
	titles[ctl].classList.add("active");
	links[ctl].classList.add("active");
	infos[ctl].classList.add("active");
};

btns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		sliderNav(i);
	});
});
