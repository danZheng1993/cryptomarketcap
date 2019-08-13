import { API_KEY, API_BASE_URL } from "../config";
import { stringify } from "query-string";

export const getLatestListings = queryObj => {
  const qs = stringify(queryObj);
  return fetch(`${API_BASE_URL}/v1/cryptocurrency/listings/latest?${qs}`, {
    method: 'GET',
    headers: {
      "X-CMC_PRO_API_KEY": API_KEY
    },
  }).then(response => response.json());
};
