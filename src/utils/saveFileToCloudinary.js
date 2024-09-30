import cloudinary from 'cloudinary';
import { env } from './env.js';
import { CLOUDINARY } from '../constans/index.js';
import fs from 'node:fs/promises';

cloudinary.v2.config({
    secure: true,
    cloud_name: env(CLOUDINARY.CLOUD_NAME),
    api_kay: env(CLOUDINARY.API_KEY),
    api_secret: env(CLOUDINARY.API_SECRET),
});

export const saveFileToCloudinary = async(file)=>{
    const response = await
    cloudinary.v2.uploader.upload(file.path);
    await fs.unlink(file.path);
    
    return response.secure_url;
};