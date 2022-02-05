const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = Schema({
	_id: Schema.Types.ObjectId,
	catid: { type: String, require: true },
	catname: { type: String, require: true },
});

module.exports = mongoose.model("Category", categorySchema);
