 import '../HeroBanner/HeroBanner.css';
  
const HeroBanner = () => {
    return (
        <>
            <section id="banner">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className=" slider-btn active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            className=" slider-btn" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            className=" slider-btn " aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-content container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="slider-content fade">
                                            <h1>AMAZING <br /> FROM Lukani</h1>
                                            <h2>CACTUS <br /> <span>DECORATION</span> </h2>
                                            <p>Discount 20% Off For Lukani Members</p>
                                            <button className="app-btn">DISCOVER NOW</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/assets/images/slider1.jpg'} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <div className="col-12">
                                <div className="slider-content fade">
                                    <h1>AMAZING <br /> FROM Lukani</h1>
                                    <h2>LUKANI <br /> <span>HOUSEPLANTS</span></h2>
                                    <p>Discount 20% Off For Lukani Members</p>
                                    <button className="app-btn">DISCOVER NOW</button>
                                </div>

                            </div>
                            <img src={process.env.PUBLIC_URL + '/assets/images/slider2.jpg'} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <div className="col-12">
                                <div className="slider-content fade">
                                    <h1>AMAZING <br /> FROM Lukani</h1>
                                    <h2>OUTDOOR <br /> <span>THE BEST CHOICE</span></h2>
                                    <p>Discount 20% Off For Lukani Members</p>
                                    <button className="app-btn">DISCOVER NOW</button>
                                </div>

                            </div>
                            <img src={process.env.PUBLIC_URL + '/assets/images/slider3.jpg'} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden ">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            {/* <!-- Welcome to store --> */}
            <section id="welcomeToStore">
                <div className="container-fluid">
                    <div className="row">
                        <div className="welcomeToStore__wrapper">
                            <div className="col-lg-5 col-md-5">
                                <div className="welcomeToStore__thumb ">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/img-top-vogue3.jpg'} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="welcomeToStore__content">
                                    <div className="welcomeToStore__content-header">
                                        <h3>WELCOME TO LUKANI STORE</h3>
                                        <h2>Lukani History</h2>
                                    </div>
                                    <div className="welcomeToStore__content-des">
                                        <p>Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus. Imperdiet
                                            cursus odio tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet,
                                            vel
                                            nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit.
                                            Pellentesque mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac
                                            fringilla torquent lorem consectetuer, sociosqu phasellus risus urna aliquam,
                                            ornare. Elementum, nec duis, tempor litora turpis dapibus. Imperdiet cursus odio
                                            tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet, vel nunc
                                            taciti
                                            integer cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque mi,
                                            facilisi mauris</p>
                                    </div>
                                    <div className="welcomeToStore__content-footer">
                                        <img src="/assets/images/signature_large.jpg" alt="" />
                                        <p><span>JOHN DOE</span> - CEO LUKANI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- End welcome to store --> */}

        </>
    )
}
export default HeroBanner;