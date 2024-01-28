import { useSession, signIn} from "next-auth/react"
import {useState} from "react";
import Logo from "./Logo";
import Nav from "./Nav";


export default function Layout({ children }) {
    const [showNav, setShowNav] = useState(false);
    const { data: session } = useSession();
    if(!session){
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="bg-slate-100 p-8 rounded shadow-md">
                    <h2 className="flex justify-center text-2xl font-semibold mb-4">Sign In</h2>
                    <div className="flex justify-center mb-4">
                        <Logo className="block" />
                    </div>
                    <p className="text-gray-600 mb-4 text-xs md:text-sm">
                        You are not authorized to access this page. <br/>Please sign in using your Google account.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => signIn('google')}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign In with Google
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="bg-bgGrey min-h-screen">
            <div className="block md:hidden flex items-center p-4">
                <button onClick={() => setShowNav(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
                <div className="flex grow justify-center mr-6">
                    <Logo />
                </div>
            </div>
            <div className="flex">
                <Nav show={showNav} setShow={setShowNav}/>
                <div className="flex-grow bg-white min-h-screen p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}