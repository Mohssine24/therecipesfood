import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase';
import './Home.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Helmet } from 'react-helmet';

function Home() {
    const [ posts, setPosts ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        db.collection("Posts")
        // .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>{
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
            setLoading(false)
            }
        );
    }, [])
    return (
        <div className="container"> 
        <Helmet>
            <title>The recipes food - Healthy, whole food, vegan and vegetarian recipes</title>
            <meta
              name="description"
              content="Take a look through our healthy recipe articles and blogs from the experts at The recipes food. We are constantly delivering new up and coming info"
            />
            <meta name="keywords" content={'colon cancer test, colon cancer home test, test for colon cancer, at home colon cancer test, colon cancer testing, sequencing service, dna sequencing services, sequencing services, dna sequencing service, locksmith walnut creek ca, handyman in chicago, pressure washing franchise, handyman in chicago, win a contest, loss weight diet, healthy diets to lose weight fast, what is the best weight loss plan, vpn business, vpn for small business, vpn for business, setting up a vpn server, vpn access server, cloud wordpress hosting, wordpress cloud hosting, lighterlife, diet life, colon cancer test, test for colon cancer, sequencing service, 	locksmith walnut creek ca, handyman in chicago, pressure washing franchise, meal replacement diet shakes, homemade meal replacement shakes, low calorie meal replacement, 	loss weight diet, healthy diets to lose weight fast, what to eat and lose weight, chef classes online, vpn business, vpn for small business, vpn for business, setting up a vpn server, vpn access server, , play movies, google shopper app, googlephone, google smart phone, google phone, google smartphone, google phones, 	lighterlife, diet life, wireless keypad, minerals for water, new sprinter vans, transit vans, lease purchase companies, oral and maxillofacial surgeon, oral surgent, oral maxillofacial surgeons, dental surgeons, lexus dealerships, lexus deals, used lexus hybrid, www.lexus, pain managment doctors, australian sim card, australia sim, shopify pricing, selling websites, list of business names, paypal merchant account, paypal account setup, register paypal, minerals for water, wireless keypad, selling websites, shopify pricing, list of business names, starting an online jewelry business, Insurance, Loans, Gas, Electricity, Mortgage, Attorney, Credit, Lawyer, Donate, Conference Call, Degree, MESOTHELIOMA LAW FIRM, Donate Car To Charity CALIFORNIA, DONATE CAR FOR TAX CREDIT, DONATE CARS IN MA, DONATE YOUR CAR SACRAMENTO, HOW TO DONATE A CAR IN CALIFORNIA, SELL ANNUITY PAYMENT, DONATE YOUR CAR FOR KIDS, ASBESTOS LAWYERS, CAR INSURANCE QUOTES COLORADO, STRUCTURED ANNUITY SETTLEMENT, ANNUITY SETTLEMENT, NUNAVUT CULTURE, DAYTON FREIGHT LINES, HARDDRIVE DATA RECOVERY SERVICES, DONATE A CAR IN MARYLAND, MOTOR REPLACEMENTS, CHEAP DOMAIN REGISTRATION HOSTING, DONATING A CAR IN MARYLAND, DONATE CARS ILLINOIS, CRIMINAL DEFENSE ATTORNEYS FLORIDA, BEST CRIMINAL LAWYER IN ARIZONA, CAR INSURANCE QUOTES UTAH, LIFE INSURANCE CO LINCOLN, HOLLAND MICHIGAN COLLEGE, ONLINE MOTOR INSURANCE QUOTES, ONLINE COLLEDGES, PAPERPORT PROMOTIONAL CODE, ONLINE CLASSES, WORLD TRADE CENTER FOOTAGE, MASSAGE SCHOOL DALLAS TEXAS, PSYCHIC FOR FREE, DONATE OLD CARS TO CHARITY, LOW CREDIT LINE CREDIT CARDS, DALLAS MESOTHELIOMA ATTORNEYS, CAR INSURANCE QUOTES MN, DONATE YOUR CAR FOR MONEY, CHEAP AUTO INSURANCE IN VA, MET AUTO, FORENSICS ONLINE COURSE, HOME PHONE INTERNET BUNDLE, DONATING USED CARS TO CHARITY, PHD IN COUNSELING EDUCATION, NEUSON, CAR INSURANCE QUOTES PA, ROYALTY FREE IMAGES STOCK, CAR INSURANCE IN SOUTH DAKOTA, EMAIL BULK SERVICE, WEBEX COSTS, CHEAP CAR INSURANCE FOR LADIES, CHEAP CAR INSURANCE IN VIRGINIA, REGISTER FREE DOMAINS, BETTER CONFERENCING CALLS, FUTURISTIC ARCHITECTURE, MORTGAGE ADVISER, CAR DONATE, VIRTUAL DATA ROOMS, AUTOMOBILE ACCIDENT ATTORNEY, AUTO ACCIDENT ATTORNEY, CAR ACCIDENT LAWYERS, Online casino, Casino, Mobile casino, Make money online Australia, Casino reviews, Live casino, DUI lawyer, Hire PHP developers, Hire PHP programmers, Dwi lawyer, Criminal lawyer, Service business software, Criminal defense lawyer, Php programmers for hire, Hire PHP developer, Bankruptcy lawyer, Computer science classes online, Php programmers, Seo companies, Best social media platforms for business, New social media platforms, Business finance group, Social media platforms for business, Custom WordPress theme designer, Seo services, Best Seo company, Business management software, Best social media platforms, Seo company, Online Christmas cards, Custom Christmas cards, Photo Christmas cards, WordPress themes for designers, WordPress hosting, PSD to WordPress, Social media examiner, Social media management, Tech school, Html email, Social media platforms, Christmas cards, Proud Italian Cook, Psd to HTML, Italian cooking school, WordPress theme designers, Adobe Illustrator classes, Social media strategies, Learning Adobe illustrator, Social media tools, Social media campaigns'} />
            <meta name="author" content="The recipes food" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />


            <meta property="og:type" content="article" />

            <meta property="og:title" content="The recipes food - Healthy, whole food, vegan and vegetarian recipes" />

            <meta property="og:description" content="Take a look through our healthy recipe articles and blogs from the experts at The recipes food. We are constantly delivering new up and coming info" />

            <meta property="og:image" content="http://therecipesfood.com/the-recipes-food-logo-mo-2x.png" />

            <meta property="og:url" content="https://therecipesfood.com/" />

            <meta property="og:site_name" content="The recipes food" />
            <meta name="twitter:title" content="The recipes food - Healthy, whole food, vegan and vegetarian recipes"/>

            <meta name="twitter:description" content="Take a look through our healthy recipe articles and blogs from the experts at The recipes food. We are constantly delivering new up and coming info"/>

            <meta name="twitter:image" content="http://therecipesfood.com/the-recipes-food-logo-mo-2x.png"/>

            <meta name="twitter:site" content="@the-recipes-food"/>

            <meta name="twitter:creator" content="@the-recipes-food"/>
        </Helmet>
            <div className="content">
                <div class="css-jw76fk">
                    <h1 class="css-vkk9sv">Editor's Pick This Week</h1>
                </div>
                <main className="main-box-inside" style={{
                    minHeight: '30vh'
                }}>
                    {!loading ? posts?.map((post, i)=> <div className="box-con" key={i}>
                        <Link to={`/${post.id}`} className="box-img-link">
                            <div className="box-img-div">
                                <img src={post?.data?.image} alt={post?.data?.title} />
                            </div>
                        </Link>
                        <div className="icons-con" data-test-id="action-bar">
                            <Link className="icon" to="/" data-test-id="like-button">
                                <span className="icon-svg">
                                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" id="smile-positive"><path d="M32 6C17.637 6 6 17.637 6 32s11.637 26 26 26 26-11.637 26-26S46.363 6 32 6zm0 46.968c-11.564 0-20.968-9.404-20.968-20.968S20.436 11.032 32 11.032 52.968 20.436 52.968 32 43.564 52.968 32 52.968zm-8.387-22.645c1.856 0 3.355-1.5 3.355-3.355 0-1.856-1.5-3.355-3.355-3.355a3.351 3.351 0 00-3.355 3.355c0 1.855 1.5 3.355 3.355 3.355zm16.774 0c1.856 0 3.355-1.5 3.355-3.355 0-1.856-1.5-3.355-3.355-3.355a3.351 3.351 0 00-3.355 3.355c0 1.855 1.5 3.355 3.355 3.355zm.42 7.61A11.441 11.441 0 0132 42.066c-3.407 0-6.626-1.5-8.806-4.131a2.524 2.524 0 00-3.544-.325 2.523 2.523 0 00-.325 3.543A16.457 16.457 0 0032 47.086c4.906 0 9.53-2.16 12.675-5.934a2.513 2.513 0 00-.325-3.543 2.524 2.524 0 00-3.544.325z" fill="currentColor" fill-rule="nonzero"></path></svg>
                                </span>
                                <span className="title">{post.data.happy}</span>
                            </Link>
                            <Link className="icon" to="/" data-test-id="dislike-button">
                                <span className="icon-svg">
                                    <svg className="_22jc_k1TNc2RNJ3kaRqO1E" viewBox="0 0 64 64">
                                        <use href="#smile-negative" >
                                            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" id="smile-negative"><path d="M32 6C17.637 6 6 17.637 6 32s11.637 26 26 26 26-11.637 26-26S46.363 6 32 6zm0 46.968c-11.564 0-20.968-9.404-20.968-20.968S20.436 11.032 32 11.032 52.968 20.436 52.968 32 43.564 52.968 32 52.968zm-8.387-22.645c1.856 0 3.355-1.5 3.355-3.355 0-1.856-1.5-3.355-3.355-3.355a3.351 3.351 0 00-3.355 3.355c0 1.855 1.5 3.355 3.355 3.355zm16.774-6.71a3.351 3.351 0 00-3.355 3.355c0 1.855 1.5 3.355 3.355 3.355 1.856 0 3.355-1.5 3.355-3.355 0-1.856-1.5-3.355-3.355-3.355zM32 37.033a14.136 14.136 0 00-10.882 5.094 2.513 2.513 0 00.325 3.544c1.07.88 2.652.744 3.543-.325a9.12 9.12 0 0114.028 0 2.524 2.524 0 003.543.325 2.523 2.523 0 00.325-3.544A14.136 14.136 0 0032 37.032z" fill="currentColor" fill-rule="nonzero"></path></svg>
                                        </use>
                                    </svg>
                                </span>
                                <span className="title">{post.data.sad}</span>
                            </Link>
                            <Link className="icon" to="/" data-test-id="favorite-button">
                                <span className="icon-svg">
                                    <svg className="_22jc_k1TNc2RNJ3kaRqO1E" viewBox="0 0 64 64">
                                        <use href="#star" >
                                            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" id="star"><path d="M55.337 23.747l-14.2-2.08L34.79 8.74c-1.138-2.304-4.433-2.333-5.58 0l-6.346 12.928-14.2 2.08c-2.547.371-3.568 3.525-1.721 5.332l10.273 10.057-2.43 14.207c-.437 2.568 2.256 4.492 4.51 3.29L32 49.927l12.704 6.708c2.254 1.191 4.947-.723 4.51-3.29l-2.43-14.208 10.273-10.057c1.847-1.807.826-4.96-1.72-5.332zm-13.56 13.749l2.304 13.513L32 44.633 19.919 51.01l2.303-13.513-9.778-9.57 13.51-1.972L32 13.651l6.046 12.303 13.51 1.972-9.778 9.57z" fill="currentColor" fill-rule="nonzero"></path></svg>
                                        </use>
                                    </svg>
                                </span>
                                <span className="title">{post.data.stars}</span>
                            </Link>
                            <Link className="icon" data-test-id="comments-link" to="/inspiration-health/7-fruit-seeds-we-usually-throw-away-but-eating-them-can-boost-your-health-802806/comments">
                                <span className="icon-svg">
                                    <svg className="_22jc_k1TNc2RNJ3kaRqO1E" viewBox="0 0 64 64">
                                        <use href="#message" >
                                            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" id="message"><path d="M51.5 6h-39A6.506 6.506 0 006 12.5v29.25c0 3.585 2.915 6.5 6.5 6.5h9.75v8.531c0 .721.59 1.219 1.219 1.219.243 0 .497-.071.72-.244l12.686-9.506H51.5c3.585 0 6.5-2.915 6.5-6.5V12.5C58 8.915 55.085 6 51.5 6zm1.625 35.75a1.63 1.63 0 01-1.625 1.625H35.25l-1.3.975-6.825 5.119v-6.094H12.5a1.63 1.63 0 01-1.625-1.625V12.5a1.63 1.63 0 011.625-1.625h39a1.63 1.63 0 011.625 1.625v29.25z" fill="currentColor" fill-rule="nonzero"></path></svg>
                                        </use>
                                    </svg>
                                </span>
                                <span className="title">{post.data.comments}</span>
                            </Link>
                            <div className="icon" data-test-id="views-info">
                                <span className="icon-svg">
                                    <svg className="_22jc_k1TNc2RNJ3kaRqO1E" viewBox="0 0 64 64">
                                        <use href="#eye" >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="eye"><path d="M57.4 29.749C52.31 20.909 42.816 15 32 15c-10.82 0-20.312 5.912-25.4 14.749-.8 1.389-.8 3.113 0 4.503C11.69 43.092 21.184 49 32 49c10.82 0 20.312-5.912 25.4-14.749.8-1.389.8-3.113 0-4.502zM32 44.565c-9.259 0-17.342-5.054-21.667-12.565C14.32 25.077 21.5 20.241 29.848 19.527a5.22 5.22 0 011.43 3.603c0 2.858-2.264 5.174-5.056 5.174-2.792 0-5.055-2.316-5.055-5.174v-.003a12.742 12.742 0 00-1.445 5.916c0 6.94 5.497 12.566 12.278 12.566 6.78 0 12.278-5.626 12.278-12.566a12.7 12.7 0 00-2.519-7.623A25.15 25.15 0 0153.667 32C49.342 39.511 41.259 44.565 32 44.565z" fill="currentColor" fill-rule="nonzero"></path></svg>
                                        </use>
                                    </svg>
                                </span>
                                <span className="title">{post.data.views}</span>
                            </div>
                        </div>
                        <h3 className="box-title">
                            <Link data-test-id="title-link" to={`/${post.id}`}>
                                {post.data.title}
                            </Link>
                        </h3>
                    </div>): <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Loader
                            type="Puff"
                            color="#fa843c"
                            height={100}
                            width={100}
                            visible={true}
                        />
                    </div>}
                </main>
            </div>
        </div>
    )
}

export default Home
