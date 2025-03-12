const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to our Home Page ");
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, level: "Product number one " },
    { id: 2, level: "Product number two " },
    { id: 3, level: "Product number three " },
    { id: 4, level: "Product number four " },
  ];

  res.send(products);
});
app.get('/products/:id', (req, res) => {
    const productId = Number(req.params.id);

    if (isNaN(productId)) {
        return res.status(400).json({ error: "Invalid product ID. Please provide a valid number." });
    }

    const products = [
        { id: 1, level: "Product number one" },
        { id: 2, level: "Product number two" },
        { id: 3, level: "Product number three" },
        { id: 4, level: "Product number four" },
    ];

    const getSingleProduct = products.find(product => product.id === productId);

    if (getSingleProduct) {
        res.json(getSingleProduct);
    } else {
        res.status(404).json({ error: "Product not found. Try with a different product ID." });
    }
});


const port = 3000;

app.listen(port, (req, res) => {
  console.log(`Our server is running at ${port}`);
});
