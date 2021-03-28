import express from "express";
const router = express.Router();
import { addOrderItems, getOrderById, UpdateOrderToPaid, getMyOrders } from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddlewares.js";

router.route("/").post(protect, addOrderItems);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, UpdateOrderToPaid);

export default router;
