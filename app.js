const form = document.getElementById("form");

let countNumber = 0;
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const productName = document.getElementById("product-title");
    const productSize = document.getElementById("product-size");
    const productColor = document.getElementById("product-color");
    const productPrice = document.getElementById("product-price");
    const productBrand = document.getElementById("product-brand");
    // const productUpload = document.getElementById("product-upload").files[0];

    const product = {};
    countNumber++;
    product.id = countNumber;
    product.name = productName.value;
    // product.image = productUpload.name;
    product.size = productSize.value;
    product.color = productColor.value;
    product.price = productPrice.value;
    product.brand = productBrand.value;
    addProduct(product);

    selectQuantity(product.id, product.price);
});

function addProduct(product) {
    const productContainer = document.getElementById("product-container");
    const singleProduct = document.createElement("div");
    singleProduct.classList.add("product", "d-flex", "gap-4", "mb-5");
    singleProduct.innerHTML = `
            <div class="col-6 product-img d-flex gap-4">
                <img src="images/product1.jpg" alt="" />
                <div class="product-description">
                    <h5>${product.name}</h5>
                    <p>Size: ${product.size}, Color: ${product.color}</p>
                    <p>Brand: ${product.brand}</p>
                </div>
            </div>
            <div class="col-1">
                <select id="quantity-${product.id}" class="form-select me-5" aria-label="Default select example">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div class="product-price me-auto col-3">
                <h4>$<span id="${"total-price" + product.id}">${product.price}</span></h4>
                <p>$<span id="${"single-price" + product.id}">${product.price}</span> each</p>
            </div>
            <div class="product-remove col-2">
                <button class="btn btn-outline-secondary">Remove</button>
            </div>`;

    productContainer.appendChild(singleProduct);
}

function selectQuantity(id, price) {
    const productQuantities = document.getElementById("quantity-" + id);
    getTotal(price);
    productQuantities.addEventListener("change", () => {
        const productQuantity = parseInt(productQuantities.value);
        const totalPriceDisplay = document.getElementById("total-price" + id);
        const totalPrice = productQuantity * price;
        totalPriceDisplay.innerText = totalPrice;
        getTotal(totalPrice);
    });
}

function getTotal(price) {
    const subtotal = document.getElementById("subtotal");
    const tax = document.getElementById("tax");
    const total = document.getElementById("total");
    subtotal.innerText = price;
    const totalTax = price / 10;
    tax.innerText = totalTax;
    total.innerText = parseFloat(price) + totalTax;
    console.log(price, totalTax);
}
