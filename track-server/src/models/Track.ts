import mongoose, { Schema, Document } from "mongoose";


interface PointModel {
  timestamp: number;
  coords: {
    latitude: number;
    longitude: number;
    altitude: number;
    accuracy: number;
    heading: number;
    speed: number;
  }
}

interface TrackModel {
  userId: string;
  name: string;
  location: PointModel[];
}

export interface TrackDocument extends TrackModel, Document {

}


const pointSchema: Schema<PointModel> = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  }
});

const trackSchema: Schema<TrackModel> = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
  },
  locations: [ pointSchema ]
});

export const Track = mongoose.model<TrackDocument>("Track", trackSchema);
