import multiparty from "multiparty";
import fs from "fs";
import {v2 as cloudinary} from 'cloudinary';
import mime from "mime-types";
import {mongooseConnect} from "../../lib/mongoose";
import {isAdminRequest} from "./auth/[...nextauth]";



export default async function handle(req, res) {
    await mongooseConnect();
    await isAdminRequest(req, res);

    const form = new multiparty.Form();
    const {fields, files} = await new Promise((resolve, reject) => {
       form.parse(req, (err, fields, files) => {
           if(err) reject(err);
           resolve({fields, files});
       });
   });


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET,
});

const links = [];
for (const file of files.file) {
    const ext = file.originalFilename.split('.').pop();
    const newFilename = Date.now() + '.' + ext;
    const result = await cloudinary.uploader.upload(
        file.path, {
            Key: newFilename,
            Body: fs.readFileSync(file.path),
            ACL: 'public-read',
            ContentType: mime.lookup(file.path),
        });
    const link = result.secure_url;
    links.push(link)
}
return res.json({links});
}

export const config = {
    api: {bodyParser: false}
}