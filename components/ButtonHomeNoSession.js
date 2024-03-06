import Link from "next/link";

function ButtonHomeNoSession({setPopupVisible, setShowOverlay, showChangeConsent}) {

    function openCookieBanner() {
        if(!showChangeConsent){
            setPopupVisible(true);
            setShowOverlay(true);
        }else{
            return
        }
    }

    return (
        <Link href="/">
            <button onClick={openCookieBanner} className="inline-block px-5 py-2 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-700 mb-12 lg:mb-0">Go to Home</button>
        </Link>
    );
}

export default ButtonHomeNoSession;
