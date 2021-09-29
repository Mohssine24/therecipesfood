import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import db from '../firebase';

function AllPosts() {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        db.collection("Posts")
        // .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
            
        );
    }, [])
    return (
        <div style={{ margin: '30px 20px 100px' }}>
        <Helmet>
            <title>The recipes food - Food Blog</title>
            <meta
              name="description"
              content="colon cancer test, colon cancer home test, test for colon cancer, at home colon cancer test, colon cancer testing, sequencing service, dna sequencing services, sequencing services, dna sequencing service, locksmith walnut creek ca, handyman in chicago, pressure washing franchise, handyman in chicago, win a contest, loss weight diet, healthy diets to lose weight fast, what is the best weight loss plan, vpn business, vpn for small business, vpn for business, setting up a vpn server, vpn access server, cloud wordpress hosting, wordpress cloud hosting, lighterlife, diet life, colon cancer test, test for colon cancer, sequencing service, 	locksmith walnut creek ca, handyman in chicago, pressure washing franchise, meal replacement diet shakes, homemade meal replacement shakes, low calorie meal replacement, 	loss weight diet, healthy diets to lose weight fast, what to eat and lose weight, chef classes online, vpn business, vpn for small business, vpn for business, setting up a vpn server, vpn access server, , play movies, google shopper app, googlephone, google smart phone, google phone, google smartphone, google phones, 	lighterlife, diet life, wireless keypad, minerals for water, new sprinter vans, transit vans, lease purchase companies, oral and maxillofacial surgeon, oral surgent, oral maxillofacial surgeons, dental surgeons, lexus dealerships, lexus deals, used lexus hybrid, www.lexus, pain managment doctors, australian sim card, australia sim, shopify pricing, selling websites, list of business names, paypal merchant account, paypal account setup, register paypal, minerals for water, wireless keypad, selling websites, shopify pricing, list of business names, starting an online jewelry business, Insurance, Loans, Gas, Electricity, Mortgage, Attorney, Credit, Lawyer, Donate, Conference Call, Degree, MESOTHELIOMA LAW FIRM, Donate Car To Charity CALIFORNIA, DONATE CAR FOR TAX CREDIT, DONATE CARS IN MA, DONATE YOUR CAR SACRAMENTO, HOW TO DONATE A CAR IN CALIFORNIA, SELL ANNUITY PAYMENT, DONATE YOUR CAR FOR KIDS, ASBESTOS LAWYERS, CAR INSURANCE QUOTES COLORADO, STRUCTURED ANNUITY SETTLEMENT, ANNUITY SETTLEMENT, NUNAVUT CULTURE, DAYTON FREIGHT LINES, HARDDRIVE DATA RECOVERY SERVICES, DONATE A CAR IN MARYLAND, MOTOR REPLACEMENTS, CHEAP DOMAIN REGISTRATION HOSTING, DONATING A CAR IN MARYLAND, DONATE CARS ILLINOIS, CRIMINAL DEFENSE ATTORNEYS FLORIDA, BEST CRIMINAL LAWYER IN ARIZONA, CAR INSURANCE QUOTES UTAH, LIFE INSURANCE CO LINCOLN, HOLLAND MICHIGAN COLLEGE, ONLINE MOTOR INSURANCE QUOTES, ONLINE COLLEDGES, PAPERPORT PROMOTIONAL CODE, ONLINE CLASSES, WORLD TRADE CENTER FOOTAGE, MASSAGE SCHOOL DALLAS TEXAS, PSYCHIC FOR FREE, DONATE OLD CARS TO CHARITY, LOW CREDIT LINE CREDIT CARDS, DALLAS MESOTHELIOMA ATTORNEYS, CAR INSURANCE QUOTES MN, DONATE YOUR CAR FOR MONEY, CHEAP AUTO INSURANCE IN VA, MET AUTO, FORENSICS ONLINE COURSE, HOME PHONE INTERNET BUNDLE, DONATING USED CARS TO CHARITY, PHD IN COUNSELING EDUCATION, NEUSON, CAR INSURANCE QUOTES PA, ROYALTY FREE IMAGES STOCK, CAR INSURANCE IN SOUTH DAKOTA, EMAIL BULK SERVICE, WEBEX COSTS, CHEAP CAR INSURANCE FOR LADIES, CHEAP CAR INSURANCE IN VIRGINIA, REGISTER FREE DOMAINS, BETTER CONFERENCING CALLS, FUTURISTIC ARCHITECTURE, MORTGAGE ADVISER, CAR DONATE, VIRTUAL DATA ROOMS, AUTOMOBILE ACCIDENT ATTORNEY, AUTO ACCIDENT ATTORNEY, CAR ACCIDENT LAWYERS, Online casino, Casino, Mobile casino, Make money online Australia, Casino reviews, Live casino, DUI lawyer, Hire PHP developers, Hire PHP programmers, Dwi lawyer, Criminal lawyer, Service business software, Criminal defense lawyer, Php programmers for hire, Hire PHP developer, Bankruptcy lawyer, Computer science classes online, Php programmers, Seo companies, Best social media platforms for business, New social media platforms, Business finance group, Social media platforms for business, Custom WordPress theme designer, Seo services, Best Seo company, Business management software, Best social media platforms, Seo company, Online Christmas cards, Custom Christmas cards, Photo Christmas cards, WordPress themes for designers, WordPress hosting, PSD to WordPress, Social media examiner, Social media management, Tech school, Html email, Social media platforms, Christmas cards, Proud Italian Cook, Psd to HTML, Italian cooking school, WordPress theme designers, Adobe Illustrator classes, Social media strategies, Learning Adobe illustrator, Social media tools, Social media campaigns"
            />
            <link rel="apple-touch-icon" to={"./the-recipes-food-logo-mo-2x.png"} />
            <meta name="keywords" content={'colon cancer test, colon cancer home test, test for colon cancer, at home colon cancer test, colon cancer testing, sequencing service, dna sequencing services, sequencing services, dna sequencing service, locksmith walnut creek ca, handyman in chicago, pressure washing franchise, handyman in chicago, win a contest, loss weight diet, healthy diets to lose weight fast, what is the best weight loss plan, vpn business, vpn for small business, vpn for business, setting up a vpn server, vpn access server, cloud wordpress hosting, wordpress cloud hosting, lighterlife, diet life, colon cancer test, test for colon cancer, sequencing service, 	locksmith walnut creek ca, handyman in chicago, pressure washing franchise, meal replacement diet shakes, homemade meal replacement shakes, low calorie meal replacement, 	loss weight diet, healthy diets to lose weight fast, what to eat and lose weight, chef classes online, vpn business, vpn for small business, vpn for business, setting up a vpn server, vpn access server, , play movies, google shopper app, googlephone, google smart phone, google phone, google smartphone, google phones, 	lighterlife, diet life, wireless keypad, minerals for water, new sprinter vans, transit vans, lease purchase companies, oral and maxillofacial surgeon, oral surgent, oral maxillofacial surgeons, dental surgeons, lexus dealerships, lexus deals, used lexus hybrid, www.lexus, pain managment doctors, australian sim card, australia sim, shopify pricing, selling websites, list of business names, paypal merchant account, paypal account setup, register paypal, minerals for water, wireless keypad, selling websites, shopify pricing, list of business names, starting an online jewelry business, Insurance, Loans, Gas, Electricity, Mortgage, Attorney, Credit, Lawyer, Donate, Conference Call, Degree, MESOTHELIOMA LAW FIRM, Donate Car To Charity CALIFORNIA, DONATE CAR FOR TAX CREDIT, DONATE CARS IN MA, DONATE YOUR CAR SACRAMENTO, HOW TO DONATE A CAR IN CALIFORNIA, SELL ANNUITY PAYMENT, DONATE YOUR CAR FOR KIDS, ASBESTOS LAWYERS, CAR INSURANCE QUOTES COLORADO, STRUCTURED ANNUITY SETTLEMENT, ANNUITY SETTLEMENT, NUNAVUT CULTURE, DAYTON FREIGHT LINES, HARDDRIVE DATA RECOVERY SERVICES, DONATE A CAR IN MARYLAND, MOTOR REPLACEMENTS, CHEAP DOMAIN REGISTRATION HOSTING, DONATING A CAR IN MARYLAND, DONATE CARS ILLINOIS, CRIMINAL DEFENSE ATTORNEYS FLORIDA, BEST CRIMINAL LAWYER IN ARIZONA, CAR INSURANCE QUOTES UTAH, LIFE INSURANCE CO LINCOLN, HOLLAND MICHIGAN COLLEGE, ONLINE MOTOR INSURANCE QUOTES, ONLINE COLLEDGES, PAPERPORT PROMOTIONAL CODE, ONLINE CLASSES, WORLD TRADE CENTER FOOTAGE, MASSAGE SCHOOL DALLAS TEXAS, PSYCHIC FOR FREE, DONATE OLD CARS TO CHARITY, LOW CREDIT LINE CREDIT CARDS, DALLAS MESOTHELIOMA ATTORNEYS, CAR INSURANCE QUOTES MN, DONATE YOUR CAR FOR MONEY, CHEAP AUTO INSURANCE IN VA, MET AUTO, FORENSICS ONLINE COURSE, HOME PHONE INTERNET BUNDLE, DONATING USED CARS TO CHARITY, PHD IN COUNSELING EDUCATION, NEUSON, CAR INSURANCE QUOTES PA, ROYALTY FREE IMAGES STOCK, CAR INSURANCE IN SOUTH DAKOTA, EMAIL BULK SERVICE, WEBEX COSTS, CHEAP CAR INSURANCE FOR LADIES, CHEAP CAR INSURANCE IN VIRGINIA, REGISTER FREE DOMAINS, BETTER CONFERENCING CALLS, FUTURISTIC ARCHITECTURE, MORTGAGE ADVISER, CAR DONATE, VIRTUAL DATA ROOMS, AUTOMOBILE ACCIDENT ATTORNEY, AUTO ACCIDENT ATTORNEY, CAR ACCIDENT LAWYERS, Online casino, Casino, Mobile casino, Make money online Australia, Casino reviews, Live casino, DUI lawyer, Hire PHP developers, Hire PHP programmers, Dwi lawyer, Criminal lawyer, Service business software, Criminal defense lawyer, Php programmers for hire, Hire PHP developer, Bankruptcy lawyer, Computer science classes online, Php programmers, Seo companies, Best social media platforms for business, New social media platforms, Business finance group, Social media platforms for business, Custom WordPress theme designer, Seo services, Best Seo company, Business management software, Best social media platforms, Seo company, Online Christmas cards, Custom Christmas cards, Photo Christmas cards, WordPress themes for designers, WordPress hosting, PSD to WordPress, Social media examiner, Social media management, Tech school, Html email, Social media platforms, Christmas cards, Proud Italian Cook, Psd to HTML, Italian cooking school, WordPress theme designers, Adobe Illustrator classes, Social media strategies, Learning Adobe illustrator, Social media tools, Social media campaigns'} />
            <meta name="author" content="The recipes food" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

<meta property="og:type" content="article" />

<meta property="og:title" content="The recipes food - Healthy, whole food, vegan and vegetarian recipes" />

<meta property="og:description" content="Take a look through our healthy recipe articles and blogs from the experts at The recipes food. We are constantly delivering new up and coming info" />

<meta property="og:image" content="./the-recipes-food-logo-mo-2x.png" />

<meta property="og:url" content="https://therecipesfood.com/" />

<meta property="og:site_name" content="The recipes food" />
<meta name="twitter:title" content="The recipes food - Healthy, whole food, vegan and vegetarian recipes"/>

<meta name="twitter:description" content="Take a look through our healthy recipe articles and blogs from the experts at The recipes food. We are constantly delivering new up and coming info"/>

<meta name="twitter:image" content="./the-recipes-food-logo-mo-2x.png"/>

<meta name="twitter:site" content="@the-recipes-food"/>

<meta name="twitter:creator" content="@the-recipes-food"/>
        </Helmet>
            <h1 style={{ textAlign: 'center' }}>All Posts</h1>
            <hr style={{ height: 1, backgroundColor: '#101010', width: '80%', margin: '40px auto 10px auto' }}/>
            {posts?.map((post, i) =><div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{ textAlign: 'center' }}>{post?.data?.title}</h2>
                <Link style={{ marginLeft: '30px', color: 'blue', fontSize: '18px' }} to={`/edit-post-898992032838873854865654756/${post?.id}`}>Edit</Link>
                <button style={{ marginLeft: '30px', color: 'red', fontSize: '18px' }} onClick={() => {
                    db.collection("Posts")
                    .doc(post?.id)
                    .delete().then(() => {
                        alert("Post successfully deleted!");
                    })
                    //
                }}>Delete</button>
            </div>)}
            <hr style={{ height: 1, backgroundColor: '#101010', width: '80%', margin: '40px auto 10px auto' }}/>
        </div>
    )
}

export default AllPosts
