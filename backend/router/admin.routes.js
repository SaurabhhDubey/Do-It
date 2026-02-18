import express from "express";
import {
  getDashboardStats,
  getAllUsers,
  getAllVendors,
  blockUser
} from "../controllers/admin.controllers.js";

import authMiddleware from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const adminRouter = express.Router();

adminRouter.get("/dashboard", authMiddleware, isAdmin, getDashboardStats);
adminRouter.get("/users", authMiddleware, isAdmin, getAllUsers);
adminRouter.get("/vendors", authMiddleware, isAdmin, getAllVendors);
adminRouter.put("/block/:id", authMiddleware, isAdmin, blockUser);

export default adminRouter;
