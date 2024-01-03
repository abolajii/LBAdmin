/* eslint-disable react/prop-types */

const Music = ({ fill }) => {
  return (
    <div>
      <svg
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7195 0.960999C15.9099 1.11112 16.021 1.34022 16.021 1.58269V4.78269C16.0212 4.79393 16.0212 4.80514 16.021 4.81631V13.616C16.021 14.8402 15.0286 15.8327 13.8043 15.8327H12.2606C11.0582 15.8327 10.0835 14.858 10.0835 13.6556C10.0835 12.4532 11.0582 11.4785 12.2606 11.4785H14.4377V5.79982L6.12516 7.76789V15.1994C6.12516 16.4236 5.13272 17.416 3.9085 17.416H2.76058C1.55821 17.416 0.583496 16.4413 0.583496 15.2389C0.583496 14.0366 1.55821 13.0619 2.76058 13.0619H4.54183V7.1579C4.54159 7.14667 4.54159 7.13547 4.54183 7.12431V3.95769C4.54183 3.59163 4.79279 3.27331 5.14874 3.18788L15.0446 0.812883C15.2804 0.756297 15.5291 0.810879 15.7195 0.960999ZM6.12516 6.14079L14.4377 4.17272V2.58684L6.12516 4.58184V6.14079ZM4.54183 14.6452H2.76058C2.43266 14.6452 2.16683 14.911 2.16683 15.2389C2.16683 15.5669 2.43266 15.8327 2.76058 15.8327H3.9085C4.25827 15.8327 4.54183 15.5491 4.54183 15.1994V14.6452ZM14.4377 13.0619H12.2606C11.9327 13.0619 11.6668 13.3277 11.6668 13.6556C11.6668 13.9835 11.9327 14.2494 12.2606 14.2494H13.8043C14.1541 14.2494 14.4377 13.9658 14.4377 13.616V13.0619Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default Music;
