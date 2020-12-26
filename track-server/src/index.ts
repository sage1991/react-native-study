import express from "express";
import mongoose from "mongoose";
import "./models/User";
import "./models/Track";
import { authRoutes } from "./routes/authRoutes";
import bodyParser from "body-parser";
import { AuthorizedRequest, requireAuth } from "./middlewares/requireAuth";
import { TrackRoutes } from "./routes/trackRoutes";

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(TrackRoutes);

const mongoURI = "mongodb+srv://harry:harry@cluster0.haimp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance!");
});

mongoose.connection.on("error", (error) => {
  console.log("error connecting to mongo", error);
});

app.get("/", requireAuth, (request: AuthorizedRequest, response) => {
  response.send(`HI~ ${request.user?.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});