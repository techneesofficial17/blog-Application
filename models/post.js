const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
	posttitle: {
		required: true,
		type: String,
	},
	postdescription: {
		required: true,
		type: String,
	},
	createdAt: {
		required: true,
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Post", postSchema);
