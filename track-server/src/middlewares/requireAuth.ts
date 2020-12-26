import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User, UserDocument } from "../models/User";


export interface AuthorizedRequest extends Request {
  user?: UserDocument;
}

export const requireAuth = (request: Request, response: Response, next: NextFunction) => {
  const { authorization } = request.headers;
  if (!authorization) return response.status(401).send("you must be logged in.");

  const token = authorization.split(" ")[1];

  jwt.verify(token, "MY_SECRET_KEY", async (error, payload) => {
    if (error) return response.status(401).send("invalid token.");

    const { userId } = payload as any;
    const user = await User.findById(userId);

    if (!user) return response.status(404).send({ error: "user not found." });
    (request as AuthorizedRequest).user = user;

    next();
  });
}