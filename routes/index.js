const route = require("express").Router();
const Post = require("../models/post");
const isEmpty = require("is-empty");
let posts = [];

route.get("/", async (req, res) => {
	posts = await Post.find();
	res.render("home", { posts: posts });
});

route.get("/about", function (req, res) {
	res.render("about");
});

route.get("/contact", function (req, res) {
	res.render("contact");
});

route.get("/makepost", (req, res) => {
	res.render("makepost");
});

route.get("/posts/:titlepost", async (req, res) => {
	const requestedTitle = req.params.titlepost;
	posts = await Post.find({ posttitle: requestedTitle });
	isEmpty(posts) ? res.redirect("/") : res.render("posts", { post: posts });
});

route.post("/", async (req, res) => {
	const title = req.body.postTitle;
	const description = req.body.postDescription;
	console.log(title, description);

	if (title !== "" && description !== "") {
		posts = new Post({
			posttitle: req.body.postTitle,
			postdescription: req.body.postDescription,
		});
		await posts.save();
		res.redirect(`/posts/${posts.posttitle}`);
	}
	else {
		res.render("makepost", { title: title, description: description });
	}
});

module.exports = route;
