import React from 'react';
import ButtonHome from "../components/ButtonHome";
import ButtonHomeNoSession from "../components/ButtonHomeNoSession";
import {useSession} from "next-auth/react";


const LegalNotice = ({setPopupVisible, setShowOverlay, showChangeConsent}) => {

    const { data: session } = useSession();

    return (
        <div className="flex justify-center items-center leading-6">
            <div className="max-w-6xl w-full mx-auto px-4 text-black md:px-20 text-left">

                <div id="terms-eng" className="pt-4">
                    <div className="block w-full lg:flex lg:justify-between items-center mt-4 mb-24 lg:mb-12 h-32">
                        <div className="outline-none border-none bg-transparent p-0 space-x-4">
                            <button className="outline-none border-none bg-transparent p-0 text-left">
                                <a href='#terms-de'
                                   className="inline-block px-4 py-2 bg-blue-500 text-white mb-30 rounded transition duration-300 hover:bg-blue-700">DE</a>
                            </button>
                            <button className="outline-none border-none bg-transparent p-0 text-left">
                                <a href='#terms-eng'
                                   className="inline-block px-5 py-2 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-700">ENG</a>
                            </button>
                        </div>
                        <h1 className="m-auto text-center text-2xl md:text-4xl pb-30 font-bold my-8">Legal Notice</h1>
                        {!session ? (

                                <ButtonHomeNoSession setPopupVisible={setPopupVisible} setShowOverlay={setShowOverlay} showChangeConsent={showChangeConsent}/>
                            )
                            :
                            (
                                <ButtonHome/>
                            )
                        }
                    </div>
                </div>


                <p className="text-lg mb-10">
                    Bohdan Hrabynskyi<br/>
                    Ringstraße 9<br/>
                    17268 Templin
                </p>

                <p className="text-lg mb-10">
                    <span className="font-semibold">Contact:</span><br/>
                    Phone: +49 (0) 162 63 20 634<br/>
                    Email: <a href='mailto:bogdan.grabinskij@gmail.com'
                              className="block break-all max-w-max text-blue-500 hover:text-blue-700"
                >
                    bogdan.grabinskij@gmail.com
                </a>
                </p>

                <p className="text-lg mb-10">
                    <span className="font-semibold">Responsible for the content of the website:</span><br/>
                    Bohdan Hrabynskyi
                </p>

                <br/>
                <br/>

                <h2 className="text-xl md:text-2xl pb-30 font-semibold mb-6">Purpose and Use</h2>
                <p className="text-lg mb-20">Our pages are designed and operated as hobby websites. Our pages are
                    not used for commercial
                    purposes,
                    and no
                    payments are made or accepted. Nothing can be sold or purchased on our pages. Our pages are only
                    prototypes to
                    demonstrate how a real e-commerce website, educational website, informational website, or any
                    other
                    website
                    might look.
                </p>

                <h2 className="text-xl md:text-2xl pb-30 font-semibold mb-6">Liability for Content</h2>
                <p className="text-lg mb-20">While we have made every effort to ensure the accuracy, completeness,
                    and timeliness of our
                    content, we
                    cannot
                    guarantee it. As private website operators, we are not obligated to monitor transmitted or
                    stored
                    third-party
                    information or to investigate circumstances indicating unlawful activity. However, we are
                    obligated
                    under
                    general laws to remove or block the use of information upon becoming aware of a specific legal
                    violation.
                    Liability in this regard is only possible from the time of knowledge of a concrete infringement.
                    Upon
                    becoming
                    aware of such legal violations, we will remove the respective content immediately.
                </p>

                <h2 className="text-xl md:text-2xl pb-30 font-semibold mb-6">Liability for Links</h2>
                <p className="text-lg mb-20">Our pages may contain links to third-party external websites whose
                    content is beyond our control.
                    Therefore, we
                    cannot assume any liability for the accuracy and completeness of these third-party contents. The
                    respective
                    provider or operator is always responsible for the content of the linked pages. The linked pages
                    were
                    checked
                    for possible legal violations at the time of linking. No illegal content was discernible at the
                    time of
                    linking.
                    However, continuous monitoring of the linked pages is unreasonable without concrete evidence of
                    a
                    violation of
                    the law. If we become aware of legal violations, we will remove such links immediately.
                </p>

                <h2 className="text-xl md:text-2xl pb-30 font-semibold mb-6">Copyright</h2>
                <p className="text-lg mb-20">The content and works created by the website operators are subject to
                    German copyright law. Any
                    duplication,
                    processing, distribution, or use beyond the scope of copyright law requires the prior written
                    consent of
                    the
                    respective author or creator. Downloads and copies of this page are only permitted for private,
                    non-commercial
                    use.
                </p>

                <p className="text-lg mb-20">If the content on this page was not created by the operator, the
                    copyrights of third parties are
                    respected.
                    Should you nevertheless become aware of a copyright infringement, please inform us accordingly.
                    If we
                    become
                    aware of legal violations, we will remove the relevant content immediately.
                </p>
                <h2 className="text-lg md:text-xl pb-30 font-semibold mb-6">This legal notice also applies to the
                    following
                    social media
                    profiles:</h2>

                <h3 className="mb-0">GitHub:</h3>
                <a href='https://github.com/grabinskij' target="_blank"
                   rel="noopener noreferrer"
                   className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://github.com/grabinskij</a>

                <h3 className="mb-0">LinkedIn:</h3>
                <a href='https://www.linkedin.com/in/bohdan-hrabynskyi'
                   target="_blank" rel="noopener noreferrer"
                   className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://www.linkedin.com/in/bohdan-hrabynskyi</a>

                <h3 className="mb-0">Facebook:</h3>
                <a href='https://www.facebook.com/bogdan.grabinsky'
                   target="_blank" rel="noopener noreferrer"
                   className="block break-all max-w-max text-blue-500 hover:text-blue-700 mb-12">https://www.facebook.com/bogdan.grabinsky</a>






                <div id="terms-de" className="pt-4">
                    <div className="block lg:flex lg:justify-between items-center mt-4 mb-24 lg:mb-12 h-32">
                        <div className="outline-none border-none bg-transparent p-0 space-x-4">
                            <button className="outline-none border-none bg-transparent p-0 text-left">
                                <a href='#terms-eng'
                                   className="inline-block px-5 py-2 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-700">ENG</a>
                            </button>
                            <button className="outline-none border-none bg-transparent p-0 text-left">
                                <a href='#terms-de'
                                   className="inline-block px-4 py-2 bg-blue-500 text-white mb-30 rounded transition duration-300 hover:bg-blue-700">DE</a>
                            </button>
                        </div>
                        <h1 className="m-auto text-center text-2xl md:text-4xl pb-30 font-bold my-8">Impressum</h1>
                        {!session ? (

                                <ButtonHomeNoSession setPopupVisible={setPopupVisible} setShowOverlay={setShowOverlay} showChangeConsent={showChangeConsent}/>
                            )
                            :
                            (
                                <ButtonHome/>
                            )
                        }
                    </div>
                </div>



                <p className="text-lg mb-10">
                    Bohdan Hrabynskyi<br/>
                    Ringstra&szlig;e 9<br/>
                    17268 Templin
                </p>

                <p className="text-lg mb-10">
                    <span className="font-semibold">Kontakt:</span><br/>
                    Telefon: +49 (0) 162 63 20 634<br/>
                    E-Mail: <a href='mailto:bogdan.grabinskij@gmail.com'
                               className="block break-all max-w-max text-blue-500 hover:text-blue-700"
                >
                    bogdan.grabinskij@gmail.com
                </a>
                </p>

                <p className="text-lg mb-10">
                    <span className="font-semibold">Verantwortlich für den Inhalt der Website:</span><br/>
                    Bohdan Hrabynskyi
                </p>

                <br/>
                <br/>

                <h2 className="text-xl md:text-2xl pb-30 font-semibold mb-6">Zweck und Verwendung</h2>
                <p className="text-lg mb-20">Unsere Seiten sind als Hobby-Websites konzipiert und wird betrieben.
                    Unsere Seiten werden nicht
                    für kommerzielle
                    Zwecke genutzt und es werden keine Zahlungen durchgefürt oder entgegengenommen. Auf unseren
                    Seiten kann nichts
                    verkauft oder gekauft werden. Unsere Seiten sind nur Prototypen dafür, wie eine echte E-commerce
                    Website, eine
                    Bildungswebsite,
                    eine Informations-Website oder eine andere Website aussehen könnte.
                </p>


                <h2 className="text-xl md:text-2xl pb-30 font-semibold mb-6">Haftung für Inhalte</h2>
                <p className="text-lg mb-20">Unsere Inhalte wurden mit großer Sorgfalt erstellt, jedoch können wir
                    keine Gewähr für deren
                    Richtigkeit,
                    Vollständigkeit und Aktualität übernehmen. Als Privater Website-Betreiber sind wir nicht
                    dazu verpflichtet,
                    übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                    forschen,
                    die auf rechtswidrige Tätigkeiten hinweisen. Wir bleiben jedoch gemäß den allgemeinen
                    Gesetzen verpflichtet,
                    Informationen bei Kenntnis konkreter Rechtsverletzungen zu entfernen oder deren Nutzung zu
                    sperren.
                    Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung
                    möglich.
                    Wir werden bei Bekanntwerden entsprechender Rechtsverletzungen die betreffenden Inhalte
                    umgehend entfernen.
                </p>


                <h2 className="text-xl md:text-2xl pb-30 font-semibold mb-6">Haftung für Links</h2>
                <p className="text-lg mb-20">Unsere Seiten können Links zu externen Websites Dritter enthalten,
                    deren Inhalte außerhalb
                    unserer Kontrolle
                    liegen.
                    Daher können wir keine Gewähr für die Richtigkeit und Vollständigkeit dieser fremden Inhalte
                    übernehmen.
                    Verantwortlich für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                    Betreiber.
                    Vor der Verlinkung wurden die Inhalte der verknüpften Seiten auf mögliche Rechtsverstöße
                    überprüft. Zu diesem
                    Zeitpunkt waren keine rechtswidrigen Inhalte erkennbar. Eine fortlaufende Kontrolle der
                    verlinkten Seiten ist
                    jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Sollten uns
                    Rechtsverstöße bekannt
                    werden,
                    werden wir entsprechende Links umgehend entfernen.
                </p>


                <h2 className="text-xl md:text-2xl pb-30 font-semibold mb-6">Urheberrecht</h2>
                <p className="text-lg mb-20">Die Inhalte und Werke, die durch die Seitenbetreiber erstellt wurden,
                    unterliegen dem
                    deutschen Urheberrecht.
                    Jegliche Vervielfältigung, Bearbeitung, Verbreitung oder Nutzung außerhalb der Grenzen des
                    Urheberrechts bedarf
                    der vorherigen schriftlichen Zustimmung des jeweiligen Autors oder Erstellers. Downloads und
                    Kopien dieser
                    Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>

                <p className="text-lg mb-20">Sofern die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                    wurden, werden die
                    Urheberrechte Dritter
                    beachtet.
                    Sollten Sie dennoch eine Urheberrechtsverletzung feststellen, bitten wir um einen
                    entsprechenden Hinweis.
                    Bei Bekanntwerden von Rechtsverletzungen werden wir die betreffenden Inhalte umgehend
                    entfernen.
                </p>

                <h2 className="text-lg md:text-xl pb-30 font-semibold mb-6">Dieses Impressum gilt auch für folgende
                    Social
                    Media
                    Profile:</h2>

                <h3 className="mb-0">GitHub:</h3>
                <a href='https://github.com/grabinskij' target="_blank"
                   rel="noopener noreferrer"
                   className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://github.com/grabinskij</a>

                <h3 className="mb-0">Linkedin:</h3>
                <a href='https://www.linkedin.com/in/bohdan-hrabynskyi'
                   target="_blank" rel="noopener noreferrer"
                   className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://www.linkedin.com/in/bohdan-hrabynskyi</a>

                <h3 className="mb-0">Facebook:</h3>
                <a href='https://www.facebook.com/bogdan.grabinsky'
                   target="_blank" rel="noopener noreferrer"
                   className="block break-all max-w-max text-blue-500 hover:text-blue-700 mb-12">https://www.facebook.com/bogdan.grabinsky</a>


                {!session ? (

                        <ButtonHomeNoSession setPopupVisible={setPopupVisible} setShowOverlay={setShowOverlay} showChangeConsent={showChangeConsent}/>
                    )
                    :
                    (
                        <ButtonHome/>
                    )
                }

                <br /><br /><br /><br />

            </div>
        </div>
    );
}

export default LegalNotice;