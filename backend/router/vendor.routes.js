import express from "express";
import { registerVendor } from "../controllers/vendor.controllers.js";
import authMiddleware from "../middleware/auth.middleware.js";

const VendorRouter = express.Router();

VendorRouter.post("/register", authMiddleware , registerVendor);

export default VendorRouter;