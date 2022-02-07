import { api } from "./api";
export const userAPI = {
  getImageHistoryList: () => {
    return api.get("/api/ConvertedImages/Get/GetImagesId");
  },
  getImageById: (id) => {
    return api.get("/api/ConvertedImages/Get/GetImageById", {
      params: { imageId: id },
      responseType: "blob",
    });
  },
};

export default api;
