import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryByName,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  getDetailedCategories,
} from "../controllers/category.controller.js";

const router = express.Router();

router.post("/create", createCategory);
router.get("/:name", getCategoryByName);
router.get("/:id", getCategoryById);
router.put("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);
router.get("/products/amount", getDetailedCategories);

router.get("/", getCategories);

export default router;
