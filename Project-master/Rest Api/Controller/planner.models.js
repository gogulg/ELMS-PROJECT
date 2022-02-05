const mongoose = require("mongoose");
const Planner = require("../Model/planner");

//get
exports.get_planner = async (req, res, next) => {
	try {
		const data = await Planner.find();
		if (data) {
			res.status(200).json({
				msg: "Planner Details Found",
				datalist: data,
			});
		} else {
			res.status(400).json({
				msg: "no Planner details found",
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
exports.add_planner = async (req, res, next) => {
	try {
		const planner = new Planner({
			_id: new mongoose.Types.ObjectId(),
			id: req.body.id,
			subname: req.body.subname,
			subcode: req.body.subcode,
			sdate: req.body.sdate,
            stime:req.body.stime,
            sduration:req.body.sduration
			
		});
		const data = await planner.save();
		res.status(200).json({
			msg: "New  Details Added",
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
exports.get_single_planner = async (req, res, next) => {
	try {
		const data = await Planner.findById(req.params.plannerId);
		if (data) {
			res.status(200).json({
				msg: "Planner Details Found",
				singledata: data,
			});
		} else {
			res.status(400).json({
				msg: "No Planner details found for this id",
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
exports.update_planner = async (req, res, next) => {
	try {
		const data = await Planner.findByIdAndUpdate(req.params.plannerId, req.body);
		res.status(200).json({
			msg: "Planner Details Updated Successfully",
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
exports.delete_planner= async (req, res, next) => {
	try {
		const data = await Planner.findByIdAndDelete(req.params.plannerId);
		if (!data) {
			res.status(404).json({
				msg: "No Planner details found for this id",
			});
		} else {
			res.status(200).json({
				msg: "Planner Details Deleted Successfully",
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
