import React from 'react';
import "./stylesheets/loader.css";

const Loader = (props: any) => {
    return(
        <div>
            <div id="loader-main">
                {/* <div id="loader-line-1"></div>
                <div id="loader-line-2"></div>
                <div id="loader-line-3"></div>
                <div id="loader-line-4"></div> */}
                <div id="wait">
                    <div  id="wait-data">Loading</div>
                    <div id="dot-fam">
                        <div className="dot" id="dot-1">.</div>
                        <div className="dot" id="dot-2">.</div>
                        <div className="dot" id="dot-3">.</div>
                        <div className="dot" id="dot-4">.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader;