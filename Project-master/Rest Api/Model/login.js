const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = Schema({
	_id: Schema.Types.ObjectId,
	username: { type: String, require: true },
	password: { type: String, require: true },
	type: { type: String, require: true },
});

module.exports = mongoose.model("Login",loginSchema);
