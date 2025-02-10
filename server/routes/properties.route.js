import express from "express";
const router = express.Router();
import {
  createNewProperty,
  deleteProperty,
  getAllProperites,
  getProperty,
  updateProperty,
} from "../controllers/property.controller.js";

router.route("/")
  .get(getAllProperites)
  .post(createNewProperty);

router.route("/:id")
  .get(getProperty)
  .put(updateProperty)
  .delete(deleteProperty);

export default router;
