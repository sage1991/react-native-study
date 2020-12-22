import axios from "axios";

export const jsonServer = axios.create({
  baseURL: "http://1d135804a16c.ngrok.io"
})