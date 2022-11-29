import React from "react";
import './App.css'

function Home() {
    return (
        <div>
            <div className="header_section">
                <div className="header_left">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="logo"><a href="index.html"><img src="images/logo.png" /></a></div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="services.html">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="team.html">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="banner_main">
                        <h2 className="banner_taital">Quick & Secure <br />Internaltional Payments<br />Starts here</h2>
                        <p className="banner_text">Everything You Need To Pay And Get Paid By Internaltional Marketplaces And Direct Clients On One Secure Platform</p>
                        <div className="btn_main">
                            <div className="btn1"><a href="#">SIGN UP AND EARN $50 *</a></div>
                        </div>
                    </div>
                </div>
                <div className="header_right">
                    <img src="./images/header.png" className="banner_img" />
                </div>
            </div>
            {/*header section end */}
            {/*about section start */}
            {/* <div className="services_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="services_taital">WELCOME TO FINANCIAL SERVICES</h1>
            <p className="services_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it </p>
            <div className="moremore_bt"><a href="#">Read More </a></div>
          </div>
          <div className="col-md-4">
            <div><img src="images/img-1.png" className="image_1" /></div>
          </div>
        </div>
      </div>
    </div> */}
            {/*about section end */}
            {/*services section start */}
            <div className="what_we_do_section layout_padding">
                <div className="container">
                    <h1 className="what_taital">CHECK OUT THE PERKS OF PAYONEER</h1>
                    <div className="what_we_do_section_2">
                        <div className="row">
                            <div className="col-lg-4 col-sm-7">
                                <div className="boxmain">
                                    <div className="icon_1"><img src="images/icon-1.png" /></div>
                                    <h3 className="accounting_text">Reduced fees</h3>
                                    <p className="lorem_text">Pay up to 70% less compared to standard wire transfers. No hidden fees.</p>
                                    {/* <div className="moremore_bt_1"><a href="#">Read More </a></div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-7">
                                <div className="boxmain active">
                                    <div className="icon_1"><img src="images/icon-2.png" /></div>
                                    <h3 className="accounting_text">Get paid in popular currencies</h3>
                                    <p className="lorem_text">Receiving accounts in a growing number of currencies and get paid like a local.

                                    </p>
                                    {/* <div className="moremore_bt_1"><a href="#">Read More </a></div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-7">
                                <div className="boxmain">
                                    <div className="icon_1"><img src="images/icon-3.png" /></div>
                                    <h3 className="accounting_text">Simplify your payments</h3>
                                    <p className="lorem_text">
                                        Pay contractors and suppliers anywhere in the world straight from your Payoneer balance.
                                    </p>
                                    {/* <div className="moremore_bt_1"><a href="#">Read More </a></div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-7"><br />
                                <div className="boxmain">
                                    <div className="icon_1"><img src="images/icon-4.png" /></div>
                                    <h3 className="accounting_text">Withdraw funds locally</h3>
                                    <p className="lorem_text">Easily move your funds between currencies and withdraw them to a local bank account.</p>
                                    {/* <div className="moremore_bt_1"><a href="#">Read More </a></div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-7"><br />
                                <div className="boxmain active">
                                    <div className="icon_1"><img src="images/icon-4.png" /></div>
                                    <h3 className="accounting_text">24/7 multilingual support</h3>
                                    <p className="lorem_text">Our team is available any time, day or night, to take your questions and offer assistance. No worries!</p>
                                    {/* <div className="moremore_bt_1"><a href="#">Read More </a></div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-7"><br />
                                <div className="boxmain">
                                    <div className="icon_1"><img src="images/icon-4.png" /></div>
                                    <h3 className="accounting_text">Working Capital</h3>
                                    <p className="lorem_text">Give your business a boost with instant cash injections.</p>
                                    {/* <div className="moremore_bt_1"><a href="#">Read More </a></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*services section end */}
            {/*project section start */}
            <div className="project_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="project_main">
                                <h1 className="services_taital">Get Paid Globally as a Local</h1>
                                <p className="services_text">No matter where you get paid, use local receiving accounts to accept USD, EUR, GBP, CAD, MXN, and other global currencies as if you had a local bank account!
                                </p>
                                <div className="btn_main">
                                    <div className="btn1"><a href="#">SIGN UP AND EARN $50 *</a></div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="images_main">
                                <div className="images_left">
                                    <div className="container_1">
                                        <img src="images/img-2.png" alt="Avatar" className="image" style={{ width: '100%' }} />
                                        <div className="middle">
                                            <div className="text"><img src="images/search-icon.png" /></div>
                                            <h2 className="fact_text">Established Fact</h2>
                                        </div>
                                    </div>
                                    <div className="container_1">
                                        <img src="images/img-3.png" alt="Avatar" className="image" style={{ width: '100%' }} />
                                        <div className="middle">
                                            <div className="text"><img src="images/search-icon.png" /></div>
                                            <h2 className="fact_text">Established Fact</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="images_right">
                                    <div className="container_1">
                                        <img src="images/img-4.png" alt="Avatar" className="image" style={{ width: '100%' }} />
                                        <div className="middle">
                                            <div className="text"><img src="images/search-icon.png" /></div>
                                            <h2 className="fact_text">Established Fact</h2>
                                        </div>
                                    </div>
                                    <div className="container_1">
                                        <img src="images/img-5.png" alt="Avatar" className="image" style={{ width: '100%' }} />
                                        <div className="middle">
                                            <div className="text"><img src="images/search-icon.png" /></div>
                                            <h2 className="fact_text">Established Fact</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project_section_2 layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="icon_1"><img src="images/icon-3.png" /></div>
                            <h3 className="accounting_text_1">1000+</h3>
                            <p className="yers_text">Withdraw them to a local bank account in local currency</p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="icon_1"><img src="images/icon-4.png" /></div>
                            <h3 className="accounting_text_1">20000+</h3>
                            <p className="yers_text">Withdraw them at ATMs or request a prepaid card to use them online and in-stores

                            </p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="icon_1"><img src="images/icon-2.png" /></div>
                            <h3 className="accounting_text_1">10000+</h3>
                            <p className="yers_text">Make payments to contractors and suppliers directly</p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="icon_1"><img src="images/icon-1.png" /></div>
                            <h3 className="accounting_text_1">1500+</h3>
                            <p className="yers_text">Pay for a growing number of services like Amazon Advertising to grow your business</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*project section end */}
            {/*team section start */}

            {/*client section end */}
            <div className="client_section layout_padding">
        <div className="container">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="container p-0">
        <div className="card px-4">
          <p className="h8 py-3">Payment Details</p>
          <div className="row gx-3">
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Person Name</p>
                <input className="form-control mb-3" type="text" placeholder="Name" defaultValue="Barry Allen" />
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Card Number</p>
                <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">Expiry</p>
                <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">CVV/CVC</p>
                <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
              </div>
            </div>
            <div className="col-12">
              <div className="btn btn-primary mb-3">
                <span className="ps-3">Pay $243</span>
                <span className="fas fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
            {/*footer section start */}
            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <h4 className="about_text">About Financial</h4>
                            <div className="location_text"><img src="images/map-icon.png" /><span className="padding_left_15">Locations</span></div>
                            <div className="location_text"><img src="images/call-icon.png" /><span className="padding_left_15">+01 9876543210</span></div>
                            <div className="location_text"><img src="images/mail-icon.png" /><span className="padding_left_15">demo@gmail.com</span></div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h4 className="about_text">About Financial</h4>
                            <p className="dolor_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h4 className="about_text">Instagram</h4>
                            <div className="footer_images">
                                <div className="footer_images_left">
                                    <div className="image_12"><img src="images/img-12.png" /></div>
                                    <div className="image_12"><img src="images/img-12.png" /></div>
                                    <div className="image_12"><img src="images/img-12.png" /></div>
                                </div>
                                <div className="footer_images_right">
                                    <div className="image_12"><img src="images/img-12.png" /></div>
                                    <div className="image_12"><img src="images/img-12.png" /></div>
                                    <div className="image_12"><img src="images/img-12.png" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h4 className="about_text">Newsletter</h4>
                            <input type="text" className="mail_text" placeholder="Enter your email" name="Enter your email" />
                            <div className="subscribe_bt"><a href="#">Subscribe</a></div>
                            <div className="footer_social_icon">
                                <ul>
                                    <li><a href="#"><img src="images/fb-icon1.png" /></a></li>
                                    <li><a href="#"><img src="images/twitter-icon1.png" /></a></li>
                                    <li><a href="#"><img src="images/linkedin-icon1.png" /></a></li>
                                    <li><a href="#"><img src="images/youtub-icon1.png" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* copyright section start */}
                    <div className="copyright_section">
                        <div className="copyright_text">Copyright 2019 All Right Reserved By <a href="https://html.design">Free html  Templates</a></div>
                    </div>
                    {/* copyright section end */}
                </div>
            </div>
        </div>
    );
}

export default Home;
