import axios from "axios";
export const fileUploaderAPI = {
  sendImageToServer: (formData) => {
    return axios({
      method: "post",
      url: "http://94.137.242.252:7777/ImageConverter",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
