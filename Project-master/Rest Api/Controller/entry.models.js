const mongoose = require("mongoose");
const Entry = require("../Model/entry");

//get
exports.get_entry = async (req, res, next) => {
	try {
		const data = await Entry.find();
		if (data) {
			res.status(200).json({
				msg: "Marks Details Found",
				datalist: data,
			});
		} else {
			res.status(400).json({
				msg: "no Marks details found",
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
exports.add_entry = async (req, res, next) => {
	try {
		const entry = new Entry({
			_id: new mongoose.Types.ObjectId(),
			stuid: req.body.stuid,
			stuname: req.body.stuname,
			evs: req.body.evs,
			english: req.body.english,
            hindi:req.body.hindi,
            maths:req.body.maths,
            gk:req.body.gk,
            science:req.body.science
			
			
		});
		const data = await entry.save();
		res.status(200).json({
			msg: "New Marks Details Added",
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
exports.get_single_entry = async (req, res, next) => {
	try {
		const data = await Entry.findById(req.params.entryId);
		if (data) {
			res.status(200).json({
				msg: "Marks Details Found",
				singledata: data,
			});
		} else {
			res.status(400).json({
				msg: "No marks details found for this id",
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
exports.update_entry = async (req, res, next) => {
	try {
		const data = await Entry.findByIdAndUpdate(req.params.entryId, req.body);
		res.status(200).json({
			msg: "Marks Details Updated Successfully",
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
exports.delete_entry= async (req, res, next) => {
	try {
		const data = await Entry.findByIdAndDelete(req.params.entryId);
		if (!data) {
			res.status(404).json({
				msg: "No Marks details found for this id",
			});
		} else {
			res.status(200).json({
				msg: "Marks Details Deleted Successfully",
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
