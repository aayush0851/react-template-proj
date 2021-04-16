import React from 'react';
import "./stylesheets/hey-screen.css";

const HiBoonie = (props: any) => {
    // setTimeout(()=>{
    //     props.call("main-page")
    // },4000);
    return(
        <div>
            <div id="hey-svg-holder">
                <svg id="hey-svg" width="328" height="60" viewBox="0 0 328 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* h */}
                    <path d="M40.9814 6.81601V57H34.4294V34.248H8.86945V57H2.31744V6.81601H8.86945V28.848H34.4294V6.81601H40.9814Z" stroke="white" stroke-width="3" mask="url(#path-1-outside-1)"/>
                    {/* i */}
                    <path d="M55.553 11.136C54.305 11.136 53.249 10.704 52.385 9.84001C51.521 8.97601 51.089 7.92001 51.089 6.67201C51.089 5.42401 51.521 4.36801 52.385 3.50401C53.249 2.64001 54.305 2.20801 55.553 2.20801C56.753 2.20801 57.761 2.64001 58.577 3.50401C59.441 4.36801 59.873 5.42401 59.873 6.67201C59.873 7.92001 59.441 8.97601 58.577 9.84001C57.761 10.704 56.753 11.136 55.553 11.136ZM58.721 17.544V57H52.169V17.544H58.721Z" stroke="white" stroke-width="3" mask="url(#path-1-outside-1)"/>
                    {/* b */}
                    <path d="M114.211 31.152C116.035 31.44 117.691 32.184 119.179 33.384C120.715 34.584 121.915 36.072 122.779 37.848C123.691 39.624 124.147 41.52 124.147 43.536C124.147 46.08 123.499 48.384 122.203 50.448C120.907 52.464 119.011 54.072 116.515 55.272C114.067 56.424 111.163 57 107.803 57H89.0831V6.81601H107.083C110.491 6.81601 113.395 7.39201 115.795 8.54401C118.195 9.64801 119.995 11.16 121.195 13.08C122.395 15 122.995 17.16 122.995 19.56C122.995 22.536 122.179 25.008 120.547 26.976C118.963 28.896 116.851 30.288 114.211 31.152ZM95.6351 28.488H106.651C109.723 28.488 112.099 27.768 113.779 26.328C115.459 24.888 116.299 22.896 116.299 20.352C116.299 17.808 115.459 15.816 113.779 14.376C112.099 12.936 109.675 12.216 106.507 12.216H95.6351V28.488ZM107.227 51.6C110.491 51.6 113.035 50.832 114.859 49.296C116.683 47.76 117.595 45.624 117.595 42.888C117.595 40.104 116.635 37.92 114.715 36.336C112.795 34.704 110.227 33.888 107.011 33.888H95.6351V51.6H107.227Z" stroke="white" stroke-width="3" mask="url(#path-1-outside-1)"/>
                    {/* o */}
                    <path d="M150.447 57.648C146.751 57.648 143.391 56.808 140.367 55.128C137.391 53.448 135.039 51.072 133.311 48C131.631 44.88 130.791 41.28 130.791 37.2C130.791 33.168 131.655 29.616 133.383 26.544C135.159 23.424 137.559 21.048 140.583 19.416C143.607 17.736 146.991 16.896 150.735 16.896C154.479 16.896 157.863 17.736 160.887 19.416C163.911 21.048 166.287 23.4 168.015 26.472C169.791 29.544 170.679 33.12 170.679 37.2C170.679 41.28 169.767 44.88 167.943 48C166.167 51.072 163.743 53.448 160.671 55.128C157.599 56.808 154.191 57.648 150.447 57.648ZM150.447 51.888C152.799 51.888 155.007 51.336 157.071 50.232C159.135 49.128 160.791 47.472 162.039 45.264C163.335 43.056 163.983 40.368 163.983 37.2C163.983 34.032 163.359 31.344 162.111 29.136C160.863 26.928 159.231 25.296 157.215 24.24C155.199 23.136 153.015 22.584 150.663 22.584C148.263 22.584 146.055 23.136 144.039 24.24C142.071 25.296 140.487 26.928 139.287 29.136C138.087 31.344 137.487 34.032 137.487 37.2C137.487 40.416 138.063 43.128 139.215 45.336C140.415 47.544 141.999 49.2 143.967 50.304C145.935 51.36 148.095 51.888 150.447 51.888Z" stroke="white" stroke-width="3" mask="url(#path-1-outside-1)"/>
                    {/* o */}
                    <path d="M196.502 57.648C192.806 57.648 189.446 56.808 186.422 55.128C183.446 53.448 181.094 51.072 179.366 48C177.686 44.88 176.846 41.28 176.846 37.2C176.846 33.168 177.71 29.616 179.438 26.544C181.214 23.424 183.614 21.048 186.638 19.416C189.662 17.736 193.046 16.896 196.79 16.896C200.534 16.896 203.918 17.736 206.942 19.416C209.966 21.048 212.342 23.4 214.07 26.472C215.846 29.544 216.734 33.12 216.734 37.2C216.734 41.28 215.822 44.88 213.998 48C212.222 51.072 209.798 53.448 206.726 55.128C203.654 56.808 200.246 57.648 196.502 57.648ZM196.502 51.888C198.854 51.888 201.062 51.336 203.126 50.232C205.19 49.128 206.846 47.472 208.094 45.264C209.39 43.056 210.038 40.368 210.038 37.2C210.038 34.032 209.414 31.344 208.166 29.136C206.918 26.928 205.286 25.296 203.27 24.24C201.254 23.136 199.07 22.584 196.718 22.584C194.318 22.584 192.11 23.136 190.094 24.24C188.126 25.296 186.542 26.928 185.342 29.136C184.142 31.344 183.542 34.032 183.542 37.2C183.542 40.416 184.118 43.128 185.27 45.336C186.47 47.544 188.054 49.2 190.022 50.304C191.99 51.36 194.15 51.888 196.502 51.888Z" stroke="white" stroke-width="3" mask="url(#path-1-outside-1)"/>
                    {/* n */}
                    <path d="M244.573 16.824C249.373 16.824 253.261 18.288 256.237 21.216C259.213 24.096 260.701 28.272 260.701 33.744V57H254.221V34.68C254.221 30.744 253.237 27.744 251.269 25.68C249.301 23.568 246.613 22.512 243.205 22.512C239.749 22.512 236.989 23.592 234.925 25.752C232.909 27.912 231.901 31.056 231.901 35.184V57H225.349V17.544H231.901V23.16C233.197 21.144 234.949 19.584 237.157 18.48C239.413 17.376 241.885 16.824 244.573 16.824Z" stroke="white" stroke-width="3" mask="url(#path-1-outside-1)"/>
                    {/* i */}
                    <path d="M274.787 11.136C273.539 11.136 272.483 10.704 271.619 9.84001C270.755 8.97601 270.323 7.92001 270.323 6.67201C270.323 5.42401 270.755 4.36801 271.619 3.50401C272.483 2.64001 273.539 2.20801 274.787 2.20801C275.987 2.20801 276.995 2.64001 277.811 3.50401C278.675 4.36801 279.107 5.42401 279.107 6.67201C279.107 7.92001 278.675 8.97601 277.811 9.84001C276.995 10.704 275.987 11.136 274.787 11.136ZM277.955 17.544V57H271.403V17.544H277.955Z" stroke="white" stroke-width="3" mask="url(#path-1-outside-1)"/>
                    {/* e */}
                    <path d="M325.122 35.76C325.122 37.008 325.05 38.328 324.906 39.72H293.37C293.61 43.608 294.93 46.656 297.33 48.864C299.778 51.024 302.73 52.104 306.186 52.104C309.018 52.104 311.37 51.456 313.242 50.16C315.162 48.816 316.506 47.04 317.274 44.832H324.33C323.274 48.624 321.162 51.72 317.994 54.12C314.826 56.472 310.89 57.648 306.186 57.648C302.442 57.648 299.082 56.808 296.106 55.128C293.178 53.448 290.874 51.072 289.194 48C287.514 44.88 286.674 41.28 286.674 37.2C286.674 33.12 287.49 29.544 289.122 26.472C290.754 23.4 293.034 21.048 295.962 19.416C298.938 17.736 302.346 16.896 306.186 16.896C309.93 16.896 313.242 17.712 316.122 19.344C319.002 20.976 321.21 23.232 322.746 26.112C324.33 28.944 325.122 32.16 325.122 35.76ZM318.354 34.392C318.354 31.896 317.802 29.76 316.698 27.984C315.594 26.16 314.082 24.792 312.162 23.88C310.29 22.92 308.202 22.44 305.898 22.44C302.586 22.44 299.754 23.496 297.402 25.608C295.098 27.72 293.778 30.648 293.442 34.392H318.354Z" stroke="white" stroke-width="3" mask="url(#path-1-outside-1)"/>
                </svg>
            </div>
        </div>
    )
}

export default HiBoonie;