import express, { Request } from "express";
import { AuthorizedRequest, requireAuth } from "../middlewares/requireAuth";
import { Track } from "../models/Track";


const router = express.Router();
router.use(requireAuth);

router.get("/tracks", async (request: AuthorizedRequest, response) => {
  const tracks = await Track.find({ userId: request.user!._id });
  response.send(tracks);
});

router.post("/tracks", async (request: AuthorizedRequest, response) => {
  const { name, locations } = request.body;
  const { user } = request;
  if (!name || !locations) return response.status(422).send({ error: "you must provide a name and locations" });

  try {
    const track = new Track({ name, locations, userId: user?._id });
    await track.save();
    response.send(track);
  } catch (e) {
    response.status(422).send({ error: e.message });
  }
});

export { router as TrackRoutes };