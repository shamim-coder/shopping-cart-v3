const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const productName = document.getElementById("product-title");
    const productSize = document.getElementById("product-size");
    const productColor = document.getElementById("product-color");
    const productPrice = document.getElementById("product-price");
    const productBrand = document.getElementById("product-brand");
    // const productUpload = document.getElementById("product-upload").files[0];

    const product = {};

    product.name = productName.value;
    // product.image = productUpload.name;
    product.size = productSize.value;
    product.color = productColor.value;
    product.price = productPrice.value;
    product.brand = productBrand.value;

    addProduct(product);

    const price = document.getElementById("single-price");
    console.log(price);

    selectQuantity(product);
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
                <select class="quantity form-select me-5" aria-label="Default select example">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div class="product-price me-auto col-3">
                <h4>$<span id="total-price">1156</span></h4>
                <p>$<span class="single-price">${product.price}</span> each</p>
            </div>
            <div class="product-remove col-2">
                <button class="btn btn-outline-secondary">Remove</button>
            </div>`;

    productContainer.appendChild(singleProduct);
}

function selectQuantity(product) {
    const productQuantities = document.getElementsByClassName("quantity");

    for (const quantity of productQuantities) {
        quantity.addEventListener("change", () => {
            const productQuantity = parseInt(quantity.value);
            const singlePrice = document.getElementsByClassName("single-price");

            for (const price of singlePrice) {
                const priceNumber = parseFloat(price.innerText) * productQuantity;
                document.getElementById("total-price").innerText = priceNumber;
                console.log(priceNumber);
            }
        });
    }
}
