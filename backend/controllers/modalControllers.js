import asyncHandler from "express-async-handler";
import Modal from "../models/modalModel.js";
import WModal from "../models/womenModalModel.js";

// @desc    Fetch Modal
// @route   GET /api/modal
// @access  Public
const getModal = asyncHandler(async (req, res) => {
  const modal = await Modal.find({}).sort({ _id: -1 }).limit(1);
  res.json(modal);
});

// @desc    Fetch Women Modal
// @route   GET /api/modal/sub-domain
// @access  Public
const getWModal = asyncHandler(async (req, res) => {
  const modal = await WModal.find({}).sort({ _id: -1 }).limit(1);
  res.json(modal);
});

// @desc    Delete Modal
// @route   DELETE /api/modal/:id
// @access  Private
const deleteModal = asyncHandler(async (req, res) => {
  const singleModal = await Modal.findById(req.params.id);
  if (singleModal) {
    await singleModal.remove();
    res.json({ message: "Modal Deleted Successfully" });
  } else {
    res.status(404);
    throw new Error("Modal not found");
  }
});

// @desc    Delete Women Modal
// @route   DELETE /api/modal/sub-domain/:id
// @access  Private
const deleteWModal = asyncHandler(async (req, res) => {
  const singleModal = await WModal.findById(req.params.id);
  if (singleModal) {
    await singleModal.remove();
    res.json({ message: "Modal Deleted Successfully" });
  } else {
    res.status(404);
    throw new Error("Modal not found");
  }
});

// @desc    Create Modal
// @route   POST /api/modal
// @access  Private
const createModal = asyncHandler(async (req, res) => {
  const modal = await Modal.findOne();

  if (modal) {
    const { image } = req.body;
    modal.image = req.body.image || modal.image;

    const updatedModal = await modal.save();

    res.json({
      _id: updatedModal._id,
      image: updatedModal.image,
    });
  } else {
    const { image } = req.body;
    const newModal = await Modal.create({
      image,
    });

    if (newModal) {
      res.status(201).json({
        _id: newModal._id,
        image: newModal.image,
      });
    } else {
      res.status(400);
      throw new Error("Invalid Modal Data");
    }
  }
});

// @desc    Create Women Modal
// @route   POST /api/modal/sub-domain
// @access  Private
const createWModal = asyncHandler(async (req, res) => {
  const modal = await WModal.findOne();

  if (modal) {
    const { image } = req.body;
    modal.image = req.body.image || modal.image;
    modal.thumbnail = req.body.thumbnail || modal.thumbnail;

    const updatedModal = await modal.save();

    res.json({
      _id: updatedModal._id,
      image: updatedModal.image,
      thumbnail: updatedModal.thumbnail,
    });
  } else {
    const { image, thumbnail } = req.body;
    const newModal = await WModal.create({
      image,
      thumbnail,
    });

    if (newModal) {
      res.status(201).json({
        _id: newModal._id,
        image: newModal.image,
        thumbnail: newModal.thumbnail,
      });
    } else {
      res.status(400);
      throw new Error("Invalid Modal Data");
    }
  }
});

export {
  getModal,
  deleteModal,
  createModal,
  getWModal,
  deleteWModal,
  createWModal,
};
