window.addEventListener("load", function () {
	const links = [...this.document.querySelectorAll(".menu__main-link")];
	links.forEach((item) =>
		item.addEventListener("mouseenter", handleHoverClick)
	);
	const line = document.createElement("div");
	line.setAttribute("class", "line-effect");
	document.body.appendChild(line);

	function handleHoverClick(event) {
		const { left, top, width, height } =
			event.target.getBoundingClientRect();
		console.log({ left, top, width, height });
		const offsetBottom = 1;
		line.style.width = `${width}px`;
		line.style.left = `${left}px`;
		line.style.top = `${top + height + offsetBottom}px`;
	}
	const menu = document.querySelector(".menu");
	menu.addEventListener("mouseleave", function () {
		line.style.width = 0;
	});
});

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".menu__main-list");
menu.onclick = () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");
};
