const mongoose = require("mongoose");
const Category = require("../model/category");

//get
exports.get_category = async (req, res, next) => {
	try {
		const data = await Category.find();
		if (data) {
			res.status(200).json({
				msg: "Category Details Found",
				datalist: data,
			});
		} else {
			res.status(400).json({
				msg: "no category details found",
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
exports.add_category = async (req, res, next) => {
	try {
		const category = new Category({
      _id: new mongoose.Types.ObjectId(),
      catid: req.body.catid,
      catname: req.body.catname,
		});
		const data = await category.save();
		res.status(200).json({
			msg: "New Category Details Added",
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
exports.get_single_category = async (req, res, next) => {
	try {
		const data = await Category.findById(req.params.categoryId);
		if (data) {
			res.status(200).json({
				msg: "Category Details Found",
				singledata: data,
			});
		} else {
			res.status(400).json({
				msg: "No category details found for this id",
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
exports.update_category = async (req, res, next) => {
	try {
		const data = await Category.findByIdAndUpdate(req.params.categoryId, req.body);
		res.status(200).json({
			msg: "Category Details Updated Successfull",
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
exports.delete_category = async (req, res, next) => {
	try {
		const data = await Category.findByIdAndDelete(req.params.categoryId);
		if (!data) {
			res.status(404).json({
				msg: "No category details found for this id",
			});
		} else {
			res.status(200).json({
				msg: "Category Details Deleted Successfully",
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
