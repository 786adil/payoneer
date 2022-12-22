import { useState, useEffect } from 'react'
import './App.css'
import { db } from './Firebase'
import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [currency, setCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("Pending");
    const [loader, setLoader] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                contact: contact,
                currency: currency,
                amount: amount,
                location: location,
                status:status,
                date:new Date().toLocaleDateString(),
                time:new Date().toLocaleTimeString(),
                
            })
            .then(() => {
                setLoader(false);
                alert("Submitted Successfully👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setContact("");
        setCurrency("");
        setAmount("");
        setLocation("");
        setStatus("Pending");

        emailjs
            .sendForm(
                "service_yjvj7vo",
                "template_xp6sxa2",
                form.current,
                "PlhDYURzgS9u5QQf1"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );

    }
    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
            
                setCountryState({
                    ...countryState,
                    loading: true,
                });

                const dataUrl = `https://restcountries.com/v3.1/all`;
                const response = await axios.get(dataUrl);
                setCountryState({
                    ...countryState,
                    countries: response.data,
                    loading: false,
                });
            } catch (error) {
                setCountryState({
                    ...countryState,
                    loading: false,
                    errorMessage: "Sorry Something went wrong",
                });
            }
        };

        fetchData();
    }, []);
    const { loading, errorMessage, countries } = countryState;
    console.log("loading", loading);
    console.log("countries", countries);
    console.log("errorMessage", errorMessage);

    const [selectedCountry, setSelectedCountry] = useState();
    console.log("selectedCountry", selectedCountry);

    //   find selected country data
    //search selected country
    const searchSelectedCountry = countries.find((obj) => {
        if (obj.name.common === selectedCountry) {
            return true;
        }
        return false;
    });
    console.log("searchSelectedCountry", searchSelectedCountry);

    return (
        <div>
            <div className="header_section">
                <div className="header_left">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="logo"><p className="logohead">Foreign Assistant</p>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        </div>
                    </nav>
                    <div className="banner_main">
                        <h2 className="banner_taital">Quick & Secure <br />Internaltional Payments<br />Starts here</h2>
                        <p className="banner_text">Everything You Need To Pay And Get Paid By Internaltional Marketplaces And Direct Clients On One Secure Platform</p>
                        <div className="btn_main">
                            <div className="btn1">
                                Received On Local Currency</div>
                        </div>
                    </div>
                </div>
                <div className="header_right">
                    <img src="./images/header.png" className="banner_img" />
                </div>
            </div>
    
            <div className="what_we_do_section layout_padding">
                <div className="container">
                    <h1 className="what_taital">CHECK OUT THE PERKS OF Foreign Assistant</h1>
                    <div className="what_we_do_section_2">
                        <div className="row">
                            <div className="col-lg-4 col-sm-7">
                                <div className="boxmain">
                                    <div className="icon_1"><img src="images/icon-1.png" /></div>
                                    <h3 className="accounting_text">Reduced fees</h3>
                                    <p className="lorem_text">Pay up to 90% less compared to standard wire transfers. No hidden fees.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-7">
                                <div className="boxmain active">
                                    <div className="icon_1"><img src="images/icon-2.png" /></div>
                                    <h3 className="accounting_text">Get paid in popular currencies</h3>
                                    <p className="lorem_text">Receiving accounts in a growing number of currencies and get paid like a local.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-7">
                                <div className="boxmain">
                                    <div className="icon_1"><img src="images/icon-3.png" /></div>
                                    <h3 className="accounting_text">Simplify your payments</h3>
                                    <p className="lorem_text">
                                        Pay contractors and suppliers anywhere in the world straight from your Foreign Assistant balance.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-7"><br />
                                <div className="boxmain">
                                    <div className="icon_1"><img src="images/icon-4.png" /></div>
                                    <h3 className="accounting_text">Withdraw funds locally</h3>
                                    <p className="lorem_text">Easily move your funds between currencies and withdraw them to a local bank account.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-7"><br />
                                <div className="boxmain active">
                                    <div className="icon_1"><img src="images/icon-4.png" /></div>
                                    <h3 className="accounting_text">24/7 multilingual support</h3>
                                    <p className="lorem_text">Our team is available any time, day or night, to take your questions and offer assistance. No worries!</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-7"><br />
                                <div className="boxmain">
                                    <div className="icon_1"><img src="images/icon-4.png" /></div>
                                    <h3 className="accounting_text">Working Capital</h3>
                                    <p className="lorem_text">Give your business a boost with instant cash injections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="project_main">
                                <h1 className="services_taital">Get Paid Globally as a Local</h1>
                                <p className="services_text">No matter where you get paid, use local receiving accounts to accept USD, EUR, GBP, CAD, MXN, and other global currencies as if you had a local bank account!
                                </p>
                                <div className="btn_main">
                                    <div className="btn1">
                                        Received On Local Currency</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="images_main">
                                <div className="images_left">
                                    <div className="container_1">
                                        <img src="https://www.indiafilings.com/learn/wp-content/uploads/2018/08/Online-Payment-of-Income-Tax.jpg" alt="Avatar" className="image" style={{ width: '100%', height: "250px" }} />
                                    </div>
                                    <div className="container_1">
                                        <img src="images/img-3.png" alt="Avatar" className="image" style={{ width: '100%' }} />
                                    </div>
                                </div>
                                <div className="images_right">
                                    <div className="container_1">
                                        <img src="https://www.goodreturns.in/img/2015/05/27-1432694604-businessman.jpg" alt="Avatar" className="image" style={{ width: '100%' }} />

                                    </div>
                                    <div className="container_1">
                                        <img src="images/img-5.png" alt="Avatar" className="image" style={{ width: '100%' }} />
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
                            <p className="yers_text">Create an Invoice online for your payment.</p>
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

            <div className="client_section layout_padding">
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="container p-0">
                            <p className="h8 py-5">Payment Details</p>
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Name"
                                            onChange={(e) => setName(e.target.value)} value={name} name="user_name" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter Your Email"
                                            onChange={(e) => setEmail(e.target.value)} value={email} name="user_email" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputzip">Currency</label>
                                        <select
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value)}
                                            required
                                            className="select"
                                            name="user_currency"
                                        >
                                            <option>--Select Currency--</option>
                                            {countries.map((item) => {
                                                return (
                                                    <option key={uuidv4()} value={item.name.common}>
                                                        {item.name.common}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Amount</label>
                                        <input type="number" className="form-control" placeholder="Enter Your Amount"
                                            onChange={(e) => setAmount(e.target.value)} name="user_amount" value={amount}  min="1" max="1000"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Location</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Location"
                                            onChange={(e) => setLocation(e.target.value)} value={location} name="user_location" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputZip">Contact </label>
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            value={contact}
                                            onChange={setContact}
                                            international={true}
                                            withCountryCallingCode={true}
                                            name="user_contact"
                                            onBlur={() => { console.log(isValidPhoneNumber(contact)) }}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="paybtn">PAY</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <h4 className="about_text">About Foreign Assistant</h4>
                            <div className="location_text"><img src="images/map-icon.png" /><span className="padding_left_15">Locations</span></div>
                            <div className="location_text"><img src="images/call-icon.png" /><span className="padding_left_15">+01 9876543210</span></div>
                            <div className="location_text"><img src="images/mail-icon.png" /><span className="padding_left_15">foreignassistantservice@gmail.com</span></div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <h4 className="about_text">About Foreign Assistant</h4>
                            <p className="dolor_text">QUICK & SECURE  INTERNALTIONAL PAYMENTS STARTS HERE Everything You Need To Pay And Get Paid By Internaltional Marketplaces And Direct Clients On One Secure Platform

                            </p>
                        </div>
                    </div>
                    <div className="copyright_section">
                        <div className="copyright_text">Copyright 2022 All Right Reserved By Foreign Assistant</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;
