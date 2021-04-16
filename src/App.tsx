import React from 'react';
import Headphones from "./headphones";
import MainPage from "./main-page";
import CountDown from './countdown';

const App: React.FC = () => {
    const [service, setService] = React.useState<string>("countdown")
    const [audio, setAudio] = React.useState<boolean>(false)
    function callService(service: string){
        setService(service)
    }
    if(service==='default'&&!audio){
        setTimeout(()=>{
            setAudio(true)
        },12000)
    }
    return(
        <div>
            {service==="countdown"?<CountDown call={callService}/>:null}
            {/* for watch again feature song reset put audio tag in headphone component */}
            {service==="default"?<Headphones call={callService}/>:null}
            {service==="main-page"?<MainPage call={callService}/>:null}
            {service==='countdown'?<audio id="kyun" src={require("./assets/kyun.mp3")} autoPlay loop/>
            :audio?<audio src={require("./assets/playdate.mp3")} autoPlay/>:null}
        </div>
    )
}    
export default App;