import './Footer.css';
function Footer() {
    return (
        <div className="footerContainer">
            <h4 className="footerHeader">
                Made with <img className="heartIcon" src={'/images/favorite-24px.svg'} alt="heart" /> by Abhinav
            </h4>
        </div>
    );
}

export default Footer;