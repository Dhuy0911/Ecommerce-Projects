import './Footer.css';

const Footer = () => {
    return <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <div className="footer__wrapper">
                            <div className="openTime">
                                <h3>OPENING TIME</h3>
                                <p> Mon - Fri: 8AM - 10PM</p>
                                <p>Sat: 9AM - 8PM</p>
                                <p>Suns: 2PM - 6PM </p>
                                <h5>We Work All The Holidays</h5>
                            </div>

                            <div className="information">
                                <h3>INFORMATION</h3>
                                <p>My Account</p>
                                <p>Contact</p>
                                <p>Shopping cart</p>
                                <p>Checkout</p>
                                <p>Shop</p>
                                <p>Order History</p>
                            </div>

                            <div className="footer-widget text-center">
                                <img src="https://cdn.shopify.com/s/files/1/0275/1027/6157/files/logo_300x300.png?v=1613788961" alt="" />

                                <ul className="widget-menu d-flex justify-content-between">
                                    <li><a href="#">Payment</a></li>
                                    <li><a href="#">Affiliates</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Internet</a></li>
                                </ul>

                                <ul className="widget-social d-flex justify-content-center">
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-google-plus-g"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                </ul>

                                <ul className="widget-app">
                                    <li><a href="#">
                                        <img src="/assets/images/iapp_large.webp" alt="" />
                                    </a></li>
                                    <li><a href="#">
                                        <img src="/assets/images/gapp_large.webp" alt="" />
                                    </a></li>
                                </ul>
                            </div>
                            <div className="customerService">
                                <h3>CUSTOMER SERVICE</h3>
                                <p>Contact Us</p>
                                <p>Terms of use</p>
                                <p>Privacy Policy</p>
                                <p>Site Map</p>
                                <p>My Account</p>
                                <p>Returns</p>
                            </div>
                        </div>

                        <div className="copyright">
                            <div className="copy">
                                <p>Copyright © <span>HasThemes</span> All Right Reserved.</p>
                            </div>

                            <div className="payment">
                                <a href="#"><img
                                    src="https://cdn.shopify.com/s/files/1/0275/1027/6157/files/payment_large.png?v=1613791649"
                                    alt="" /></a>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </footer>

        {/* <!-- End Footer --> */}

}
export default Footer