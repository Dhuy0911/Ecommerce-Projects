import './Feedback.css';

const Feedback = () => {
    return <div>
        {/* <!-- Feed back --> */}
        <section id="feedback">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="feedback__wrapper">
                            <div className="feedback__title">
                                <h2>What Our Customers Says?</h2>
                            </div>
                            <div className="feedback__des text-center">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner d-flex">
                                        <div className="carousel-item active">
                                            <div className="carousel-item--icons">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/testimonials-icon_61x57.jpg"}
                                                    style={{
                                                        width: '5rem'
                                                    }} alt="" />

                                            </div>
                                            <div className="carousel-item--content">
                                                <p>
                                                    “ When a beautiful design is combined with powerful technology, <br />
                                                    it
                                                    truly is an artwork. I love how my website operates and looks with
                                                    this
                                                    theme. Thank you for the awesome product. ”
                                                </p>

                                            </div>
                                            <div className="carousel-item--customerImg">
                                                <img src="https://cdn.shopify.com/s/files/1/0275/1027/6157/files/about-us-person1_100x100.png?v=1613793447"
                                                    style={{ width: "10rem" }} alt="" />
                                            </div>
                                            <div className="carousel-item--customerAuthor">
                                                <p>NIROB KHAN / CEO</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="carousel-item--icons">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/testimonials-icon_61x57.jpg"}
                                                    style={{ width: '5rem' }} alt="" />

                                            </div>
                                            <div className="carousel-item--content">
                                                <p>
                                                    “ When a beautiful design is combined with powerful technology, <br />
                                                    it
                                                    truly is an artwork. I love how my website operates and looks with
                                                    this
                                                    theme. Thank you for the awesome product. ”
                                                </p>

                                            </div>
                                            <div className="carousel-item--customerImg">
                                                <img src="https://cdn.shopify.com/s/files/1/0275/1027/6157/files/about-us-person2_100x100.png?v=1613793447"
                                                    style={{ width: "10rem" }} alt="" />
                                            </div>
                                            <div className="carousel-item--customerAuthor">
                                                <p>TORVI / CEO</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="carousel-item--icons">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/testimonials-icon_61x57.jpg"}
                                                    style={{ width: '5rem' }} alt="" />

                                            </div>
                                            <div className="carousel-item--content">
                                                <p>
                                                    “ Perfect Themes and the best of all that you have many options to choose! Best Support team ever!Very fast responding and experts on their fields! Thank you very much! ”
                                                </p>

                                            </div>
                                            <div className="carousel-item--customerImg">
                                                <img src="http://lukani.mallthemes.com/wp-content/uploads/2019/01/testimonial2.png"
                                                    style={{ width: "10rem" }} alt="" />
                                            </div>
                                            <div className="carousel-item--customerAuthor">
                                                <p>Lindsy Neloms / CEO Of SFD</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="carousel-item--icons">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/testimonials-icon_61x57.jpg"}
                                                    style={{ width: '5rem' }} alt="" />

                                            </div>
                                            <div className="carousel-item--content">
                                                <p>
                                                    “ Code, template and others are very good. The support has served me immediately and solved my problems when I need help. Are to be congratulated. Att Renan Andrade. ”
                                                </p>

                                            </div>
                                            <div className="carousel-item--customerImg">
                                                <img src="http://lukani.mallthemes.com/wp-content/uploads/2019/01/testimonial1.png"
                                                    style={{ width: "10rem" }} alt="" />
                                            </div>
                                            <div className="carousel-item--customerAuthor">
                                                <p>Rebecka Filson / CEO Of CSC</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >


        {/* <!-- End Feed back --> */}
    </div >
}
export default Feedback;