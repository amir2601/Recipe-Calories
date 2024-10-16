import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center bg-slate-100 text-base-content rounded-2xl p-10 mt-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a href="https://www.facebook.com/riad.vai.2601/" target="_blank">
                            <FaFacebookF></FaFacebookF>
                        </a>
                        <a href="https://www.linkedin.com/in/amir-hossin-riad/" target="_blank">
                            <FaLinkedinIn></FaLinkedinIn>
                        </a>
                        <a href="https://x.com/amirhossin26" target="_blank">
                            <FaTwitter></FaTwitter>
                        </a>
                        <a href="https://www.instagram.com/amir_hossin_.riad/" target="_blank">
                            <FaInstagram></FaInstagram>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by MD Amir Hossin Riad</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;