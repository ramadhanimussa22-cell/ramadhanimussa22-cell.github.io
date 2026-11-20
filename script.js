const searchInput = document.querySelector(".search");
const products = document.querySelectorAll(".product");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchText = this.value.toLowerCase();

        products.forEach(function (product) {
            const productName = product.textContent.toLowerCase();

            product.style.display =
                productName.includes(searchText) ? "block" : "none";
        });
    });
}

console.log("Market App is ready!");
