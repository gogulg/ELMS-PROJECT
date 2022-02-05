const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = Schema({
	_id: Schema.Types.ObjectId,
	stuid: { type: String, require: true },
    stuname: { type: String, require: true },
	evs: { type: Number, require: true },
	english: { type: Number, require: true },
   hindi : { type: Number, require: true },
    maths: { type: Number, require: true },
    gk: { type: Number, require: true },
    science: { type: Number, require: true },
	
});

module.exports = mongoose.model("Entry", entrySchema);
