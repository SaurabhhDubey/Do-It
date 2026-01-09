import express from "express";
import { registeruser , login } from "../controllers/auth.controllers.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register" , registeruser);
router.post("/login" , login);

router.get("/" , authMiddleware ,(req ,res)=>{
    res.json({
        message:"profile data", user:req.user
    });
} );

export default router;