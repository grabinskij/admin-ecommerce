import {authOptions} from "./auth/[...nextauth]";
import {mongooseConnect} from "../../lib/mongoose";
import {Category} from "../../models/Category";
import {getServerSession} from "next-auth";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    const isAdmin = await checkIfAdmin(req, res);


    if (isAdmin) {
        if (method === 'GET') {
            res.json(await Category.find().populate('parent'));
        } else if (method === 'POST') {
            const {name, parentCategory, properties} = req.body;
            const categoryDoc = await Category.create({
                name,
                parent: parentCategory || undefined,
                properties,
            });
            res.json(categoryDoc);
        } else if (method === 'PUT') {
            const {name, parentCategory, properties, _id} = req.body;
            const categoryDoc = await Category.updateOne({_id}, {
                name,
                parent: parentCategory || undefined,
                properties,
            });
            res.json(categoryDoc);
        } else if (method === 'DELETE') {
            const {_id} = req.query;
            await Category.deleteOne({_id});
            res.json('ok');
        } else {
            res.status(403).json({error: 'Method not allowed'});
        }
    } else {
        if (method === 'GET') {
            res.json(await Category.find().populate('parent'));
        } else {
            res.status(403).json({error: 'Regular users are not allowed to perform this action'});
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
