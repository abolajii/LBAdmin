/* eslint-disable react/prop-types */

const Tennis = ({ fill }) => {
  return (
    <div>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.49984 0.791016C4.69036 0.791016 0.791504 4.68987 0.791504 9.49935C0.791504 14.3088 4.69036 18.2077 9.49984 18.2077C14.3093 18.2077 18.2082 14.3088 18.2082 9.49935C18.2082 4.68987 14.3093 0.791016 9.49984 0.791016ZM12.0366 12.1273C13.1156 11.1139 14.6287 10.328 16.5833 10.2729C16.2264 13.5785 13.6087 16.2065 10.3077 16.5791C10.4128 14.5222 11.0246 13.0777 12.0366 12.1273ZM8.72261 16.5824C8.82971 14.2139 9.53629 12.3033 10.9527 10.9732C12.2952 9.71232 14.1852 8.74579 16.5793 8.68906C16.2052 5.38449 13.5706 2.76508 10.259 2.41432C10.1047 4.78497 9.42682 6.70404 8.12915 8.06767C6.80972 9.45408 4.85977 10.148 2.4164 10.2734C2.7746 13.589 5.40742 16.2228 8.72261 16.5824ZM8.67151 2.42198C8.51977 4.49911 7.92614 5.98421 6.98217 6.97617C6.05181 7.95375 4.57535 8.56408 2.42056 8.68767C2.79261 5.40678 5.39291 2.80157 8.67151 2.42198Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default Tennis;
