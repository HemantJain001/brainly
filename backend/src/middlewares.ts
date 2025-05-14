import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

declare module "express-serve-static-core" {
    interface Request {
        userId?: string;
    }
}

export const userMiddleware = (req : Request, res : any, next : NextFunction) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
            return res.status(401).json({ message: "Authorization header is missing" });
        }


    const verifyToken = jwt.verify(authHeader, JWT_SECRET);

    console.log(verifyToken);

    if (!verifyToken) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    req.userId = (verifyToken as any).userId;
    console.log(req.userId);
    next();
}