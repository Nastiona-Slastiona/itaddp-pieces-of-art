const express = require("express");
const path = require("path");

const app = express();

app.use("/styles", express.static(path.resolve("styles")));
app.use("/static", express.static(path.resolve("static")));
app.use("/helpers", express.static(path.resolve("helpers")));
app.use("/scripts", express.static(path.resolve("scripts")));
app.use("/views", express.static(path.resolve("views")));
app.use("/constants", express.static(path.resolve("constants")));


app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
})

app.listen(5000, () => console.log("Server running..."))