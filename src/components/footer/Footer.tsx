import "./footer.scss"

const Footer = () => {
    const currentYear = new Date().getFullYear();

	return <div className="footer">
        Copyright  &copy; {currentYear} DEMO Streaming All Rights Reserved
    </div>;
};

export default Footer;
