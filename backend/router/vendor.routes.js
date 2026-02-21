import express from "express";
import { registerVendor , getVendorStatus } from "../controllers/vendor.controllers.js";
import authMiddleware from "../middleware/auth.middleware.js";

const VendorRouter = express.Router();

VendorRouter.post("/", authMiddleware , registerVendor);
VendorRouter.get("/status", authMiddleware , getVendorStatus);

export default VendorRouter;