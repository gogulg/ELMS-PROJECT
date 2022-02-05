const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = Schema({
	_id: Schema.Types.ObjectId,
	studentid: { type: String, require: true },
    studentname: { type: String, require: true },
	studentcategory: { type: String, require: true },
	studentph: { type: Number, require: true },
	
});

module.exports = mongoose.model("Student", studentSchema);
