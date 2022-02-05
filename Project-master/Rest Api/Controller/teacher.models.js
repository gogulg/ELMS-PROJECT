const mongoose = require("mongoose");
const Teacher = require("../Model/teacher");

//get
exports.get_log_teacher = async (req, res, next) => {
	try {
		const data = await Teacher.find();
		if (data) {
			res.status(200).json({
				msg: "Login Details Found",
				datalist: data,
			});
		} else {
			res.status(400).json({
				msg: "no login details found",
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
exports.add_log_teacher = async (req, res, next) => {
	try {
		const teacher = new Teacher({
			_id: new mongoose.Types.ObjectId(),
			username: req.body.username,
			password: req.body.password,
			name: req.body.name,
			designation:  req.body.designation,
			t_id:  req.body.t_id,
			department:  req.body.department,
			city:  req.body.city,
			p_id:  req.body.p_id,
			contact:  req.body.contact,
			dob:  req.body.dob,
			type: req.body.type,
			
		});
		const data = await teacher.save();
		res.status(200).json({
			msg: "New login Details Added",
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
// exports.get_single_log_dtls = async (req, res, next) => {
// 	try {
// 		const data = await Teacher.findById(req.params.loginId);
// 		if (data) {
// 			res.status(200).json({
// 				msg: "Login Details Found",
// 				singledata: data,
// 			});
// 		} else {
// 			res.status(400).json({
// 				msg: "No login details found for this id",
// 			});
// 		}
// 	} catch (err) {
// 		res.status(500).json({
// 			msg: "something went wrong.. pls try again",
// 			error: err,
// 		});
// 	}
// };

//put
// exports.update_log_dtls = async (req, res, next) => {
// 	try {
// 		const data = await Teacher.findByIdAndUpdate(req.params.loginId, req.body);
// 		res.status(200).json({
// 			msg: "Login Details Updated Successfull",
// 			datalist: data,
// 		});
// 	} catch (err) {
// 		res.status(500).json({
// 			msg: "something went wrong.. pls try again",
// 			error: err,
// 		});
// 	}
// };