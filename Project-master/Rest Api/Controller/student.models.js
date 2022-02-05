const mongoose = require("mongoose");
const Student = require("../Model/student");

//get
exports.get_student = async (req, res, next) => {
	try {
		const data = await Student.find();
		if (data) {
			res.status(200).json({
				msg: "Student Details Found",
				datalist: data,
			});
		} else {
			res.status(400).json({
				msg: "no Student details found",
			});
		}
	} catch (err) {
		res.status(500).json({
			msg: "something went wrong.. pls try again",
			error: err,
		});
	}
};

//post
exports.add_student = async (req, res, next) => {
	try {
		const student = new Student({
			_id: new mongoose.Types.ObjectId(),
			studentid: req.body.studentid,
			studentname: req.body.studentname,
			studentcategory: req.body.studentcategory,
			studentph: req.body.studentph
			
		});
		const data = await student.save();
		res.status(200).json({
			msg: "New Student Details Added",
			datalist: data,
		});
	} catch (err) {
		res.status(500).json({
			msg: "something went wrong.. pls try again",
			error: err,
		});
	}
};

//get single
exports.get_single_student = async (req, res, next) => {
	try {
		const data = await Student.findById(req.params.studentId);
		if (data) {
			res.status(200).json({
				msg: "Student Details Found",
				singledata: data,
			});
		} else {
			res.status(400).json({
				msg: "No Student details found for this id",
			});
		}
	} catch (err) {
		res.status(500).json({
			msg: "something went wrong.. pls try again",
			error: err,
		});
	}
};

//put
exports.update_student = async (req, res, next) => {
	try {
		const data = await Student.findByIdAndUpdate(req.params.studentId, req.body);
		res.status(200).json({
			msg: "Student Details Updated Successfully",
			datalist: data,
		});
	} catch (err) {
		res.status(500).json({
			msg: "something went wrong.. pls try again",
			error: err,
		});
	}
};

//delete
exports.delete_student= async (req, res, next) => {
	try {
		const data = await Student.findByIdAndDelete(req.params.studentId);
		if (!data) {
			res.status(404).json({
				msg: "No Student details found for this id",
			});
		} else {
			res.status(200).json({
				msg: "Student Details Deleted Successfully",
				deletedData: data,
			});
		}
	} catch (err) {
		res.status(500).json({
			msg: "something went wrong.. pls try again",
			error: err,
		});
	}
};
