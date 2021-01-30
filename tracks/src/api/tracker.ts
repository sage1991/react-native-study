import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Key } from "../persistence/Key";


// FIXME: ngrok change url in every 8 hours. change "baseURL" when restart project
const tracker = axios.create({
  baseURL: "https://b43ae958e045.ngrok.io"
});

tracker.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem(Key.TOKEN);
    if (token) config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    return config;
  },
  (error) => Promise.reject(error)
);

export { tracker };