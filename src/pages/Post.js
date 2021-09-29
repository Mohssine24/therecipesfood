import React, { useEffect, useState } from 'react'
import { 
    useHistory, 
    useParams } from 'react-router-dom'
import Ad1 from '../components/Ad1';
import Ad2 from '../components/Ad2';
import Ad3 from '../components/Ad3';
import db from '../firebase';
import './style.css'

import {
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import {Helmet} from "react-helmet";
import { Markup } from 'interweave';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import ResponsiveAd from '../components/Ads/ResponsiveAd';
import { FaRegEye } from 'react-icons/fa'
import { BiHappyAlt, BiSad } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from 'react-icons/io5'
// import Ad320x50 from '../components/Ads/Ad320x50';
// import Ad2 from '../components/Ad2';
// import Ad1 from '../components/Ad1';
// import Ad3 from '../components/Ad3';

function Post() {
    const { id, pageNumber } = useParams();
    const [ pages, setPages ] = useState([])
    const [ stars, setStars ] = useState(false)
    const [ sad, setSad ] = useState(false)
    const [ happy, setHappy ] = useState(false)
    const [ post, setPost ] = useState(false)
    // const history = useHistory();
    const [ loading, setLoading ] = useState(false)
    const [ pagination, setPagination ] = useState(true)
    const [ nextS, setNextS ] = useState(false)
    const [ adPixels, setAdPixels ] = useState('20')
    const history = useHistory();

    useEffect(() => {
        if(id) {
            setLoading(true)
            db.collection("Posts")
            .doc(id)
            .collection("pages")
            .orderBy("number", "asc")
            .onSnapshot((snapshot) =>{
                setPages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
                db.collection('Settings')
                .doc('settings')
                .get()
                .then(data => {
                    setPagination(data.data().pagination)
                    setAdPixels(data.data().adPixels)
                    setNextS(data.data().next)
                }).then(() => {
                    setLoading(false)
                })
                }
            );
        } else {
            window.location.replace('therecipesfood.com')
        }
    }, [id])

    useEffect(() => {
        db.collection('Posts')
        .doc(id)
        .get()
        .then(data => {
            if(data.exists) {
                setPost({
                    id: data.id,
                    data: data.data()
                })
            } else {
                history.push('/error')
            }
        }).catch(err => {
        })
        return () => {
            //
        }
    }, [id, history])

    const handleHappy = () => {
        if(!happy) {
            db.collection('Posts')
            .doc(id)
            .update({
                happy: parseInt(post?.data?.happy, 10) + 1
            }).then(() => {
                setHappy(true)
            })
        }
    }

    const handleSad = () => {
        if(!sad) {
            db.collection('Posts')
            .doc(id)
            .update({
                sad: parseInt(post?.data?.sad, 10) + 1
            }).then(() => {
                setSad(true)
            })
        }
    }

    const handleStars = () => {
        if(!stars) {
            db.collection('Posts')
            .doc(id)
            .update({
                stars: parseInt(post?.data?.stars, 10) + 1
            }).then(() => {
                setStars(true)
            })
        }
    }

    const back = () => pageNumber > 1 ? window.location.replace(`https://${window.location.host === 'therecipesfood.com' ? 'therecipesfood.com':'therecipesfood.com'}/${id}/${parseInt(pageNumber, 10) - 1}`) : {}

    const next = () => {
        if (pageNumber) {
            if(pageNumber < pages?.length) {
                window.location.replace(`https://${window.location.host === 'therecipesfood.com' ? 'therecipesfood.com':'therecipesfood.com'}/${id}/${parseInt(pageNumber, 10) + 1}`)
            }
        } else {
            if(pages?.length > 1) {
                window.location.replace(`https://${window.location.host === 'therecipesfood.com' ? 'therecipesfood.com':'therecipesfood.com'}/${id}/2`)
            }
        }
    }
    return (
        <div className="post-container">
            <Helmet>
                <title>The recipes food - {`${post?.data?.title.slice(0,42)}`}</title>
                <meta
                    name="description"
                    content={post?.data?.keywords.slice(0,145)}
                />
                <link rel="apple-touch-icon" to={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.image} />
                <meta name="keywords" content={post?.data?.keywords} />
                <meta name="author" content="The recipes food" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:type" content="article" />

                <meta property="og:title" content={`The recipes food - ${post?.data?.title.slice(0,42)}`} />

                <meta property="og:description" content={post?.data?.keywords.slice(0,145)} />

                <meta property="og:image" content={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.image} />

                <meta property="og:url" content={window.location.pathname} />

                <meta property="og:site_name" content="The recipes food" />
                <meta name="twitter:title" content={`The recipes food - ${post?.data?.title.slice(0,42)}`}/>

                <meta name="twitter:description" content={post?.data?.keywords.slice(0,145)}/>

                <meta name="twitter:image" content={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.image}/>

                <meta name="twitter:site" content="@the-recipes-food"/>

                <meta name="twitter:creator" content="@the-recipes-food"/>
            </Helmet>
            {pagination ? (<>
                {!loading ? <main style={{
                    minHeight: '40vh !important'
                }}>
                    <div id="ad-1">
                        {post?.data?.ad_slot_1 ? <Ad1 slot={post?.data?.ad_slot_1} />:<></>}
                    </div>
                    <h1 className="text-center">{pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.title}</h1>
                    <div>
                        <img alt={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.imageAlt} src={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.image} style={{ width: '100%', margin: 'auto' }} />
                    </div>
                    <div style={{ lineHeight: 1.75 }}>
                        <Markup content={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.text} />
                        <div style={{
                            fontSize: 17,
                            position: 'absolute',
                            top: '-300%',
                            left: '-300%'
                        }}>
                        <p>
                            {post?.data?.keywords}
                        </p>
                        </div>
                    </div>
                    <div className="rest-of-the-post">
                        <div>
                            <div>
                                {pages?.filter(page => page?.data?.number !== (pageNumber ? parseInt(pageNumber, 10) - 1 : 0))?.map((page, i) => (<div key={i}>
                                {page?.id !== '0' && <h2 className="text-center">{page?.data?.title}</h2>}
                                <div>
                                    <img alt={page?.data?.imageAlt} src={page?.data?.image} style={{ width: '100%', margin: 'auto' }} />
                                </div>
                                <div style={{ lineHeight: 1.75 }}>
                                    <Markup content={page?.data?.text} />
                                </div>
                                </div>))}
                            </div>
                        </div>
                    </div>
                    <div className="share-con">
                        <FacebookShareButton quote={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.title} url={`therecipesfood.com${window.location.pathname}`}>
                            <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                        <TwitterShareButton title={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.title} hashtags={['food', 'health']} url={`therecipesfood.com${window.location.pathname}`}>
                            <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                        <PinterestShareButton media={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.image} description={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.title} url={`therecipesfood.com${window.location.pathname}`}>
                            <PinterestIcon size={32} round={true} />
                        </PinterestShareButton>
                        <WhatsappShareButton title={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.title} separator={" --> "} url={`therecipesfood.com${window.location.pathname}`}>
                            <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton>
                        <TelegramShareButton title={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.title} url={`therecipesfood.com${window.location.pathname}`}>
                            <TelegramIcon size={32} round={true} />
                        </TelegramShareButton>
                        <RedditShareButton title={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.title} url={`therecipesfood.com${window.location.pathname}`}>
                            <RedditIcon size={32} round={true} />
                        </RedditShareButton>
                    </div>
                    {/* {(pageNumber !== '1' && pageNumber !== undefined) && <div className="click-next">
                        <p>Click next to read more</p>
                        <FaHandPointDown />
                    </div>} */}
                    {pageNumber === '1' || pageNumber === undefined ? <>
                    <div className="next-container" onClick={next}>
                        <p>Open Next Page</p>
                        <button onClick={next}>OPEN</button>
                    </div> 
                    </>:<div id="ad-2" style={{
                        margin: 'auto',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: parseInt(adPixels, 10) + 'px',
                    }}>
                        {post?.data?.ad_slot_2 ? <Ad2 slot={post?.data?.ad_slot_2} />:<></>}
                    </div>}
                    {(pageNumber !== '1' && pageNumber !== undefined) && <>
                    {nextS && <div className="next-back-con">

                        <button className={`back ${pageNumber > 1 ? '':'inactive'}`} onClick={back}>
                            <IoChevronBackCircleSharp />
                        </button>
                        <button className={`next ${(pageNumber >= pages?.length) || (pageNumber === undefined && pages.length <=1) ? 'inactive':''}`} onClick={next}>Next <IoChevronForwardCircleSharp/> </button>
                    </div>}
                    </>}
                    <div id="ad-3" style={{
                        marginTop: parseInt(adPixels, 10) + 'px'
                    }}>
                        {post?.data?.ad_slot_3 ? <Ad3 slot={post?.data?.ad_slot_3} />:<></>}
                        </div>
                    <div className="icons-con" data-test-id="action-bar">
                        <button className="icon" style={happy ? { backgroundColor: 'rgba(255,45,23, 0.2)' }:{}} onClick={handleHappy}  data-test-id="like-button">
                            <span className="icon-svg">
                                <BiHappyAlt />
                            </span>
                            <span className="title">{post?.data?.happy}</span>
                        </button>
                        <button className="icon" style={sad ? { backgroundColor: 'rgba(255,45,23, 0.2)' }:{}} onClick={handleSad}  data-test-id="dislike-button">
                            <span className="icon-svg">
                                <BiSad />
                            </span>
                            <span className="title">{post?.data?.sad}</span>
                        </button>
                        <button className="icon" style={stars ? { backgroundColor: 'rgba(255,45,23, 0.2)' }:{}} onClick={handleStars}  data-test-id="favorite-button">
                            <span className="icon-svg">
                                <AiOutlineStar />
                            </span>
                            <span className="title">{post?.data?.stars}</span>
                        </button>
                        <div className="icon" data-test-id="views-info">
                            <span className="icon-svg">
                                <FaRegEye />
                            </span>
                            <span className="title">{post?.data?.views}</span>
                        </div>
                    </div>
                </main>: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Loader
                            type="Puff"
                            color="#fa843c"
                            height={100}
                            width={100}
                            visible={true}
                            style={{
                                margin: '140px 0px 120px'
                            }}
                        />
                    </div>}</>
            ): <>
            {!loading ? <>
            {/* <div id="ad-1">
                {post?.data?.ad_slot_1 ? <ResponsiveAd slot={post?.data?.ad_slot_1} />:<></>}
            </div> */}
            <h1 className="text-center">{post?.data?.title}</h1>
            {/* {pages?.map((page, i) => (<> */}
                {pages?.map((page, i) => (<div key={i}>
                {page?.id !== '0' && <h2 className="text-center">{page?.data?.title}</h2>}
                <div>
                    <img alt={page?.data?.imageAlt} src={page?.data?.image} style={{ width: '100%', margin: 'auto' }} />
                </div>
                <div style={{ lineHeight: 1.75 }}>
                    <Markup content={page?.data?.text} />
                </div>
                </div>))}
                
                <div style={{
                    fontSize: 17,
                    position: 'absolute',
                    top: '-300%',
                    left: '-300%'
                }}>
                <p>
                    {post?.data?.keywords}
                </p>
                </div>
            {/* <div id="ad-2">
                {post?.data?.ad_slot_2 ? <Ad320x50 slot={post?.data?.ad_slot_2} />:<></>}
            </div> */}
            <div className="share-con">
                <FacebookShareButton quote={post?.data?.title} url={`therecipesfood.com${window.location.pathname}`}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton title={post?.data?.title} hashtags={['food', 'health']} url={`therecipesfood.com${window.location.pathname}`}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <PinterestShareButton media={post?.data?.image} description={pages[pageNumber ? parseInt(pageNumber, 10) - 1 : 0]?.data?.title} url={`therecipesfood.com${window.location.pathname}`}>
                    <PinterestIcon size={32} round={true} />
                </PinterestShareButton>
                <WhatsappShareButton title={post?.data?.title} separator={" --> "} url={`therecipesfood.com${window.location.pathname}`}>
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <TelegramShareButton title={post?.data?.title} url={`therecipesfood.com${window.location.pathname}`}>
                    <TelegramIcon size={32} round={true} />
                </TelegramShareButton>
                <RedditShareButton title={post?.data?.title} url={`therecipesfood.com${window.location.pathname}`}>
                    <RedditIcon size={32} round={true} />
                </RedditShareButton>
            {/* <div id="ad-3">
                {post?.data?.ad_slot_3 ? <ResponsiveAd slot={post?.data?.ad_slot_3} />:<></>}</div> */}
            </div>
            <div className="icons-con" data-test-id="action-bar">
                <button className="icon" style={happy ? { backgroundColor: 'rgba(255,45,23, 0.2)' }:{}} onClick={handleHappy}  data-test-id="like-button">
                    <span className="icon-svg">
                        <BiHappyAlt />
                    </span>
                    <span className="title">{post?.data?.happy}</span>
                </button>
                <button className="icon" style={sad ? { backgroundColor: 'rgba(255,45,23, 0.2)' }:{}} onClick={handleSad}  data-test-id="dislike-button">
                    <span className="icon-svg">
                        <BiSad />
                    </span>
                    <span className="title">{post?.data?.sad}</span>
                </button>
                <button className="icon" style={stars ? { backgroundColor: 'rgba(255,45,23, 0.2)' }:{}} onClick={handleStars}  data-test-id="favorite-button">
                    <span className="icon-svg">
                        <AiOutlineStar />
                    </span>
                    <span className="title">{post?.data?.stars}</span>
                </button>
                <div className="icon" data-test-id="views-info">
                    <span className="icon-svg">
                        <FaRegEye />
                    </span>
                    <span className="title">{post?.data?.views}</span>
                </div>
            </div>
            </> : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Loader
                    type="Puff"
                    color="#fa843c"
                    height={100}
                    width={100}
                    visible={true}
                />
            </div>
            }
            </>
            }
        </div>
    )
}

export default Post
