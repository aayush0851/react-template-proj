import React from "react";
import Loader from "./loader";
import "./stylesheets/headphones.css";

const Headphones = (props: any) => {
    const [services, setServices] = React.useState<string>('step-1');
    const [loader, setloader] = React.useState<boolean>(true);
    function pass(){
        props.call("main-page")
    }
    if(loader){
        setTimeout(()=>{
            setloader(false)
        },12000)
    }
    if(services==="step-1"&&!loader){
        setTimeout(()=>{
            setServices("step-2")
        }, 4000);
    }
    if(services==="step-2"){
        setTimeout(()=>{
            setServices("step-3")
        }, 4000);
    }
    if(services==="step-3"){
        setTimeout(()=>{
            setServices("step-4")
        }, 4000);
    }
    if(services==="step-4"){
        setTimeout(()=>{
            setServices("next")
        }, 4000);
    }
    return(
        <div id="head-sky">
            {loader?<Loader/>:null}
            <div id="hold">
                <div id="headphones-symbol">
                    {services!=="next"?<img className="img-here" alt="test" height="auto" width="180px" src={
                        services==="step-1"?require('./assets/images-src/a.jpeg'):
                        services==="step-2"?require('./assets/images-src/b.jpeg'):
                        services==="step-3"?require('./assets/images-src/c.jpeg'):
                        services==="step-4"?require('./assets/images-src/a.jpeg'):
                        require('./assets/images-src/b.jpeg')}/>:<img className="img-yes" alt="test" height="auto" width="180px" src={
                            require('./assets/images-src/c.jpeg')}/>}
                </div>
                {!loader?<div className="advice-headphone" id={services==="next"?"stop":"advice-headphones-next"}>
                    {services==="step-1"?"Please plug-in your headphones for best experience":
                    services==="step-2"?"Fasten your Seatbelts":
                    services==="step-3"?"It's a roller coaster":
                    services==="step-4"?"Let's Go...":
                    <div id="go-button" onClick={pass}>Click me!</div>}
                </div>:null}

            </div>
        </div>
    )
}

export default Headphones;