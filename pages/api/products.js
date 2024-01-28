import {authOptions} from "./auth/[...nextauth]";
import {getServerSession} from "next-auth";
import {mongooseConnect} from "../../lib/mongoose";
import {Product} from "../../models/Product";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

   const isAdmin = await checkIfAdmin(req, res);


   if (isAdmin) {
      if (method === 'GET') {
         if (req.query?.id) {
            res.json(await Product.findOne({ _id: req.query.id }));
         } else {
            res.json(await Product.find());
         }
      } else if (method === 'POST') {
            const {title, description, price, images, category, properties} = req.body;
            const productDoc = await Product.create({
               title, description, price, images, category, properties
            })
            res.json(productDoc);
      } else if (method === 'PUT') {
            const {title, description, price, images, category, properties, _id} = req.body;
            await Product.updateOne({_id}, {title, description, price, images, category, properties});
            res.json(true);
      } else if (method === 'DELETE') {
            if(req.query?.id) {
               await Product.deleteOne({_id:req.query?.id});
               res.json(true);
            }
      } else {
         res.status(403).json({ error: 'Method not allowed' });
      }
   } else {
      if (method === 'GET') {
         if (req.query?.id) {
            res.json(await Product.findOne({ _id: req.query.id }));
         } else {
            res.json(await Product.find());
         }
      } else {
         res.status(403).json({ error: 'Regular users are not allowed to perform this action' });
      }
   }
}

async function checkIfAdmin(req, res) {
   const session = await getServerSession(req, res, authOptions);

   if (!session || !session.user) {
      res.status(401);
      res.end();
      return false;
   }

   return !!session.user.isAdmin;
}
