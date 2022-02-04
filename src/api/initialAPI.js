import api from "./userAPI";
export const initialAPI = {
  initialExt: () => {
    return api.get("AvailableExtensions");
  },
};
