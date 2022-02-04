import api from "./userAPI";
export const fileUploaderAPI = {
  sendImageToServer: (formData) => {
    return api.post("ImageConverter", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${localStorage.getItem("token")}`,
      },
      responseType: "blob",
    });
  },
};
