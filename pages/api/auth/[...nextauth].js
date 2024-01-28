import NextAuth, { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import clientPromise from '../../../lib/mongodb';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { User } from '../../../models/User';
import { Admin } from '../../../models/Admin';
import {mongooseConnect} from "../../../lib/mongoose";


mongooseConnect();


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        session: async ({ session, token, user }) => {
            const userEmail = session?.user?.email;

            if (userEmail) {
                // Check if the user's email is in the User collection
                const isRegularUser = await User.exists({ email: userEmail });

                // Check if the user's email is in the Admin collection
                const isAdmin = await Admin.exists({ email: userEmail });

                if (isAdmin) {
                    session.user.isAdmin = true;
                } else {
                    session.user.isAdmin = false;
                }

                if (isRegularUser) {
                    session.user.isRegularUser = true;
                } else {
                    session.user.isRegularUser = false;
                }
            }

            return session;
        },
    },
};


export const isAdminRequest = async (req, res) => {
    const session = await getServerSession(req, res, authOptions);

    if (!session || !session.user) {
        res.status(401);
        res.end();
        throw new Error('User not authenticated');
    }

    if (!session.user.isAdmin) {
        res.status(403);
        res.end();
        throw new Error('User is not an admin');
    }
};


export default NextAuth(authOptions);


export async function protectedRoute(req, res) {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
        res.status(401);
        res.end();
        throw 'not authenticated';
    }
}

