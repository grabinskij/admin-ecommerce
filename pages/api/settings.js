import {getServerSession} from "next-auth";
import {authOptions} from "./auth/[...nextauth]";
import {mongooseConnect} from "../../lib/mongoose";
import {Setting} from "../../models/Setting";
import {error} from "next/dist/build/output/log";

export default async function handle(req, res) {
const {method} = req;
await mongooseConnect();

const isAdmin = await checkIfAdmin(req, res);


if (isAdmin) {
    if (method === 'GET') {
        const {name} = req.query;
        res.json(await Setting.findOne({name}));
    } else if (method === 'PUT') {
        const {name, value} = req.body;
        const settingDoc = await Setting.findOne({name});
        if (settingDoc) {
            settingDoc.value = value;
            await settingDoc.save();
            res.json(settingDoc);
        } else {
            res.json(await Setting.create({name, value}));
        }
    } else {
        res.status(403).json({error: 'Method not allowed'});
        alert(error.message);
    }
} else {
    if (method === 'GET') {
        const {name} = req.query;
        res.json(await Setting.findOne({name}));
    } else {
        res.status(403).json({error: 'Regular users are not allowed to perform this action'});
        alert(error.message);
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


