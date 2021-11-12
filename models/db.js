const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost/yt-blog")
	.then(() => {
		console.log("connected to database");
	})
	.catch((error) => {
		console.log(error);
	});
