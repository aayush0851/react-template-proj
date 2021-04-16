import React from "react";
import {Fade, Slide, Bounce, Zoom, Flip} from "react-awesome-reveal";
import { Link } from "react-scroll";
import "./stylesheets/main-page.css";
import "./stylesheets/media-query.css";
import HiBoonie from "./hiboonie";

const MainPage = (props: any) => {
    // eslint-disable-next-line
    const [layoutId, setLayoutId] = React.useState<number>(0)
    const [hamtoggle, setHamtoggle] = React.useState<boolean>(false);
    // eslint-disable-next-line
    const [mainPage, setMainPage] = React.useState<string>("default");
    const [code, setCode] = React.useState<string>("");
    const [entry, setEntry] = React.useState<boolean>(false);
    const [windupdelaybday, setdelaybaday] = React.useState<boolean>(true);
    const [windupdelayboonie, setdelayboonie] = React.useState<boolean>(false);
    const [wall, setwall] = React.useState<boolean>(false);
    setTimeout(()=>{
        setwall(!wall);
    },1000);
    setTimeout(()=>{
        setdelaybaday(false)
    },5000);

    setTimeout(() => {
        setdelayboonie(true)
    }, 6000);

    function toggle(){
        setHamtoggle(!hamtoggle);
    }

    function handleCode(e: React.ChangeEvent<HTMLInputElement>){
        setCode(e.target.value)
    }

    function submitPassword(e:React.KeyboardEvent<HTMLInputElement>){
        if(e.key==='Enter'){
            e.preventDefault();
            if(code==="1234"){
                setEntry(true)
            }
        }
    }

    function navbarServiceCall(serviceName: string) {
        setHamtoggle(false);
        if(serviceName==="watchagain"){
            window.location.reload();
        }
        setMainPage(serviceName);
    }
    return (
        <div id="mainpage">
            <div>
                {windupdelaybday?<HiBoonie/>:null}
            </div>
            <div id="main-page-holder">
                <div id={!hamtoggle?"hamburger":"hamburger-active"} onClick={toggle}>
                    <div id={!hamtoggle?"line-ham-1":"line-ham-1-active"}></div>
                    <div id={!hamtoggle?"line-ham-2":"line-ham-2-active"}></div>
                    <div id={!hamtoggle?"line-ham-3":"line-ham-3-active"}></div>
                </div>
                <div id={!hamtoggle?"navbar-inactive":"navbar"}>
                    <ul id="nav-bar-ul">
                        <Link to="main-page-wall" spy={true} smooth={true} offset={0} duration={500}>
                            <li className={!hamtoggle?"nav-bar-li-1":"nav-bar-li-1-active"} onClick={()=>navbarServiceCall("home")}>  
                                    Home
                            </li>
                        </Link>
                        <Link to="video-zone-main" spy={true} smooth={true} offset={0} duration={500}>
                            <li className={!hamtoggle?"nav-bar-li-2":"nav-bar-li-2-active"} onClick={()=>navbarServiceCall("home")}>  
                                    The Arcade
                            </li>
                        </Link>
                        <Link to="meme-section" spy={true} smooth={true} offset={0} duration={500}>
                            <li className={!hamtoggle?"nav-bar-li-3":"nav-bar-li-3-active"} onClick={()=>navbarServiceCall("memes")}>  
                                    The Photoshop
                            </li>
                        </Link>
                        <Link to="main-video-section" spy={true} smooth={true} offset={0} duration={500}>
                            <li className={!hamtoggle?"nav-bar-li-4":"nav-bar-li-4-active"} onClick={()=>navbarServiceCall("vids")}>  
                                    The Private Section
                            </li>
                        </Link>
                        <Link to="footer" spy={true} smooth={true} offset={0} duration={500}>
                            <li className={!hamtoggle?"nav-bar-li-5":"nav-bar-li-5-active"} onClick={()=>navbarServiceCall("footer")}>  
                                    The Ending Note
                            </li>
                        </Link>
                        <Link to="Home" spy={true} smooth={true} offset={0} duration={500}>
                            <li className={!hamtoggle?"nav-bar-li-6":"nav-bar-li-6-active"} onClick={()=>navbarServiceCall("watchagain")}>
                                Wanna see it again? XD
                            </li>
                        </Link>
                    </ul>
                </div>
                <div id="main-page-services">
                    <Fade cascade={true}>
                        <div id="main-page-wall">
                            <img className="wall-img" alt="text" src={wall?require('./assets/images-src/a.jpeg'):require('./assets/images-src/a.jpeg')}/>
                            <div id="wall-content">
                                {windupdelayboonie?<Zoom><div id="wall-content-head">
                                    Hello Mate
                                </div></Zoom> : null}
                            </div>
                        </div>
                    </Fade>

{/* ----------------birthday wishes section---------------------- */}

                    <div id="video-zone-main">
                        <Bounce>
                            <div id="video-zone-head">
                                The Arcade
                            </div>
                        </Bounce>
                       <div className="message-zone-compiled">
                           <div className="thread-holder"></div>
                            <div className="video-zone">
                                <Zoom cascade={false}>
                                    <div className="video-zone-left-part">
                                        <div className="card">
                                            <div className="tilted-card"></div>
                                                <div className="straight-card">
                                                <img className="iframe" alt="test" src={require('./assets/images-src/c.jpeg')}/>
                                                <div className="negative-zone">
                                                    Caption
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                    <div className="video-zone-right-part">
                                        <div className="content-card">
                                            <div className="content-head">
                                                Additional Caption
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            <div className="video-zone">
                            <Zoom cascade={false}>
                                    <div className="video-zone-left-part">
                                        <div className="card">
                                            <div className="tilted-card"></div>
                                                <div className="straight-card">
                                                <img className="iframe" alt="test" src={require('./assets/images-src/b.jpeg')}/>
                                                <div className="negative-zone">
                                                    Caption
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                    <div className="video-zone-right-part">
                                        <div className="content-card">
                                            <div className="content-head">
                                                Additional Caption
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            <div className="video-zone">
                            <Zoom cascade={false}>
                                    <div className="video-zone-left-part">
                                        <div className="card">
                                            <div className="tilted-card"></div>
                                                <div className="straight-card">
                                                <img className="iframe" alt="test" src={require('./assets/images-src/a.jpeg')}/>
                                                <div className="negative-zone">
                                                    Caption
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                    <div className="video-zone-right-part">
                                        <div className="content-card">
                                            <div className="content-head">
                                                Additional Caption
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            <div className="video-zone">
                            <Zoom cascade={false}>
                                    <div className="video-zone-left-part">
                                        <div className="card">
                                            <div className="tilted-card"></div>
                                                <div className="straight-card">
                                                <img className="iframe" alt="test" src={require('./assets/images-src/c.jpeg')}/>
                                                <div className="negative-zone">
                                                    Caption
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                    <div className="video-zone-right-part">
                                        <div className="content-card">
                                            <div className="content-head">
                                                Additional Caption
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                            <div className="video-zone">
                            <Zoom cascade={false}>
                                    <div className="video-zone-left-part">
                                        <div className="card">
                                            <div className="tilted-card"></div>
                                                <div className="straight-card">
                                                <img className="iframe" alt="test" src={require('./assets/images-src/b.jpeg')}/>
                                                <div className="negative-zone">
                                                    Caption
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                    <div className="video-zone-right-part">
                                        <div className="content-card">
                                            <div className="content-head">
                                                Additional Caption
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                       </div>
                    </div>
                

{/* ------------------videos section--------------------- */}

{/* ------------------meme section--------------------- */}
                    <div id="meme-section">
                        <Slide direction={"up"}>
                            <div id="meme-section-head">
                                Photo-Shop
                            </div>
                        </Slide>
                        <div id="memes-zone">
                            <Bounce>
                                <div className={layoutId===1?"card-active":"card-inactive"}>
                                    <div className={layoutId===1?"close-active":"close-inactive"}></div>
                                    <div className={layoutId===1?"meme-holder-active":"meme-holder-inactive"}>
                                    <img className="meme-img" alt="test" src={require('./assets/images-src/b.jpeg')}/>
                                    </div>
                                    <div className={layoutId===1?"meme-note-active":"meme-note-inactive"}>
                                            Caption
                                    </div>
                                </div>
                            </Bounce>
                            <Bounce>
                                <div className={layoutId===1?"card-active":"card-inactive"}>
                                    <div className={layoutId===1?"close-active":"close-inactive"}></div>
                                    <div className={layoutId===1?"meme-holder-active":"meme-holder-inactive"}>
                                    <img className="meme-img" alt="test" src={require('./assets/images-src/c.jpeg')}/>
                                    </div>
                                    <div className={layoutId===1?"meme-note-active":"meme-note-inactive"}>
                                            Caption
                                    </div>
                                </div>
                            </Bounce>
                            <Bounce>
                                <div className={layoutId===1?"card-active":"card-inactive"}>
                                    <div className={layoutId===1?"close-active":"close-inactive"}></div>
                                    <div className={layoutId===1?"meme-holder-active":"meme-holder-inactive"}>
                                    <img className="meme-img" alt="test" src={require('./assets/images-src/a.jpeg')}/>
                                    </div>
                                    <div className={layoutId===1?"meme-note-active":"meme-note-inactive"}>
                                            Caption
                                    </div>
                                </div>
                            </Bounce>
                            <Bounce>
                                <div className={layoutId===1?"card-active":"card-inactive"}>
                                    <div className={layoutId===1?"close-active":"close-inactive"}></div>
                                    <div className={layoutId===1?"meme-holder-active":"meme-holder-inactive"}>
                                    <img className="meme-img" alt="test" src={require('./assets/images-src/b.jpeg')}/>
                                    </div>
                                    <div className={layoutId===1?"meme-note-active":"meme-note-inactive"}>
                                            Caption
                                    </div>
                                </div>
                            </Bounce>
                        </div>
                    </div>

                    <div id="main-video-section">
                        <Zoom>
                            <div id="main-video-section-head">
                                {!entry?"The Private Section":"We have been waiting for you!"}
                            </div>
                        </Zoom>
                        <Flip>
                            {!entry?<div id="protected">
                                <div id="protected-head">Password-check</div>
                                <form>
                                    <input type="text" placeholder="Password: 1234" onChange={handleCode} onKeyPress={submitPassword} value={code}/>
                                </form>
                            </div>:null}
                        </Flip>

                        <Fade>
                            {entry?<div className="main-video-section-content">
                                <img className="priv-img" alt="vector" src={require('./assets/images-src/c.jpeg')}/>
                            </div>:null}
                        </Fade>
                    </div>
                    <div id="footer">
                        <Slide direction={"up"}>
                            <div id="footer-header">
                                <div id="footer-header-main">
                                    The End
                                </div>
                                <div id="footer-header-secondary">
                                    <br/>
                                    Wish I could fill a lorem ipsum text here XD
                                </div>
                            </div>
                        </Slide>
                        <div id="footer-flex">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;