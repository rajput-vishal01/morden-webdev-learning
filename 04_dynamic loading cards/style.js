var product = [
  {
    name: "White chair",
    Headline: "Elegant and Comfortable",
    price: "$120",
    img: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Yellow table and Chair",
    Headline: "Vibrant and Stylish Set",
    price: "$250",
    img: "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Classic Blue Chair",
    Headline: "Timeless Design",
    price: "$150",
    img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Yellow Sofa",
    Headline: "Modern and Cozy",
    price: "$400",
    img: "https://images.unsplash.com/photo-1520940115356-52e16be4351a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "White chair",
    Headline: "Elegant and Comfortable",
    price: "$120",
    img: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Yellow table and Chair",
    Headline: "Vibrant and Stylish Set",
    price: "$250",
    img: "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Classic Blue Chair",
    Headline: "Timeless Design",
    price: "$150",
    img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Yellow Sofa",
    Headline: "Modern and Cozy",
    price: "$400",
    img: "https://images.unsplash.com/photo-1520940115356-52e16be4351a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var Products = [
  {
    name: "Modern Grey Chair",
    Headline: "Sleek and Minimalist",
    price: "$130",
    img: "https://images.unsplash.com/photo-1494850344270-b7670a35a7ef?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Vintage Wooden Chair",
    Headline: "Rustic Charm",
    price: "$200",
    img: "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var cart = [];

function addproduct() {
  var clutter = "";

  product.forEach(function (obj, index) {
    clutter += `
        <div class="product w-fit rounded-xl p-2 bg-white">
            <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl" style="background-image: url('${obj.img}'); background-size: cover; background-position: center;">
            </div>
            <div class="data w-full px-2 py-5">
                <h1 class="font-semibold text-xl leading-none tracking-tight">
                    ${obj.name}
                </h1>
                <div class="flex justify-between w-full items-center mt-2">
                    <div class="w-1/2">
                        <h3 class="font-semibold opacity-20">${obj.Headline}</h3>
                        <h4 class="font-semibold mt-2">${obj.price}</h4>
                    </div>
                    <button data-index=${index} class="add w-10 h-10 rounded-full shader text-yellow-400">
                        <i  data-index=${index} class="add ri-add-line"></i>
                    </button>
                </div>
            </div>
        </div>`;
  });
  document.querySelector("#product").innerHTML = clutter;
}

function addpopularproduct() {
  var clutter = "";

  Products.forEach(function (obj) {
    clutter += ` <div
            class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
          >
            <div
              class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
            >
              <img
                class="w-full h-full object-cover"
                src="${obj.img}"
                alt=""
              />
            </div>
            <div class="data py-2 w-full">
              <h1 class="leading-none font-semibold">${obj.name}</h1>
              <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
                ${obj.Headline}
              </h4>
              <h4 class="mt-3 font-semibold text-zinc-500">${obj.price}</h4>
            </div>
          </div>
`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}

function addtocart() {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        console.log(details.target.dataset.index);
        cart.push(product[details.target.dataset.index]);
      }
    });
}

addtocart();
addproduct();
addpopularproduct();
