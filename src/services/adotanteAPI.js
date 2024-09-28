import client from "./configs/axiosConfig";

export const postProfilePicture = (formData) => {
    return client.post("/api/cloudinary/upload", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
}