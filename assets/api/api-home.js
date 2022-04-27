fetch("http://localhost:3000/products")
	.then((res) => res.json())
	.then((newProducts) => {
		newProduct_arr = newProducts.map((newProduct) => {
			return `
                    <div class="swiper-slide">
                        <a href="./detail.html?id=${newProduct.id}"><img src="${newProduct.image[0]}" alt="" "></a>
                    </div>
                `;
		});
		document.querySelector("#newProduct").innerHTML +=
			newProduct_arr.join("");
	});

// mobi
fetch("http://localhost:3000/products")
	.then((res) => res.json())
	.then((newProducts) => {
		newProduct_arr = newProducts.map((newProduct) => {
			return `
                        <div class="swiper-slide">
                            <a href="./detail.html?id=${newProduct.id}"><img src="${newProduct.image[0]}" alt="" "></a>
                        </div>
                    `;
		});
		document.querySelector("#newProduct-mobi").innerHTML +=
			newProduct_arr.join("");
	});
// mobi

fetch("http://localhost:3000/products")
	.then((res) => res.json())
	.then((hotProducts) => {
		hotProduct_arr = hotProducts.map((hotProduct) => {
			return `
                <a href="./detail.html?id=${hotProduct.id}" class="hot__flip-card">
                    <div class="hot__flip-card-inner">
                        <div class="hot-front">
                            <img src="${hotProduct.image[0]}" alt="" class="hot-image" />
                        </div>
                        <div class="hot-back">
                            <img src="${hotProduct.image[1]}" alt="" class="hot-image" />
                        </div>
                    </div>
                    <span class="product-name" title="${hotProduct.name}">
                        ${hotProduct.name}
                    </span>
                </a>
            `;
		});
		arr_hotProduct = hotProduct_arr.filter(function (v, i) {
			if (i < 10) return true;
			else return false;
		});
		document.querySelector("#hotProduct").innerHTML +=
			arr_hotProduct.join("");
	});

fetch("http://localhost:3000/products")
	.then((res) => res.json())
	.then((wishlistProducts) => {
		wishlistProduct_arr = wishlistProducts.map((wishlistProduct) => {
			return `
                        <a href="./detail.html?id=${wishlistProduct.id}" class="wishlist__card">
                            <div class="wishlist__card-inner">
                                    <img src="${wishlistProduct.image[0]}" alt="" class="wishlist__card-image">
                                <div class="wishlist__card-name product-name" title="${wishlistProduct.name}">
                                    ${wishlistProduct.name}
                                </div>
                            </div>
                        </a>
                    `;
		});
		arr_wishlistProduct = wishlistProduct_arr.filter(function (v, i) {
			if (i < 10) return true;
			else return false;
		});
		document.querySelector("#wishlistProduct").innerHTML +=
			arr_wishlistProduct.join("");
	});

fetch("http://localhost:3000/products")
	.then((res) => res.json())
	.then((coomingsoonProducts) => {
		coomingsoonProduct_arr = coomingsoonProducts.map(
			(coomingsoonProduct, index) => {
				return `
                    <a href="./detail.html?id=${coomingsoonProduct.id}" class="coomingsoon__image-item">
                        <img src="${coomingsoonProduct.image[0]}" alt="">
                    </a>
                `;
			}
		);
		arr_coomingsoonProduct = coomingsoonProduct_arr.filter(function (v, i) {
			if (i < 5) return true;
			else return false;
		});
		document.querySelector("#coomingsoonProduct").innerHTML +=
			arr_coomingsoonProduct.join("");
	});
