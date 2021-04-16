import React, { Fragment } from 'react';
import "./stylesheets/countdown.css";
// import axios from 'axios';
import {Bounce, Zoom} from "react-awesome-reveal";

const CountDown = (props: any) => {
    // const [day, setDay] = React.useState<number>();
    // const [hr, setHr] = React.useState<number>();
    // const [min, setMin] = React.useState<number>();
    const [sec, setSec] = React.useState<number>(11);

    // COUNTDOWN LIVE

    // React.useEffect(()=>{
    //     axios.get("https://worldtimeapi.org/api/timezone/Asia/Kolkata.json").then((resp)=>{
    //         if(resp.data.datetime){
    //             const targetTime= new Date(2020, 11, 11, 0, 0, 0).getTime();
    //             const date = new Date(resp.data.datetime).getTime()
    //             const difference = targetTime-date
    //             setDiffTime(difference);
    //             console
    //         }
    //     }).catch((e)=>{
    //         console.log(e)
    //     })
    // },[])

    const interval = 1000;

    // if(typeof(day)==='number'&&typeof(hr)==='number'&&typeof(min)==='number'&&typeof(sec)==='number'&&typeof(diffTime)==='number'){
    //     if(diffTime<=0) {
    //         props.call("default");
    //     }
    // }

    // if(diffTime){
    //     setTimeout(()=> {
    //         const newDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    //         const newHrs = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         const newMins = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    //         const newSec = Math.floor((diffTime % (1000 * 60)) / 1000);
    //         const aSec = diffTime-1000;
    //         setDiffTime(aSec);
    //         setDay(newDay);
    //         setHr(newHrs)
    //         setMin(newMins);
    //         setSec(newSec);
    //     }, interval)
    // }
    setTimeout(()=> {
        var newSec :number= sec;
        newSec--;
        setSec(newSec--);
    }, interval);

    if(!sec){
        props.call("default");
    }
    return(
        <Fragment>
            <div id="parent-countdown">
                <div id="countdown">
                    <Zoom>
                        <div id="base-text" onClick={() => {props.call("default")}}>The &nbsp;Hype &nbsp;Is &nbsp;Real</div>
                    </Zoom>
                    <Bounce>
                        {typeof(sec)==='number'?<div id="block-holder">
                            {/* <div className="blocks">
                                <span className="numerics">{day<10?'0'+day:day}</span>
                                <span className="alpha">days</span>
                            </div>
                            <div className="blocks">
                                <span className="numerics">{hr<10?'0'+hr:hr}</span>
                                <span className="alpha">hours</span>
                            </div>
                            <div className="blocks">
                                <span className="numerics">{min<10?'0'+min:min}</span>
                                <span className="alpha">minutes</span>
                            </div> */}
                            <div className="blocks">
                                <span className="numerics">{sec<10?'0'+sec:sec}</span>
                                {/* <span className="alpha">seconds</span> */}
                            </div>
                        </div>:null}
                    </Bounce>
                    <div>
                        <Bounce>
                            <div className="note-ctdown">
                                Note: 
                                <br/>
                                In your browser's setting change sound preference of this website to ALLOW and reload the website
                                for a better experience.
                            </div>
                        </Bounce>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CountDown;