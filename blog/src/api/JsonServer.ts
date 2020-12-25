import axios from "axios";

export const jsonServer = axios.create({
  baseURL: "http://b57735e3bcd8.ngrok.io"
})