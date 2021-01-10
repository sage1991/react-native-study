import axios from "axios";


// FIXME: ngrok change url in every 8 hours. change "baseURL" when restart project
export const tracker = axios.create({
  baseURL: "http://5b69730d1c4c.ngrok.io"
});