const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = Schema({
	_id: Schema.Types.ObjectId,
	username: { type: String, require: true },
	password: { type: String, require: true },
    name: { type: String, require: true },
    designation: { type: String, require: true },
    t_id: { type: Number, require: true },
    department:{ type: String, require: true },
    city: { type: String, require: true },
    p_id: { type: String, require: true },
    contact: { type: Number, require: true },
    dob: { type: String , require: true },
    type: { type: String , require: true },
	
});

module.exports = mongoose.model("Teacher", teacherSchema);