import express from "express";
import { User } from "../models/User";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (request, response) => {
  const { email, password } = request.body;
  try {
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    response.send({ token });
  } catch (e) {
    return response.status(422).send(e.message);
  }
});

router.post("/signin", async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(422).send({ error: "must provide email and password" });
  }

  const user = await User.findOne({ email });
  if (!user) return response.status(404).send({ error: "email not found" });

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    response.send({ token });
  } catch (e) {
    return response.status(401).send({ error: "invalid password or email" });
  }
});


export { router as authRoutes };