const loadProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  displayTrendingProducts(data);
};

loadProducts();

const displayTrendingProducts = (products) => {
  const trendingProductsContainer =
    document.getElementById("trending-products");
  // Clear existing products
  //   trendingProductsContainer.innerHTML = "";
  const trendingFilteredProducts = products.filter(
    (product) => product.rating.rate > 4.5,
  );

  const trendingProducts = trendingFilteredProducts.slice(0, 3);
  //   console.log(trendingProducts);

  for (let product of trendingProducts) {
    const productsCard = document.createElement("div");
    productsCard.classList.add("w-96", "bg-base-100", "shadow-xl", "card");
    console.log(product);
    productsCard.innerHTML = `
            <figure class="bg-gray-100 p-5">
              <img
              class="h-48 w-48"
                src=${product.image}
                alt="Shoes"
              />
            </figure>
            
            </div>
                <div class="flex gap-2 justify-between items-center p-3">
            <div>
                <div class="badge badge-soft badge-primary">${product.category}</div>
            </div>
            <div class="flex gap-2 items-center">
            <i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i>
            <div class="badge badge-secondary">${product.rating.rate}</div> 
            <span>(${product.rating.count})</span>
            </div>
            </div>
          
              <h2 class="card-title p-3">
               ${product.title}
               </h2>
              <div class="flex justify-between items-center p-3">
                <p class="text-xl font-bold">$${product.price} </p>
              </div>
              <div class="flex gap-2 p-3">
              <button class="btn flex-1">Details</button>
              <button class="btn btn-active btn-primary flex-1">Add</button>
              </div>
            </div>
    `;
    trendingProductsContainer.append(productsCard);
  }
};
