import { api } from "./api";
export const initialAPI = {
  initialExt: () => {
    return api.get("AvailableExtensions");
  },
};
