import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";


const CookiePopup = ({setShow, setShowChangeConsent, setPopupVisible, popupVisible, setIsButtonVisible, setConsentGiven}) => {
    const [language, setLanguage] = useState('English');
    const { data: session } = useSession();
    const router = useRouter();


    useEffect(() => {
        const hasConsented = getCookie('site_consent') === "true" ? true : false;
        setConsentGiven(hasConsented);

        if (!hasConsented && getCookie('site_consent') !== "false" ) {
            setShow(true);
            setPopupVisible(true);
        } else {
            setPopupVisible(false);
            setShow(false);
            setShowChangeConsent(true);
        }
    }, []);


    const toggleStorage = (prop) => {
        setCookie('site_consent', prop ? "true" : "false", 365);
        setConsentGiven(prop);
        setPopupVisible(false);
    }

    const acceptCookies = () => {
        toggleStorage(true);
        setPopupVisible(false);
        setShow(false);
        setShowChangeConsent(true);
        setIsButtonVisible(true);
    }

    const declineCookies = () => {
        setPopupVisible(false);
        toggleStorage(false);
        setShow(false);
        setShowChangeConsent(true);
        setIsButtonVisible(false);
    }

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }


    function closePopup() {
        setPopupVisible(false);
        setShow(false);
    }

    async function declineCookiesLogout() {
        await toggleStorage(false);
        await router.push('/');
        await signOut();
    }

    const changeLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === 'English' ? 'German' : 'English');
    }

    return (
        <>
            {popupVisible && (
                <div className="fixed text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md z-50 w-11/12 md:max-w-md shadow-2xl">
                    <div>
                        <div className="sticky top-0 left-0 right-0 flex justify-center border-b border-gray-100 p-4 font-bold">
                            <h2 className="text-sm md:text-lg">{language === 'English' ? 'Cookies and Data Privacy Settings' : 'Cookies und Datenschutzeinstellungen'}</h2>
                        </div>
                        <div className="text-justify px-2 text-xs md:text-sm">
                            <div className="overflow-y-auto pl-2 pr-4 py-4 max-h-[calc(100vh-400px)]">
                                {language === 'English' ? (
                                    <>
                                        <p className="mb-2">By clicking the &quot;Accept All&quot; button, you consent to this website using
                                            cookies and
                                            similar
                                            technologies to store and retrieve information on your device. These
                                            technologies
                                            are used to
                                            conduct comprehensive evaluations of your visits and the use of our website.
                                            They
                                            enable detailed
                                            analysis of your activities to create a customized online experience. We
                                            tailor
                                            content and features
                                            to your preferences and interests to provide you with the greatest benefit
                                            possible.</p>
                                        <p className="mb-2">Please be aware that by using these technologies, data may be stored on your
                                            device
                                            and may be
                                            transmitted to third parties. This transmission may also occur to countries
                                            that may
                                            not have
                                            sufficient data protection standards.</p>
                                        <p className="mb-2">You have the right to refuse and to change or revoke your consent at a later
                                            time.
                                            Further
                                            information about how we handle your data and the technologies we use can be
                                            found
                                            in our <Link href={"/privacy-policy"} onClick={closePopup} className="text-sky-500 hover:text-sky-300">privacy policy</Link>.</p>
                                        <p className="mb-2">Are you under 16 years old? Unfortunately, you are not entitled to
                                            independently
                                            consent to this
                                            service in order to view this content. Please ask your parents or legal
                                            guardians to
                                            agree to the
                                            service together with you!</p>
                                    </>
                                ) : (
                                    <>
                                        <p className="mb-2">
                                            Durch Betätigung der Schaltfläche &quot;Alle akzeptieren&quot; geben Sie Ihre
                                            Zustimmung, dass diese Webseite
                                            Cookies und ähnliche Technologien einsetzt, um Informationen auf Ihrem
                                            Endgerät zu speichern und
                                            auszulesen. Diese Technologien dienen dazu, umfangreiche Auswertungen über
                                            Ihre Besuche und die
                                            Nutzung unserer Webseite durchzuführen.
                                            Dabei ermöglichen sie eine detaillierte Analyse Ihrer Aktivitäten, um ein
                                            maßgeschneidertes
                                            Online-Erlebnis zu gestalten. Wir passen Inhalte und Funktionen individuell
                                            an Ihre Präferenzen und
                                            Interessen an, um Ihnen den größtmöglichen Nutzen zu bieten.
                                        </p>
                                        <p className="mb-2">
                                            Bitte berücksichtigen Sie, dass durch die Nutzung dieser Technologien Daten
                                            auf Ihrem Gerät
                                            gespeichert
                                            und
                                            an Drittanbieter weitergegeben werden können. Diese Übermittlung kann auch
                                            in Länder erfolgen, die
                                            möglicherweise nicht über ein angemessenes Datenschutzniveau verfügen.
                                        </p>
                                        <p className="mb-2">
                                            Sie haben das Recht, nicht einzuwilligen und deine Einwilligung zu einem
                                            späteren Zeitpunkt zu
                                            ändern oder zu widerrufen.
                                            Weitere Informationen zu unserem Umgang mit Ihren Daten und den von uns
                                            verwendeten Technologien
                                            finden
                                            Sie in unserer ausführlichen <Link
                                            href={"/privacy-policy#terms-de"} onClick={closePopup} className="text-sky-500 hover:text-sky-300">Datenschutzerklärung</Link>.
                                        </p>
                                        <p className="mb-2">
                                            Du bist unter 16 Jahre alt? Bedauerlicherweise bist du nicht berechtigt,
                                            diesem Dienst eigenständig
                                            zuzustimmen, um diese Inhalte anzusehen. Bitte ersuche deine Eltern oder
                                            Erziehungsberechtigten
                                            darum,
                                            dem Dienst gemeinsam mit dir zuzustimmen!
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="border-t h-full border-transparent shadow-custom">
                            <button className="block w-3/4 mx-auto my-4 px-6 py-1 md:py-3 font-semibold rounded-md cursor-pointer bg-red-600 text-white hover:bg-gray-400 hover:text-red-600" onClick={acceptCookies}>
                                {language === 'English' ? 'Accept All' : 'Alle akzeptieren'}
                            </button>
                            {!session ? (
                                <button className="block w-3/4 mx-auto my-4 px-6 py-1 md:py-3 font-semibold rounded-md cursor-pointer bg-red-600 text-white hover:bg-gray-400 hover:text-red-600" onClick={declineCookies}>
                                    {language === 'English' ? 'Reject' : 'Ablehnen'}
                                </button>
                                )
                                :
                                (
                                <button className="block w-3/4 mx-auto my-4 px-6 py-1 md:py-3 font-semibold rounded-md cursor-pointer bg-red-600 text-white hover:bg-gray-400 hover:text-red-600" onClick={declineCookiesLogout}>
                                    {language === 'English' ? 'Reject' : 'Ablehnen'}
                                </button>
                                )
                            }

                        </div>
                        <div className="sticky text-black text-center p-2 w-full border-t border-gray-100 text-sm md:text-base">
                            <Link href={language === 'English' ? "/legal-notice" : "/legal-notice#terms-de"}
                                  className=" inline-block mx-2 hover:text-gray-600" onClick={closePopup}>
                                {language === 'English' ? 'Legal Notice' : 'Impressum'}
                            </Link>
                            <span className="inline-block text-gray-200">|</span>
                            <Link href={language === 'English' ? "/privacy-policy" : "/privacy-policy#terms-de"}
                                  className=" inline-block mx-2 hover:text-gray-600" onClick={closePopup}>
                                {language === 'English' ? 'Privacy Policy' : 'Datenschutzerklärung'}
                            </Link>
                            <button className="inline-block m-2 cursor-pointer border-none rounded-md px-3 py-0.5 md:py-1 bg-red-600 text-white hover:bg-gray-400 hover:text-red-600"
                                    onClick={changeLanguage}>{language === 'English' ? 'DE' : 'ENG'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <style>
                {`
          .shadow-custom {
            box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
          }
        `}
            </style>
        </>
    );
}

export default CookiePopup;