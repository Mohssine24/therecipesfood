import React, { useEffect, useState } from 'react';
import db, { firestore } from '../firebase';
import './style.css';
// import SunEditor,{buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
// import { Markup } from 'interweave';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function EditPost() {
    const { id } = useParams();
//   const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [stars, setStars] = useState("");
  const [views, setViews] = useState("");
  const [happy, setHappy] = useState("");
  const [sad, setSad] = useState("");
  const [slot1, setSlot1] = useState("");
  const [slot2, setSlot2] = useState("");
  const [slot3, setSlot3] = useState("");
  const [comments, setComments] = useState("");
//   const [image, setImge] = useState("");
  const [imgData, setImgData] = useState(null);
//   const [title2, setTitle2] = useState("");
//   const [image2p, setImage2p] = useState("");
//   const [image2, setImage2] = useState("");
//   const [text, setText] = useState("");
//   const [ pages, setPages ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const onChangePicture = e => {
    if (e.target.files[0]) {
    //   setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
//   const onChangePicture2 = e => {
//     if (e.target.files[0]) {
//       const reader = new FileReader();
//       reader.addEventListener("load", () => {
//         setImage2(reader.result);
//       });
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };
    // const [ post, setPost ] = useState({})


    useEffect(() => {
        db.collection('Posts')
        .doc(id)
        .get()
        .then(data => {
            setTitle(data.data().title)
            setStars(data.data().stars)
            setViews(data.data().views)
            setHappy(data.data().happy)
            setSad(data.data().sad)
            setComments(data.data().comments)
            setSlot1(data.data().ad_slot_1)
            setSlot2(data.data().ad_slot_2)
            setSlot3(data.data().ad_slot_3)
            // setPost({
            //     id: data.id,
            //     data: data.data()
            // })
        }) 
        return () => {
            //
        }
    }, [id])

  
    const upload = async () => {
        setLoading(true)
        if(imgData) {
            const uri = imgData;
            const name = title.toLowerCase().replace(" ", "-")
            const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function () {
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
            });
            const ref = firestore.ref().child(`images/${name}`);
            const snapshot = await ref.put(blob, { contentType: "image/png" });
            const remoteURL = await snapshot.ref.getDownloadURL();
            db.collection('Posts')
            .doc(id)
            .update({
                title: title,
                stars: stars,
                views: views,
                happy: happy,
                sad: sad,
                comments: comments,
                image: remoteURL,
                ad_slot_1: slot1,
                ad_slot_2: slot2,
                ad_slot_3: slot3
            }).then(() => {
                setLoading(false)
                // addPages()
                alert('success')
            })
        } else {
            db.collection('Posts')
            .doc(id)
            .update({
                title: title,
                stars: stars,
                views: views,
                happy: happy,
                sad: sad,
                comments: comments,
                ad_slot_1: slot1,
                ad_slot_2: slot2,
                ad_slot_3: slot3
            }).then(() => {
                setLoading(false)
                // addPages()
                alert('success')
            })
        }
    }

    // const addPages = async() => {
    //     for (var i=0; i<pages.length;i++) {
    //         const uri2 = pages[i].image;
    //         const name2 = pages[i].title.toLowerCase().replace(" ", "-")
    //         const blob2 = await new Promise((resolve, reject) => {
    //         const xhr2 = new XMLHttpRequest();
    //         xhr2.onload = function () {
    //             resolve(xhr2.response);
    //         };
    //         xhr2.onerror = function () {
    //             reject(new TypeError("Network request failed"));
    //         };
    //         xhr2.responseType = "blob";
    //         xhr2.open("GET", uri2, true);
    //         xhr2.send(null);
    //         });
    //         const ref2 = firestore.ref().child(`images/${name2}`);
    //         const snapshot2 = await ref2.put(blob2, { contentType: "image/png" });
    //         const remoteURL2 = await snapshot2.ref.getDownloadURL();
    //         db.collection('Posts')
    //         .doc(id)
    //         .collection('pages')
    //         .doc(`${pages[i].number + ''}`)
    //         .set({
    //             title: pages[i].title,
    //             image: remoteURL2,
    //             text: pages[i].text,
    //         })
    //     }
    //     setLoading(false)
    // }
    return (
        <div className="create-con">
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
        </Helmet>
            <h1>Edit Post</h1>
            <hr style={{ height: 1, backgroundColor: '#101010', width: '80%', margin: '40px auto 10px auto' }}/>
            <h3>title</h3>
            <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <h3>stars</h3>
            <input placeholder="30" value={stars} onChange={(e) => setStars(e.target.value)} />
            <h3>views</h3>
            <input placeholder="100k" value={views} onChange={(e) => setViews(e.target.value)} />
            <h3>happy</h3>
            <input placeholder="3k" value={happy} onChange={(e) => setHappy(e.target.value)} />
            <h3>sad</h3>
            <input placeholder="5k" value={sad} onChange={(e) => setSad(e.target.value)} />
            <h3>comments</h3>
            <input placeholder="604" value={comments} onChange={(e) => setComments(e.target.value)} />
            <hr style={{ height: 1, backgroundColor: '#101010', width: '80%', margin: '40px auto 10px auto' }}/>


            <h3>image</h3>
            <input id="profilePic" type="file" onChange={onChangePicture} />
            {/* <hr style={{ height: 1, backgroundColor: '#101010', width: '80%', margin: '40px auto 10px auto' }}/>
            <h2>Pages : {pages.length}</h2>
            <h3>title</h3>
            <input placeholder="title" value={title2} onChange={(e) => setTitle2(e.target.value)} />
            <h3>image</h3>
            <input id="imageee" type="file" onChange={onChangePicture2} />
            <h3>text</h3>
            <SunEditor onChange={(content) => {
                console.log(content); //Get Content Inside Editor
                setText(content); //Get Content Inside Editor
            }} 
            setOptions={{
				    minHeight: 400,
					buttonList: [
                        ['undo', 'redo'],
                        ['font', 'fontSize', 'formatBlock'],
                        ['paragraphStyle', 'blockquote'],
                        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                        ['fontColor', 'hiliteColor', 'textStyle'],
                        ['removeFormat'],
                        '/', // Line break
                        ['outdent', 'indent'],
                        ['align', 'horizontalRule', 'list', 'lineHeight'],
                        ['table', 'link'], // You must add the 'katex' library at options to use the 'math' plugin.
                        ['imageGallery']  // You must add the "imageGalleryUrl".
                        ['fullScreen', 'showBlocks', 'codeView'],
                        ['preview', 'print'],
                        ['save', 'template']
                    ] // Or Array of button list, eg. [['font', 'align'], ['image']]
                    // plugins: [font] set plugins, all plugins are set by default
					// Other option
			}}
            setAllPlugins
            setDefaultStyle="font-size: 17px;"/>
            <h3><b>Text Preview</b></h3>
            <div style={{ backgroundColor: '#eeeeee', padding: '10px 20px', borderRadius: 8, maxWidth: '90%' }}>
            <Markup content={text} />
            </div>
            <button onClick={() => {
                if(title2 && image2 && text) {
                    setPages([...pages, {
                        number: pages.length,
                        title: title2,
                        image: image2,
                        text: text
                    }])
                    setTitle2('')
                    setText('')
                } else {
                    alert('3amar aaaa')
                }
            }}>add</button> */}
            <hr style={{ height: 1, backgroundColor: '#101010', width: '80%', margin: '40px auto 10px auto' }}/>
            <h2>Ads</h2>
            <h3>data-ad-slot (1)</h3>
            <input placeholder="data-ad-slot 1" value={slot1} onChange={(e) => setSlot1(e.target.value)} />
            <h3>data-ad-slot (2)</h3>
            <input placeholder="data-ad-slot 2" value={slot2} onChange={(e) => setSlot2(e.target.value)} />
            <h3>data-ad-slot (3)</h3>
            <input placeholder="data-ad-slot 3" value={slot3} onChange={(e) => setSlot3(e.target.value)} />
            <hr style={{ height: 1, backgroundColor: '#101010', width: '80%', margin: '40px auto 10px auto' }}/>
                {loading ? <><Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    // timeout={3000} //3 secs
                    visible={true}
                /><p>tsen xwia ...</p></> : <></>}
            <button onClick={() => {
                if(title&&stars&&views&&happy&&sad&&comments) {
                    upload()
                } else {
                    alert('3amar 3amar !!')
                }
            }}>Update</button>
        </div>
    )
}

export default EditPost