import axios, { AxiosResponse } from "axios";

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer MMMQuWnLGwlTYdSMtKujs774rvSF8-g78jwHgo35nIoahZ1df13ph_HxFOTGIpGD-_CVpb--RMaPA2clqd8koS8x58EPk6H9fkhW791Uws_LRizh44UyVyGh4feNX3Yx"
  }
});


export const search = (query: string): Promise<AxiosResponse> => {
  return yelp.get("/search", {
    params: {
      limit: 50,
      term: query,
      location: "san jose"
    }
  });
}