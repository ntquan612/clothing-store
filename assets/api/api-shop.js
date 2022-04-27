var params = new URLSearchParams(location.search);
var id = params.get("id");
var url = `http://localhost:3000/products?cat_id=${id}`;

fetch("http://localhost:3000/categories")
	.then((res) => res.json())
	.then((shopSidebars) => {
		shopSidebar_arr = shopSidebars.map((shopSidebar, i) => {
			return `
                        <div class="sidebar-item mb20">
                            <a  class="sidebar-link" 
                                href="shop.html?id=${i + 1}">
                                ${shopSidebar.name}
                            </a>
                        </div>
                    `;
		});
		document.querySelector("#shop-sidebar").innerHTML +=
			shopSidebar_arr.join("");
	});

function hienThiSanPham(url) {
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			var danhSachSanPham = data;
			var danhMucSanPham = document.getElementById("danhMucSanPham");
			danhSachSanPham.forEach((sanpham) => {
				danhMucSanPham.innerHTML += `
                <a href="./detail.html?id=${sanpham.id}" class="shop__card">
                    <div class="shop__card-inner">
                        <img src="${sanpham.image[0]}" alt="" class="shop__card-image">
                        <div class="shop__card-name product-name">
                        ${sanpham.name}
                        </div>
                    </div>
                </a>
                    `;
			});
		});
}

hienThiSanPham(url);
