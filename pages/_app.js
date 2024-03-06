import '@/styles/globals.css';
import '@/styles/stats.css';
import {SessionProvider} from "next-auth/react";
import Layout from "../components/Layout";
import Overlay from "../components/Overlay";
import CookiePopup from "../components/CookiePopup";
import ChangeConsentBanner from "../components/ChangeConsentBanner";
import {useState} from "react";


export default function App({Component, pageProps: {session, ...pageProps}}) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showChangeConsent, setShowChangeConsent] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [consentGiven, setConsentGiven] = useState(null);

    return (
        <>
            <SessionProvider session={session}>
                <Overlay show={showOverlay}/>
                <CookiePopup
                    setConsentGiven={setConsentGiven}
                    setIsButtonVisible={setIsButtonVisible}
                    setPopupVisible={setPopupVisible}
                    popupVisible={popupVisible}
                    setShow={setShowOverlay}
                    setShowChangeConsent={setShowChangeConsent}
                />
                <ChangeConsentBanner
                    setShowPopup={setPopupVisible}
                    showChangeConsent={showChangeConsent}
                />
                <Layout consentGiven={consentGiven} setPopupVisible={setPopupVisible}>
                    <Component
                        {...pageProps}
                        setShowOverlay={setShowOverlay}
                        setPopupVisible={setPopupVisible}
                        showChangeConsent={showChangeConsent}
                    />
                </Layout>
            </SessionProvider>
        </>
    )
}
