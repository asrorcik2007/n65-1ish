let products = [];

document.getElementById("adminForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productDescription =
    document.getElementById("productDescription").value;

  const product = {
    name: productName,
    price: productPrice,
    description: productDescription,
  };

  products.push(product);
  renderProducts();
});

function renderProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}: ${product.description}`;
    productList.appendChild(li);
  });
}
