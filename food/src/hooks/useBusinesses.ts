import { useEffect, useState } from "react";
import { search } from "../service/Yelp";

interface NetworkState {
  message: string;
  error: boolean;
}

type SearchApi = (query: string) => Promise<void>;

export const useBusinesses = (): [ SearchApi, any[], NetworkState | undefined ] => {
  const [ networkState, setNetworkState ] = useState<NetworkState>();
  const [ businesses, setBusinesses ] = useState<any[]>([]);

  const searchApi = async (_query: string) => {
    try {
      console.log("send request");
      setNetworkState({ error: false, message: "" });
      const response = await search(_query);
      setBusinesses(response.data.businesses);
    } catch (e) {
      console.log(e);
      setNetworkState({ error: true, message: e.message });
    }
  }

  useEffect(() => {
    searchApi("");
  }, []);

  return [ searchApi, businesses, networkState ];
}