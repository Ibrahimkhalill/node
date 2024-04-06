// app.js
const express = require("express");
const app = express();
const port = 8001;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define routes
app.get("/", (req, res) => {
  res.render("index", { message: "I love you Ibrahim" });
});

app.get("/about", (req, res) => {
  res.render("about", { pageTitle: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { pageTitle: "Contact Us" });
});

// ... (remaining code)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
