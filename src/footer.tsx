
export default function Footer() {
    return (
        <div>
            {/* <footer data-tid="footer" className="footer sm:footer-horizontal bg-base-100 text-base-content px-10 pt-4 pb-2"> */}
            <footer style={{display: "flex", justifyContent: "center"}}>
                <nav className="items-center">
                    <h6 data-tid="contactUsCol" className="footer-title">ISIS</h6>
                    <a className="link link-hover"
                       data-tid="isisUserOfficeSite"
                       href="https://www.isis.stfc.ac.uk/User-Office">User Office
                    </a>
                    <a className="link link-hover"
                       data-tid="isisUserFeedbackForm"
                       href="https://tinyurl.com/8yxmmcmv">User Feedback Survey
                    </a>
                </nav>
                <nav>
                    <h6 data-tid="isisClfSitesCol" className="footer-title">CLF</h6>
                    <a className="link link-hover"
                       data-tid="isisUserOfficeSite"
                       href="https://www.clf.stfc.ac.uk/Pages/Register.aspx">User Office
                    </a>
                    <a className="link link-hover"
                       data-tid="clfUserOfficeSite"
                       href="https://www.clf.stfc.ac.uk/Pages/Using-our-laser-facilities.aspx">Using our Laser Facilities
                    </a>
                </nav>
                <nav>
                    <h6 data-tid="stfcUkriSitesCol" className="footer-title">STFC and UKRI</h6>
                    <a className="link link-hover"
                       data-tid="stfcSite"
                       href="https://www.ukri.org/councils/stfc/">STFC
                    </a>
                    <a className="link link-hover"
                       data-tid="ukriSite"
                       href="https://www.ukri.org/">UKRI
                    </a>
                </nav>
                <nav>
                    <h6 data-tid="privacyCol" className="footer-title">T&C'S and Privacy</h6>
                    <a className="link link-hover"
                       data-tid="isisTermsAndConditions"
                       href="https://www.isis.stfc.ac.uk/Pages/terms.aspx"> Our terms and Conditions
                    </a>
                    <a className="link link-hover"
                       data-tid="ukriTermsAndConditions"
                       href="https://www.ukri.org/who-we-are/terms-of-use/"> UKRI terms and Conditions
                    </a>
                    <a className="link link-hover"
                       data-tid="privacyNotice"
                       href="https://www.isis.stfc.ac.uk/Pages/Privacy.aspx">Privacy Policy
                    </a>
                    <a className="link link-hover"
                       data-tid="accessibilityStatement"
                       href="https://www.user-software-statements.stfc.ac.uk/Pages/Users-Accessibility-Statement.aspx">
                        Accessibility Statement
                    </a>
                </nav>
            </footer>
        </div>
    )
}

