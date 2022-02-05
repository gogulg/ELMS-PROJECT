const mongoose = require("mongoose");
const Course = require("../model/course");

//get
exports.get_course = async (req, res, next) => {
	try {
		const data = await Course.find();
		if (data) {
			res.status(200).json({
				msg: "Course Details Found",
				datalist: data,
			});
		} else {
			res.status(400).json({
				msg: "no course details found",
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
exports.add_course = async (req, res, next) => {
	try {
		const course = new Course({
			_id: new mongoose.Types.ObjectId(),
			course_id: req.body.course_id,
			course_category: req.body.course_category,
			course_title: req.body.course_title,
			course_price: req.body.course_price,
			course_status: req.body.course_status,
		});
		const data = await course.save();
		res.status(200).json({
			msg: "New Course Details Added",
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
exports.get_single_course = async (req, res, next) => {
	try {
		const data = await Course.findById(req.params.courseId);
		if (data) {
			res.status(200).json({
				msg: "Course Details Found",
				singledata: data,
			});
		} else {
			res.status(400).json({
				msg: "No course details found for this id",
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
exports.update_course = async (req, res, next) => {
	try {
		const data = await Course.findByIdAndUpdate(req.params.courseId, req.body);
		res.status(200).json({
			msg: "Course Details Updated Successfully",
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
exports.delete_course = async (req, res, next) => {
	try {
		const data = await Course.findByIdAndDelete(req.params.courseId);
		if (!data) {
			res.status(404).json({
				msg: "No course details found for this id",
			});
		} else {
			res.status(200).json({
				msg: "Course Details Deleted Successfully",
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
