import { getOrderList, getOrderById, createOrder, updateOrderById, deleteOrderById } from "../controllers/order.controller.js";
import express from "express";
const router = express.Router();
import { authKeyMiddleware as authKey } from "../middleware/auth.middleware.js";

router.get("/", authKey, getOrderList);
router.get("/:id", getOrderById);
router.post("/create", createOrder);
router.put("/update/:id", updateOrderById);
router.delete("/delete/:id", authKey, deleteOrderById);

export default router;
