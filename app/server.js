const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("E-commerce App Running 🚀");
  // res.send("Auto Deploy Working 🚀");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ]);
});

app.listen(3000, () => console.log("Server running on port 3000"));