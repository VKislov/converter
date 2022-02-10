import { api } from "./api";



export const fileUploaderAPI = {
  sendImageToServer: (formData:any) => {
    return api.post("ImageConverter", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    });
  },
};