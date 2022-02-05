const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plannerSchema = Schema({
	_id: Schema.Types.ObjectId,
	id: { type: Number, require: true },
    subname: { type: String, require: true },
	subcode: { type: String, require: true },
	sdate: { type: String, require: true },
	stime: { type: String, require: true },
    sduration: { type: String, require: true },
});

module.exports = mongoose.model("Planner", plannerSchema);
