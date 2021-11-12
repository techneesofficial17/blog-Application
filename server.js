const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config({ path: "./config.env" });
require("./models/db");
const mainRoute = require("./routes/index");

const app = express();
app.use(helmet());
app.use(morgan("tiny"));

const port = process.env.PORT || 3333;

app.set("view engine", "ejs");
app.use("/dist", express.static("./dist/"));
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRoute);

app.use((req, res, next) => {
	res.status(404).render("404");
});

app.listen(port, () => {
	console.log(`Server is runnning on http://localhost:${port}`);
});
