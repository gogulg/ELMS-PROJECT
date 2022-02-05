const mongoose = require("mongoose");
const Login = require("../Model/login");

//get
exports.get_log_dtls = async (req, res, next) => {
	try {
		const data = await Login.find();
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
exports.add_log_dtls = async (req, res, next) => {
	try {
		const login = new Login({
			_id: new mongoose.Types.ObjectId(),
			username: req.body.username,
			password: req.body.password,
			type:req.body.type
		});
		const data = await login.save();
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
exports.get_single_log_dtls = async (req, res, next) => {
	try {
		const data = await Login.findById(req.params.loginId);
		if (data) {
			res.status(200).json({
				msg: "Login Details Found",
				singledata: data,
			});
		} else {
			res.status(400).json({
				msg: "No login details found for this id",
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
exports.update_log_dtls = async (req, res, next) => {
	try {
		const data = await Login.findByIdAndUpdate(req.params.loginId, req.body);
		res.status(200).json({
			msg: "Login Details Updated Successfull",
			datalist: data,
		});
	} catch (err) {
		res.status(500).json({
			msg: "something went wrong.. pls try again",
			error: err,
		});
	}
};

