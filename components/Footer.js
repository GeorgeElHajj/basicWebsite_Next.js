export default function Footer(){
    return (
        <footer>
        <div className="footer-col">
            <h3>USEFUL LINKS</h3>
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#contact_us">Contact</a>
        </div>

        <div className="comment-box">
            <img src="Service.jpg" alt="User Image" />

        </div>

        <div className="footer-bottom">
            <a href="#" class="social">
                <i className="fa fa-facebook"></i>
            </a>
            <a href="#" class="social">
                <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="social">
                <i className="fa fa-twitter"></i>
            </a>
        </div>
    </footer>
    );
}