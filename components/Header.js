export default function Header() {

    return (
        <header>
            <img src="/logo.png" alt="Logo" class="logo" />
            <nav>
                <ul id="ul">
                    <li><a href="#">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact_us">Contact</a></li>
                </ul>
            </nav>
            <a href="#" className="icon" >
                <i className="fa fa-bars"></i>
            </a>
        </header>
    );
}
