import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen/index"

const cld = new Cloudinary({cloud: {cloudName: import.meta.env.VITE_CLOUD_NAME}})

const CloudImage = ({ publicId }) => {
    if (!publicId) return null;
  
    const img = cld.image(publicId).format("auto").quality("auto");
  
    return <AdvancedImage cldImg={img} />;
  };
  

export default CloudImage;