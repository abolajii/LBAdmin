/* eslint-disable react/prop-types */
// import React from "react";

const Home = ({ fill }) => {
  if (fill) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_3107_9375)">
          <path
            d="M19.0003 8.70977L13.6673 4.56177C13.1993 4.19768 12.6232 4 12.0303 4C11.4373 4 10.8613 4.19768 10.3933 4.56177L5.05927 8.70977C4.73872 8.95905 4.47937 9.2783 4.30103 9.64312C4.12269 10.0079 4.03008 10.4087 4.03027 10.8148V18.0148C4.03027 18.5452 4.24099 19.0539 4.61606 19.429C4.99113 19.8041 5.49984 20.0148 6.03027 20.0148H18.0303C18.5607 20.0148 19.0694 19.8041 19.4445 19.429C19.8196 19.0539 20.0303 18.5452 20.0303 18.0148V10.8148C20.0303 9.99177 19.6503 9.21477 19.0003 8.70977Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 15C13.79 16.333 10.208 16.333 8 15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_3107_9375">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_3107_9671)">
        <path
          d="M19.0003 8.70977L13.6673 4.56177C13.1993 4.19768 12.6232 4 12.0303 4C11.4373 4 10.8613 4.19768 10.3933 4.56177L5.05927 8.70977C4.73872 8.95905 4.47937 9.2783 4.30103 9.64312C4.12269 10.0079 4.03008 10.4087 4.03027 10.8148V18.0148C4.03027 18.5452 4.24099 19.0539 4.61606 19.429C4.99113 19.8041 5.49984 20.0148 6.03027 20.0148H18.0303C18.5607 20.0148 19.0694 19.8041 19.4445 19.429C19.8196 19.0539 20.0303 18.5452 20.0303 18.0148V10.8148C20.0303 9.99177 19.6503 9.21477 19.0003 8.70977Z"
          stroke="#424243"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 15C13.79 16.333 10.208 16.333 8 15"
          stroke="#424243"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3107_9671">
          <rect width="24" height="24" fill="black" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Home;
