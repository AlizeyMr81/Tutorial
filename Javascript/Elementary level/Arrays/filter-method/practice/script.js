let product = [
  { name: "Product A", inStock: false },
  { name: "Product B", inStock: true },
  { name: "Product B", inStock: false },
  { name: "Product D", inStock: false },
  { name: "Product E", inStock: true },
  { name: "Product F", inStock: false },
  { name: "Product G", inStock: true },
  { name: "Product H", inStock: true },
];

let inStockProducts = product.filter(function (product) {
  return product.inStock;
});

console.log(inStockProducts);
