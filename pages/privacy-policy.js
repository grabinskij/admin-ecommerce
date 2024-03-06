import React from 'react';
import { useSession } from "next-auth/react";
import ButtonHome from "../components/ButtonHome";
import ButtonHomeNoSession from "../components/ButtonHomeNoSession";


const PrivacyPolicy = ({setPopupVisible, setShowOverlay, showChangeConsent}) => {

    const { data: session } = useSession();


    return (
        <div className="flex justify-center items-center leading-6">
            <div className="max-w-6xl w-full mx-auto px-1 text-black md:px-20 text-left">

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
                        <h1 className="m-auto text-center text-2xl md:text-4xl pb-30 font-bold my-8">Privacy Policy</h1>
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

                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">General Information</h1>
                <p className="text-lg mb-10">The following information provides a brief overview of how your
                    personal data is handled when you
                    visit this
                    website. Personal data refers to any data that can be used to personally identify you.</p><br/>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Data Collection on This Website</h2>

                <p className="text-lg mb-10">Data collection on this website is carried out by the website operator.
                    The contact details of the
                    operator are
                    available in the Legal Notice of this website.
                </p>

                <p className="text-lg mb-10">Your data is either transmitted by you or automatically collected, or
                    after your consent when
                    visiting the
                    website through our IT systems. This may include technical data such as your internet browser,
                    operating system,
                    or the time of page access. This data is collected automatically when visiting the website.
                </p>

                <p className="text-lg mb-10">Some of the data is collected to ensure the proper functioning of the
                    website. Other data may be used
                    to analyze
                    your user behavior.
                </p>

                <p className="text-lg mb-10">You have the right to obtain free information about the origin,
                    recipient, and purpose of your stored
                    personal
                    data at any time. You also have the right to request the correction or deletion of this data. If
                    you
                    have
                    consented to the processing of your data, you can revoke this consent at any time. Under certain
                    circumstances,
                    you also have the right to request the restriction of the processing of your personal data, as
                    well
                    as the right
                    to lodge a complaint with the competent supervisory authority.
                </p>

                <p className="text-lg mb-10">If you have any questions about data protection, you can contact us at
                    any time.</p><br/><br/>


                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">Hosting</h1>

                <p className="text-lg mb-10">Our website is hosted on an external hosting service. The personal data
                    collected on this website is
                    stored on
                    the servers of the host(s). This includes, among other things, IP addresses, contact requests,
                    meta
                    and
                    communication data, contract data, contact details, names, website access, and other data
                    generated
                    by the use
                    of a website.
                </p>

                <p className="text-lg mb-10">The external hosting is carried out for the purpose of providing our
                    site securely, quickly, and
                    efficiently by a
                    professional provider. If consent has been obtained, processing is carried out exclusively on
                    the
                    basis of the
                    applicable legal provisions. The consent can be revoked at any time.
                </p>

                <p className="text-lg mb-10">Our host processes your data only on our instructions and to fulfill
                    its contractual obligations.</p>

                <p className="text-lg mb-5">We use the following host:</p>

                <p className="text-lg mb-28">Vercel Inc.<br/>
                    440 N Barranca Ave #4133<br/>
                    Covina, CA 91723<br/>
                    privacy@vercel.com
                </p>


                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">Mandatory Information</h1>

                <p className="text-lg mb-10">We take the protection of your personal data very seriously. We treat
                    your data confidentially and in
                    accordance
                    with the statutory data protection regulations and this privacy policy.
                </p>

                <p className="text-lg mb-10">When using this website, various personal data is collected. This
                    privacy policy explains what data
                    we collect
                    and for what purpose. We point out that data transmission over the Internet (e.g., when
                    communicating by email)
                    may have security vulnerabilities. Complete protection of data against access by third parties
                    is
                    not
                    possible.
                </p>

                <p className="text-lg mb-10">The processing of data on this website is the responsibility of the
                    website operator. The contact
                    details of the
                    operator are available in the Legal Notice of this website.
                </p>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Right to Data Portability</h2>

                <p className="text-lg mb-10">You have the right to have data that we process automatically based on
                    your consent transmitted to
                    you or to a
                    third party in a common, machine-readable format. If technically feasible, we can also arrange
                    for
                    the transfer
                    directly to the responsible party you have named.
                </p>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Information, Correction, and
                    Deletion</h2>

                <p className="text-lg mb-10">You have the right to obtain information free of charge at any time
                    about your stored personal data,
                    its origin,
                    recipient, and the purpose of data processing. You may also have the right to correct incorrect
                    data
                    or have
                    unwanted data deleted. If you have any questions about personal data, you can contact us at any
                    time.
                </p>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Right to Restrict Processing</h2>

                <p className="text-lg mb-10">You have the right to restrict the processing of your personal data in
                    certain situations. Please
                    contact us at
                    any time if you wish to exercise this right.
                </p><br/><br/>


                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">Data Collection on This Website</h1>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Cookies</h2>
                <p className="text-lg mb-10">This website uses &quot;cookies&quot;. These small data records are
                    stored on your device and do not
                    cause any
                    harm. There
                    are temporary cookies that are only stored during your browsing session, and permanent cookies
                    that
                    remain on
                    your device until you delete them or they are automatically removed.
                </p>
                <p className="text-lg mb-10">Cookies can originate from us (first-party cookies) or from third
                    parties (third-party cookies).
                    Third-party
                    cookies enable the integration of specific services from external providers.
                </p>
                <p className="text-lg mb-10">The storage of cookies is carried out in accordance with Art. 6 para. 1 lit. f GDPR, unless there is another
                    legal basis. The operator of the website has a legitimate interest in storing necessary cookies to provide its
                    services technically flawless and optimized. If consent has been requested for the storage of cookies and
                    similar tracking technologies, the processing is carried out exclusively on the basis of this consent (Art. 6
                    para. 1 lit. a GDPR and § 25 para. 1 TTDSG); this consent can be revoked at any time.
                </p>
                <p className="text-lg mb-10">You have the option to configure your browser to inform you about the
                    setting of cookies, to allow
                    them only in
                    certain cases, to reject them in general, and to delete already stored cookies. Please note that
                    disabling
                    cookies may affect the functionality of the website.
                </p><br/>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Contact Form</h2>
                <p className="text-lg mb-10">When you contact us via the contact form, the information and contact
                    details you provide will be
                    stored to
                    process your request and respond to any follow-up inquiries. This data will not be disclosed
                    without
                    your
                    consent.
                </p>
                <p className="text-lg mb-10">The processing of the data entered into the contact form is based
                    exclusively on your consent (Art. 6
                    para. 1
                    lit. a GDPR). You can revoke this consent at any time by sending us an informal message by
                    email.
                    The legality
                    of the data processing operations carried out until the revocation remains unaffected by the
                    revocation.
                </p>
                <p className="text-lg mb-10">The data you enter in the contact form will remain with us until you
                    request deletion, revoke your
                    consent, or
                    the purpose for data storage no longer applies (e.g., after completion of request processing).
                    Mandatory
                    statutory provisions – especially retention periods – remain unaffected.
                </p><br/>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Comment Function on This Website</h2>
                <p className="text-lg mb-10">When using the comment function, the time of creation and, if not
                    posted anonymously, the chosen
                    username are
                    stored in addition to your comment.
                </p>
                <p className="text-lg mb-10">Comments and the associated data are stored on this website until the
                    commented content is completely
                    deleted or
                    must be deleted for legal reasons.
                </p>
                <p className="text-lg mb-10">The storage of comments is based on your consent. You can revoke this
                    consent at any time without
                    affecting the
                    lawfulness of the previous data processing.
                </p><br/><br/>


                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">Additional Features and Tools</h1>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Google Fonts</h2>
                <p className="text-lg mb-10">This website uses so-called Google Fonts provided by Google for the
                    consistent display of fonts. When
                    a page is
                    loaded,
                    the necessary fonts are loaded into the browser cache to correctly display texts and fonts. Your
                    browser must
                    establish
                    a connection to Google&apos;s servers for this purpose. As a result, Google becomes aware that
                    this
                    website has been
                    accessed
                    via your IP address. The use of Google Fonts is in accordance with Art. 6 para. 1 lit. f GDPR.
                    The
                    website
                    operator has
                    a legitimate interest in the uniform presentation of the typeface on their website. If consent
                    has
                    been
                    requested,
                    the processing is carried out exclusively in accordance with Art. 6 para. 1 lit. a GDPR and § 25
                    para. 1 TTDSG,
                    to the
                    extent that the consent includes the storage of cookies or access to information on the
                    user&apos;s
                    terminal device
                    (e.g., device
                    fingerprinting) within the meaning of the TTDSG. Consent can be revoked at any time. If your
                    browser
                    does not
                    support Google
                    Fonts, a standard font will be used from your computer.
                </p>
                <p className="text-lg mb-10">Further information about Google Fonts can be found in Google&apos;s
                    privacy policy at:
                    <a href="https://policies.google.com/privacy?hl=en"
                       target="_blank" rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://policies.google.com/privacy?hl=en</a>
                </p><br/>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Font Awesome</h2>
                <p className="text-lg mb-10">This site uses Font Awesome for consistent font and icon display. The
                    provider is Fonticons, Inc.,
                    located at 6
                    Porter Road Apartment 3R, Cambridge, Massachusetts, USA. When loading a page, the necessary
                    fonts
                    are loaded
                    into the browser cache to display text, fonts, and icons correctly. Your browser must establish
                    a
                    connection to
                    Font Awesome&apos;s servers for this purpose. Font Awesome thus becomes aware that this website
                    has
                    been
                    accessed via
                    your IP address. The use of Font Awesome is in accordance with Art. 6 para. 1 lit. f GDPR. We
                    have a
                    legitimate
                    interest in the consistent presentation of the typeface on our website. If appropriate consent
                    has
                    been
                    obtained, processing is carried out exclusively in accordance with Art. 6 para. 1 lit. a GDPR
                    and §
                    25 para. 1
                    TTDSG, insofar as the consent includes the storage of cookies or access to information on the
                    user&apos;s
                    device
                    (e.g., device fingerprinting) as defined in the TTDSG. Consent can be revoked at any time. If
                    your
                    browser does
                    not support Font Awesome, a standard font will be used from your computer.
                </p>
                <p className="text-lg mb-10">For more information on Font Awesome, please see Font Awesome&apos;s
                    Privacy Policy at:
                    <a href="https://fontawesome.com/privacy" target="_blank"
                       rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://fontawesome.com/privacy</a>
                </p><br/>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Google Maps</h2>
                <p className="text-lg mb-10">This website uses the Google Maps mapping service provided by Google
                    LLC, 1600 Amphitheatre Parkway,
                    Mountain
                    View, CA 94043, USA. To use the Google Maps features, it is necessary to store your IP address.
                    This
                    information
                    is usually transmitted to a Google server in the USA and stored there. The website operator has
                    no
                    influence on
                    this data transmission. When Google Maps is activated, Google may use Google Fonts for
                    consistent
                    font display.
                    When Google Maps is accessed, your browser loads the required web fonts into the browser cache
                    to
                    display text
                    and fonts correctly. The use of Google Maps is in the interest of an appealing presentation of
                    our
                    online offers
                    and easy location of the places mentioned on the website. This represents a legitimate interest
                    within the
                    meaning of Art. 6 para. 1 lit. f GDPR. If appropriate consent has been obtained, processing is
                    carried out
                    exclusively in accordance with Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as the
                    consent
                    includes the storage of cookies or access to information on the user&apos;s device (e.g., device
                    fingerprinting) as
                    defined in the TTDSG. Consent can be revoked at any time. Data transfer to the USA is based on
                    the
                    Standard
                    Contractual Clauses of the European Commission.
                </p>
                <p className="text-lg mb-10">For more details, please see:
                    <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank"
                       rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://privacy.google.com/businesses/gdprcontrollerterms/
                    </a>
                    <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank"
                       rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
                    </a>
                </p>
                <p className="text-lg mb-10">For more information on how Google handles user data, please see
                    Google&apos;s Privacy Policy at:
                    <a href="https://policies.google.com/privacy?hl=en" target="_blank"
                       rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://policies.google.com/privacy?hl=en</a>
                </p><br/>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Bootstrap Framework (via jsDelivr
                    CDN)</h2>
                <p className="text-lg mb-10">We use the Bootstrap CSS framework via the jsDelivr Content Delivery
                    Network (CDN), provided by
                    Volentio JSD
                    Limited, located at Suite 2a1, Northside House, Mount Pleasant, Barnet, England, EN4 9EB. We
                    integrate the
                    Bootstrap CSS framework on our website to optimize the display of our content on various devices
                    and
                    improve
                    loading times. The jsDelivr CDN is a service that provides content such as libraries and
                    frameworks,
                    including
                    the Bootstrap framework. The integration of Bootstrap via the jsDelivr CDN serves to protect our
                    legitimate
                    interests in accordance with Art. 6 para. 1 lit. f GDPR. If your browser has JavaScript enabled
                    and
                    no
                    JavaScript blocker is installed, your browser transmits personal data (e.g., your IP address and
                    browser) to the
                    jsDelivr CDN when our page is loaded.
                </p>
                <p className="text-lg mb-10">The provider&apos;s privacy policy for jsDelivr can be found at:
                    <a href="https://www.jsdelivr.com/privacy-policy-jsdelivr-net/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://www.jsdelivr.com/privacy-policy-jsdelivr-net</a>
                </p><br/><br/>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">jQuery</h2>
                <p className="text-lg mb-10">To further optimize loading times, we also include jQuery on our
                    website. When you visit our website,
                    program
                    libraries are retrieved and downloaded from servers of the provider Google LLC, located at 1600
                    Amphitheatre
                    Parkway, Mountain View, CA 94043, USA, via the Google Content Delivery Network. Personal data
                    (e.g.,
                    your IP
                    address and browser) is transmitted to Google in the process. The integration of jQuery serves
                    to
                    protect our
                    legitimate interests in accordance with Art. 6 para. 1 lit. f GDPR.
                </p>
                <p className="text-lg mb-10">For more information on how Google handles user data, please see
                    Google&apos;s Privacy Policy at:
                    <a href="https://www.google.com/policies/privacy"
                       target="_blank" rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://www.google.com/policies/privacy</a>
                </p><br/><br/>


                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">Authentication</h1>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Use of Firebase Authentication</h2>
                <p className="text-lg mb-10">We use Firebase Authentication from Google in our applications, a
                    service for authentication.
                    Firebase
                    Authentication allows us to simplify the login process by using third-party identity services
                    and
                    storing the
                    corresponding information on its platform. This service acts as an intermediary for data
                    collection
                    between
                    third parties and ourselves. The data collected by Firebase Authentication is stored on our
                    behalf
                    so that we
                    can use and process it for our apps. The personal data collected includes email address and
                    password. In these
                    cases, processing is carried out in accordance with your consent pursuant to Art. 6 para. 1 lit.
                    a
                    GDPR.
                </p>
                <p className="text-lg mb-10">For more information on data protection, please refer to Google&apos;s
                    Privacy Policy at:
                    <a href="https://policies.google.com/privacy"
                       target="_blank" rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://policies.google.com/privacy</a>
                </p><br/>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Google OAuth</h2>
                <p className="text-lg mb-10">Google OAuth, provided by Google LLC, is a service for logging in and
                    authenticating closely linked
                    to the Google
                    network. This service allows users to log in to various applications and websites using their
                    Google
                    login
                    credentials. The types of personal data collected include various data types, including user
                    identifiers, email
                    addresses, and profile information, as described in the service&apos;s Privacy Policy.
                </p>
                <p className="text-lg mb-10">For more information about Google and privacy, please visit:
                    <a href="https://policies.google.com/privacy"
                       target="_blank" rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://policies.google.com/privacy</a>
                </p><br/>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">jsDelivr CDN</h2>
                <p className="text-lg mb-10">To speed up content delivery on our website, we use the Content
                    Delivery Network (CDN) from jsDelivr,
                    operated by
                    Volentio JSD Limited, located at Suite 2a1, Northside House, Mount Pleasant, Barnet, England,
                    EN4
                    9EB. A CDN is
                    a service that delivers large media files such as graphics or scripts more quickly via
                    regionally
                    distributed
                    servers. We use the CDN solely for the purpose of improving the loading times and security of
                    our
                    website. Your
                    browser must establish a connection to the CDN&apos;s servers to retrieve the content, thereby
                    allowing
                    the CDN to
                    become aware that our website has been accessed via your IP address. The use of the CDN is based
                    on
                    our
                    legitimate interests in providing a secure and efficient delivery as well as analyzing and
                    optimizing our online
                    offering in accordance with Art. 6 para. 1 lit. f GDPR.
                </p>
                <p className="text-lg mb-10">For more information on data protection, please refer to the privacy
                    policy of jsDelivr:
                    <a href="https://www.jsdelivr.com/privacy-policy-jsdelivr-net"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://www.jsdelivr.com/privacy-policy-jsdelivr-net</a>
                </p><br/><br/>





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
                        <h1 className="m-auto text-center text-2xl md:text-4xl pb-30 font-bold my-8">Datenschutzerklärung</h1>
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


                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">Allgemeine Hinweise</h1>
                <p className="text-lg mb-10">Die nachfolgenden Informationen bieten eine kurze Übersicht darüber,
                    wie mit Ihren persönlichen Daten
                    umgegangen
                    wird, wenn Sie diese Website besuchen. Persönliche Daten sind alle Daten, die dazu genutzt
                    werden
                    können, Sie
                    persönlich zu identifizieren.
                </p><br/>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Datenerfassung auf dieser Website</h2>

                <p className="text-lg mb-10">Die Datenerfassung auf dieser Website erfolgt durch den Betreiber der
                    Website.Die Kontaktdaten des
                    Betreibers
                    sind im Impressum dieser Website verfügbar.
                </p>

                <p className="text-lg mb-10">Ihre Daten werden entweder von Ihnen übermittelt oder automatisch
                    erfasst, bzw. nach Ihrer
                    Zustimmung beim Besuch
                    der Website durch unsere IT-Systeme. Dies kann technische Daten wie Ihren Internetbrowser, Ihr
                    Betriebssystem
                    oder die Uhrzeit des Seitenaufrufs umfassen. Die Erfassung dieser Daten erfolgt automatisch beim
                    Besuch der
                    Website.
                </p>

                <p className="text-lg mb-10">Ein Teil der Daten wird erhoben, um die fehlerfreie Bereitstellung der
                    Website zu gewährleisten.
                    Andere Daten
                    können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <p className="text-lg mb-10">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
                    Empfänger und Zweck Ihrer
                    gespeicherten
                    personenbezogenen Daten zu erhalten. Sie haben auch das Recht, die Berichtigung oder Löschung
                    dieser Daten zu
                    verlangen. Wenn Sie der Verarbeitung Ihrer Daten zugestimmt haben, können Sie diese Zustimmung
                    jederzeit
                    widerrufen. Unter bestimmten Umständen haben Sie auch das Recht, die Einschränkung der
                    Verarbeitung Ihrer
                    personenbezogenen Daten zu verlangen, sowie das Recht, sich bei der zuständigen Aufsichtsbehörde
                    zu
                    beschweren.
                </p>

                <p className="text-lg mb-10">Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.</p>
                <br/><br/>


                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">Hosting</h1>

                <p className="text-lg mb-10">Unsere Website befindet sich auf einem externen Hosting-Service. Die
                    personenbezogenen Daten,
                    die auf dieser
                    Website erfasst werden, werden
                    auf den Servern des Hosters / der Hoster gespeichert. Dabei handelt es sich unter anderem um
                    IP-Adressen,
                    Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                    Websitezugriffe und andere
                    Daten, die durch die Nutzung einer Website generiert werden.
                </p>
                <p className="text-lg mb-10">Das externe Hosting erfolgt zum Zweck im Interesse einer sicheren,
                    schnellen und effizienten
                    Bereitstellung
                    unseres Seiten durch einen professionellen Anbieter. Sofern eine entsprechende Einwilligung
                    abgefragt wurde,
                    erfolgt die Verarbeitung ausschließlich auf Grundlage der geltenden gesetzlichen
                    Bestimmungen. Die Einwilligung
                    kann jederzeit widerrufen werden.
                </p>

                <p className="text-lg mb-10">Unser Hoster verarbeitet Ihre Daten nur im Rahmen unserer Weisungen und
                    zur Erfüllung seiner
                    Leistungspflichten.
                </p>

                <p className="text-lg mb-5">Wir verwenden folgenden Hoster:</p>
                <p className="text-lg mb-28">Vercel Inc.<br/>
                    440 N Barranca Ave #4133<br/>
                    Covina, CA 91723<br/>
                    privacy@vercel.com
                </p>


                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">Pflichtinformationen</h1>

                <p className="text-lg mb-10">Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                    behandeln Ihre Daten
                    vertraulich und gemäß den
                    gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>

                <p className="text-lg mb-10">Bei der Nutzung dieser Website werden verschiedene personenbezogene
                    Daten erhoben. Diese
                    Datenschutzerklärung
                    erläutert, welche Daten wir erheben und zu welchem Zweck. Wir weisen darauf hin, dass die
                    Datenübertragung im
                    Internet Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                    durch Dritte ist
                    nicht möglich.
                </p>
                <p className="text-lg mb-10">Die Verarbeitung von Daten auf dieser Website liegt in der
                    Verantwortung des
                    Websitebetreibers.
                    Die Kontaktdaten des Betreibers sind im Impressum dieser Website verfügbar.
                </p>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Recht auf Datenübertragbarkeit</h2>
                <p className="text-lg mb-10">Sie haben das Recht, Daten, die wir aufgrund Ihrer Einwilligung
                    automatisiert
                    verarbeiten, in einem gängigen, maschinenlesbaren Format an sich oder an einen von Ihnen
                    benannten Dritten
                    übertragen zu lassen. Soweit technisch möglich, können wir auch direkt die Übertragung an
                    den von Ihnen
                    genannten Verantwortlichen vornehmen.
                </p>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Auskunft, Korrektur und Löschung</h2>
                <p className="text-lg mb-10">Sie haben jederzeit das Recht, gemäß den geltenden Gesetzen kostenfrei
                    Auskunft über Ihre
                    gespeicherten
                    personenbezogenen Daten, deren Herkunft, Empfänger und den Zweck der Datenverarbeitung zu
                    erhalten.
                    Gegebenenfalls haben Sie auch das Recht, fehlerhafte Daten zu korrigieren oder unerwünschte
                    Daten löschen zu
                    lassen. Bei Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Recht auf Beschränkung der
                    Datenverarbeitung</h2>
                <p className="text-lg mb-10">Sie haben das Recht, die Verarbeitung Ihrer persönlichen Daten in
                    bestimmten Situationen
                    einzuschränken. Bitte
                    kontaktieren Sie uns jederzeit, wenn Sie von diesem Recht Gebrauch machen möchten.
                </p><br/><br/>


                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">Datenerfassung auf dieser
                    Website</h1>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Cookies</h2>
                <p className="text-lg mb-10">Auf dieser Website verwenden wir &quot;Cookies&quot;. Diese kleinen
                    Datensätze werden auf Ihrem Gerät
                    gespeichert und
                    richten keinen Schaden an. Es gibt temporäre Cookies, die nur während Ihrer Browsersitzung
                    gespeichert werden,
                    und dauerhafte Cookies, die auf Ihrem Gerät verbleiben, bis Sie sie löschen oder sie
                    automatisch entfernt
                    werden.
                </p>
                <p className="text-lg mb-10">Cookies können entweder von uns (First-Party-Cookies) oder von
                    Drittanbietern
                    (Third-Party-Cookies) stammen.
                    Drittanbieter-Cookies ermöglichen die Integration spezifischer Dienste von externen
                    Anbietern.
                </p>
                <p className="text-lg mb-10">Die Speicherung von Cookies erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO, sofern keine
                    andere Rechtsgrundlage vorliegt. Der Betreiber der Website hat ein legitimes Interesse an der Speicherung von
                    notwendigen Cookies, um seine Dienste technisch einwandfrei und optimiert bereitzustellen. Falls um Einwilligung
                    zur
                    Speicherung von Cookies und ähnlichen Tracking-Technologien gebeten wurde, erfolgt die Verarbeitung
                    ausschließlich
                    auf Basis dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); diese
                    Einwilligung kann jederzeit widerrufen werden.
                </p>
                <p className="text-lg mb-10">Sie haben die Möglichkeit, Ihren Browser so einzustellen, dass Sie über
                    das Setzen von
                    Cookies informiert werden,
                    sie nur in bestimmten Fällen zulassen oder generell ablehnen sowie bereits gespeicherte
                    Cookies löschen können.
                    Bitte beachten Sie, dass die Deaktivierung von Cookies die Funktionalität der Website
                    beeinträchtigen kann.
                </p><br/>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Kontaktformular</h2>
                <p className="text-lg mb-10">Wenn Sie uns über das Kontaktformular kontaktieren, werden die von
                    Ihnen angegebenen
                    Informationen und
                    Kontaktdaten gespeichert, um Ihre Anfrage zu bearbeiten und eventuelle Nachfragen zu
                    beantworten. Diese Daten
                    werden ohne Ihre Zustimmung nicht weitergegeben.
                </p>

                <p className="text-lg mb-10">Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
                    ausschließlich auf
                    Grundlage Ihrer
                    Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit
                    widerrufen, indem Sie uns
                    eine formlose Mitteilung per E-Mail senden. Die Rechtmäßigkeit der bis zum Widerruf
                    erfolgten Datenverarbeitung
                    bleibt vom Widerruf unberührt.
                </p>

                <p className="text-lg mb-10">Die von Ihnen im Kontaktformular hinterlegten Daten werden bei uns
                    gespeichert, bis Sie uns
                    zur Löschung
                    auffordern, Ihre Einwilligung widerrufen oder der Zweck der Datenspeicherung entfällt (z. B.
                    nach Abschluss der
                    Anfragebearbeitung). Dabei bleiben zwingende gesetzliche Aufbewahrungsfristen unberührt.
                </p><br/>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Kommentarfunktion auf dieser
                    Website</h2>
                <p className="text-lg mb-10">Bei Nutzung der Kommentarfunktion werden neben Ihrem Kommentar auch der
                    Zeitpunkt der
                    Erstellung sowie, sofern
                    nicht anonym gepostet wird, der gewählte Nutzername gespeichert.
                </p>
                <p className="text-lg mb-10">Kommentare und die dazugehörigen Daten werden auf dieser Website
                    gespeichert, bis der
                    kommentierte Inhalt
                    vollständig gelöscht wird oder aus rechtlichen Gründen gelöscht werden muss.
                </p>
                <p className="text-lg mb-10">Die Speicherung von Kommentaren erfolgt aufgrund Ihrer Einwilligung.
                    Sie können diese
                    Einwilligung jederzeit
                    widerrufen, ohne dass die Rechtmäßigkeit der vorherigen Datenverarbeitung davon berührt
                    wird.
                </p><br/><br/>


                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">Zusatzfunktionen und Tools</h1>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Google Fonts</h2>
                <p className="text-lg mb-10">Für die konsistente Darstellung von Schriftarten verwendet diese Seite
                    sogenannte Google
                    Fonts, die von Google
                    bereitgestellt werden. Beim Laden einer Seite werden die erforderlichen Schriftarten in den
                    Browsercache
                    geladen, um Texte und Schriftarten korrekt anzuzeigen. Ihr Browser muss hierzu eine
                    Verbindung zu den Servern
                    von Google herstellen. Dadurch erlangt Google Kenntnis darüber, dass diese Website über Ihre
                    IP-Adresse
                    aufgerufen wurde. Die Nutzung von Google Fonts erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO. Der
                    Websitebetreiber
                    hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner
                    Website. Sofern
                    eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
                    gemäß Art. 6 Abs. 1
                    lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder
                    den Zugriff auf
                    Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG
                    umfasst. Die Einwilligung
                    ist jederzeit widerrufbar. Falls Ihr Browser Google Fonts nicht unterstützt, wird eine
                    Standardschrift von Ihrem
                    Computer verwendet.
                </p>
                <p className="text-lg mb-10">Weitere Informationen zu Google Fonts finden Sie unter der
                    Datenschutzerklärung von Google
                    unter:
                    <a href="https://policies.google.com/privacy?hl=de"
                       target="_blank" rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://policies.google.com/privacy?hl=de</a>
                </p><br/>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Font Awesome</h2>
                <p className="text-lg mb-10">Für die konsistente Darstellung von Schriftarten und Symbolen verwendet
                    diese Seite Font
                    Awesome. Der Anbieter
                    ist Fonticons, Inc., mit Sitz in 6 Porter Road Apartment 3R, Cambridge, Massachusetts, USA.
                    Beim Laden einer Seite werden die benötigten Fonts in den Browsercache geladen, um Texte,
                    Schriftarten und
                    Symbole korrekt anzuzeigen. Ihr Browser muss hierzu eine Verbindung zu den Servern von Font
                    Awesome herstellen.
                    Dadurch erlangt Font Awesome Kenntnis darüber, dass diese Website über Ihre IP-Adresse
                    aufgerufen wurde. Die
                    Nutzung von Font Awesome erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
                    berechtigtes Interesse an der
                    einheitlichen Darstellung des Schriftbildes auf unserer Website. Sofern eine entsprechende
                    Einwilligung
                    abgefragt wurde, erfolgt die Verarbeitung ausschließlich gemäß Art. 6 Abs. 1 lit. a DSGVO
                    und § 25 Abs. 1 TTDSG,
                    soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
                    Endgerät des Nutzers
                    (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit
                    widerrufbar.
                    Wenn Ihr Browser Font Awesome nicht unterstützt, wird eine Standardschrift von Ihrem
                    Computer verwendet.
                </p>
                <p className="text-lg mb-10">Weitere Informationen zu Font Awesome finden Sie in der
                    Datenschutzerklärung von Font Awesome
                    unter:
                    <a href="https://fontawesome.com/privacy"
                       target="_blank" rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://fontawesome.com/privacy</a>
                </p><br/>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Google Maps</h2>
                <p className="text-lg mb-10">Diese Website verwendet den Kartendienst Google Maps, bereitgestellt
                    von der Google LLC, 1600
                    Amphitheatre
                    Parkway,
                    Mountain View, CA 94043, USA.
                </p>
                <p className="text-lg mb-10">Zur Nutzung der Google Maps-Funktionen ist es erforderlich, Ihre
                    IP-Adresse zu speichern.
                    Diese Informationen
                    werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                    Der Websitebetreiber
                    hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google
                    zum Zwecke der
                    konsistenten Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf von Google
                    Maps lädt Ihr Browser
                    die benötigten Web Fonts in den Browsercache, um Texte und Schriftarten korrekt
                    anzuzeigen.
                </p>
                <p className="text-lg mb-10">Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
                    Darstellung der
                    Online-Angebote und an einer
                    leichten Auffindbarkeit der auf der Website angegebenen Orte. Dies stellt ein berechtigtes
                    Interesse gemäß Art.
                    6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
                    die Verarbeitung
                    ausschließlich gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
                    Einwilligung die Speicherung
                    von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
                    Device-Fingerprinting) im Sinne
                    des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="text-lg mb-10">Die Datenübertragung in die USA erfolgt auf Basis der
                    Standardvertragsklauseln der
                    EU-Kommission. Weitere Details
                    finden Sie hier:
                    <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank"
                       rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://privacy.google.com/businesses/gdprcontrollerterms/
                    </a>
                    <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank"
                       rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
                    </a>
                </p>
                <p className="text-lg mb-10">Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
                    Datenschutzerklärung von
                    Google:
                    <a href="https://policies.google.com/privacy?hl=de" target="_blank"
                       rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://policies.google.com/privacy?hl=de</a>
                </p><br/>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Bootstrap Framework (via jsDelivr
                    CDN)</h2>

                <p className="text-lg mb-10">Wir verwenden das Bootstrap-CSS-Framework über das jsDelivr Content
                    Delivery Network (CDN),
                    bereitgestellt von
                    Volentio JSD Limited mit Sitz in Suite 2a1,
                    Northside House, Mount Pleasant, Barnet, England, EN4 9EB. Wir integrieren auf unserer
                    Website das
                    Bootstrap-CSS-Framework , um unsere Inhalte auf verschiedenen
                    Endgeräten optimal darzustellen und die Ladezeiten zu verbessern. Das jsDelivr-CDN ist ein
                    Dienst,
                    der Inhalte wie Bibliotheken und Frameworks bereitstellt, darunter auch das
                    Bootstrap-Framework. Die Einbindung
                    von
                    Bootstrap über das jsDelivr-CDN dient der Wahrung unserer berechtigten Interessen
                    gemäß Art. 6 Abs. 1 lit. f DSGVO. Sofern Ihr Browser JavaScript aktiviert hat und kein
                    JavaScript-Blocker
                    installiert ist, übermittelt Ihr Browser beim Laden unserer Seite personenbezogene
                    Daten (z. B. Ihre IP-Adresse und Browser) an das jsDelivr-CDN.
                </p>

                <p className="text-lg mb-10">Die Datenschutzerklärung des Anbieters jsDelivr finden Sie unter:
                    <a href="https://www.jsdelivr.com/privacy-policy-jsdelivr-net/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://www.jsdelivr.com/privacy-policy-jsdelivr-net</a>
                </p><br/><br/>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">jQuery</h2>
                <p className="text-lg mb-10">Zur weiteren Optimierung der Ladezeiten binden wir auf unserer Website
                    auch die jQuery ein.
                    Dabei werden beim
                    Aufruf unserer Website Programmbibliotheken von Servern des
                    Anbieters Google LLC, ansässig in 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA,
                    abgerufen und über
                    das Content Delivery Network von Google heruntergeladen. Hierbei werden personenbezogene
                    Daten (z. B. Ihre
                    IP-Adresse und Browser) an Google übertragen. Die Einbindung von jQuery dient der Wahrung
                    unserer berechtigten
                    Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <p className="text-lg mb-10">Die Datenschutzerklärung von Google finden Sie unter:
                    <a href="https://www.google.com/policies/privacy"
                       target="_blank" rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://www.google.com/policies/privacy</a>
                </p><br/><br/>


                <h1 className="text-xl md:text-3xl pb-30 font-bold mb-12 mt-8">Authentifizierung</h1>

                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Nutzung von Firebase
                    Authentication</h2>
                <p className="text-lg mb-10">Wir setzen in unseren Anwendungen Firebase Authentication von Google
                    ein, einen Dienst zur
                    Authentifizierung.
                    Firebase Authentication ermöglicht es uns, den Anmeldeprozess zu vereinfachen, indem es
                    Identitätsdienste von
                    Drittanbietern nutzt und die entsprechenden Informationen auf seiner Plattform speichert.
                    Dieser Dienst fungiert
                    als Vermittler für die Datenerhebung zwischen Dritten und uns selbst. Die von Firebase
                    Authentication erhobenen
                    Daten werden in unserem Auftrag gespeichert, damit wir sie für unsere Apps nutzen und
                    verarbeiten können.
                    Die erhobenen personenbezogenen Daten umfassen E-Mail-Adress und Passwort. In diesen Fällen
                    erfolgt die
                    Verarbeitung gemäß
                    Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
                </p>
                <p className="text-lg mb-10">Weitere Informationen zum Datenschutz finden Sie in den
                    Datenschutzbestimmungen von Google
                    unter:
                    <a href="https://policies.google.com/privacy"
                       target="_blank" rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://policies.google.com/privacy</a>
                </p><br/>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">Google OAuth</h2>
                <p className="text-lg mb-10">Google OAuth, bereitgestellt von Google LLC, ist ein Dienst zur
                    Anmeldung und
                    Authentifizierung, der eng mit dem
                    Google-Netzwerk verbunden ist. Dieser Dienst ermöglicht es Benutzern, sich bei verschiedenen
                    Anwendungen und
                    Websites anzumelden, indem sie ihre Google-Anmeldeinformationen verwenden.
                </p>
                <p className="text-lg mb-10">Die Art der erhobenen personenbezogenen Daten umfasst verschiedene
                    Datenarten, darunter
                    Benutzeridentifikatoren,
                    E-Mail-Adressen und Profilinformationen, die in der Datenschutzerklärung des Dienstes
                    beschrieben sind.
                </p>
                <p className="text-lg mb-10">Weitere Informationen zu Google und Datenschutz finden Sie unter:
                    <a href="https://policies.google.com/privacy"
                       target="_blank" rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://policies.google.com/privacy</a>
                </p><br/>


                <h2 className="text-lg md:text-2xl pb-30 font-semibold mb-6">jsDelivr CDN</h2>
                <p className="text-lg mb-10">Um die Auslieferung von Inhalten auf unserer Website zu beschleunigen,
                    verwenden wir das
                    Content Delivery Network
                    (CDN) von jsDelivr, betrieben von Volentio JSD Limited mit Sitz in Suite 2a1, Northside
                    House, Mount Pleasant,
                    Barnet, England, EN4 9EB.
                </p>
                <p className="text-lg mb-10">Ein CDN ist ein Dienst, der große Mediendateien wie Grafiken oder
                    Skripte über regional
                    verteilte Server
                    schneller bereitstellt. Wir nutzen das CDN allein zum Zweck der Verbesserung der Ladezeiten
                    und der Sicherheit
                    unserer Website.
                </p>
                <p className="text-lg mb-10">Ihr Browser muss eine Verbindung zu den Servern des CDNs herstellen, um
                    die Inhalte
                    abzurufen, wodurch das CDN
                    Kenntnis davon erlangt, dass unsere Website über Ihre IP-Adresse aufgerufen wurde.
                </p>
                <p className="text-lg mb-10">Die Nutzung des CDNs erfolgt auf der Grundlage unserer berechtigten
                    Interessen an einer
                    sicheren und effizienten
                    Bereitstellung sowie der Analyse und Optimierung unseres Online-Angebots gemäß Art. 6 Abs. 1
                    lit. f DSGVO.
                </p>
                <p className="text-lg mb-10">Weitere Informationen zum Datenschutz finden Sie in der
                    Datenschutzerklärung von jsDelivr:
                    <a href="https://www.jsdelivr.com/privacy-policy-jsdelivr-net"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block break-all max-w-max text-blue-500 hover:text-blue-700">https://www.jsdelivr.com/privacy-policy-jsdelivr-net</a>
                </p><br/><br/>

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

export default PrivacyPolicy;