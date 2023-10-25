import { useSession, signIn} from "next-auth/react"
import Nav from '@/components/Nav';


export default function Layout({ children }) {
    const { data: session } = useSession();
    if(!session){
        return (
            <div className='w-screen h-screen flex items-center'>
                <div className="text-center w-full">
                    <button onClick={() => signIn('google')} className="bg-emerald-400 p-2 px-4 rounded-md">Login</button>
                </div>
            </div>
        );
    }
    return (
        <div className="bg-stone-200">
            <div className="flex">
                <Nav />
                <div className="flex-grow bg-white min-h-screen p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}