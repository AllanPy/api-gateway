import { Request } from "express";
import jwt from 'jsonwebtoken';
import env from "./config/environment";

export default function isAuthenticated(req: Request) {
  const authHeader = req.headers.authorization;
  if(!authHeader) {
    return false;
  } else {
    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, env.JWT_SECRET);
    return !!payload;
  }
}
