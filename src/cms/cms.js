import CMS from "netlify-cms-app";

// Import and register Cloudinary media library
import cloudinary from "netlify-cms-media-library-cloudinary";

CMS.registerMediaLibrary(cloudinary);
