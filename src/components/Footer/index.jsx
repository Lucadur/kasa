import logo from "../../assets/logo-footer.png"
import "../../styles/Footer.css"
 
function Footer() {
    return (
        <div className="footer-container">
        <img className="logo-footer" src={logo} alt="kasa-logo" />
        <p className="text-footer">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer