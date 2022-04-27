const pagination = document.querySelector(".pagination");
let isMouseDown = false;
let startX, scrollLeft;

pagination.addEventListener("mousedown", (e) => {
	isMouseDown = true;
	startX = e.pageX - pagination.offsetLeft;
	scrollLeft = pagination.scrollLeft;
});

pagination.addEventListener("mouseleave", () => {
	isMouseDown = false;
});

pagination.addEventListener("mouseup", () => {
	isMouseDown = false;
});

pagination.addEventListener("mousemove", (e) => {
	if (!isMouseDown) return;

	const x = e.pageX - pagination.offsetLeft;
	// 3 là tốc độ scroll
	const walk = (x - startX) * 3;
	pagination.scrollLeft = scrollLeft - walk;
});
