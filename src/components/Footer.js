
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <h1 className="footer__contact">&copy; {currentYear} by Bill Stephens, all rights reserved.</h1>
            <a href="https://github.com/BillStephens2022" className="footer__icon"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/bill-stephens-04375923/" className="footer__icon"><i className="fab fa-linkedin"></i></a>
            <a href="https://instagram.com/two4onebill?igshid=YmMyMTA2M2Y" className="footer__icon"><i className="fab fa-instagram"></i></a>
        </footer>
    )
}

export default Footer;