const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = Schema({
	_id: Schema.Types.ObjectId,
	course_id: { type: String, require: true },
	course_category: { type: String, require: true },
	course_title: { type: String, require: true },
	course_price: { type: Number, require: true },
	course_status: { type: String, require: true },
});

module.exports = mongoose.model("Course", courseSchema);
