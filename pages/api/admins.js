import {mongooseConnect} from "../../lib/mongoose";
import {authOptions} from "./auth/[...nextauth]";
import {Admin} from "../../models/Admin";
import {getServerSession} from "next-auth";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    const isAdmin = await checkIfAdmin(req, res);

    if (isAdmin) {
        if (method === 'POST') {
            const {email} = req.body;
            if (await Admin.findOne({email})) {
                res.status(400).json({message: 'Admin is already exists!'});
            } else {
                res.json(await Admin.create({email}));
            }
        }

        if (method === 'GET') {
            res.json(await Admin.find());
        }

        if (method === 'DELETE') {
            const {_id} = req.query;
            await Admin.findByIdAndDelete(_id);
            res.json(true);
        }
    } else {
        res.status(403).json({error: 'Regular users have no access'});
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