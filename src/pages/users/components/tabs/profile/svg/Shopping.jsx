/* eslint-disable react/prop-types */

const Shopping = ({ fill }) => {
  return (
    <div>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 2.37435C8.40693 2.37435 7.52083 3.26045 7.52083 4.35352V4.74935H11.4792V4.35352C11.4792 3.26045 10.5931 2.37435 9.5 2.37435ZM13.0625 4.74935V4.35352C13.0625 2.386 11.4675 0.791016 9.5 0.791016C7.53248 0.791016 5.9375 2.386 5.9375 4.35352V4.74935H3.95833C3.08388 4.74935 2.375 5.45823 2.375 6.33268V16.6244C2.375 17.4988 3.08388 18.2077 3.95833 18.2077H15.0417C15.9161 18.2077 16.625 17.4988 16.625 16.6244V6.33268C16.625 5.45823 15.9161 4.74935 15.0417 4.74935H13.0625ZM11.4792 6.33268V7.12435C11.4792 7.56158 11.8336 7.91602 12.2708 7.91602C12.7081 7.91602 13.0625 7.56158 13.0625 7.12435V6.33268H15.0417V16.6244H3.95833V6.33268H5.9375V7.12435C5.9375 7.56158 6.29194 7.91602 6.72917 7.91602C7.16639 7.91602 7.52083 7.56158 7.52083 7.12435V6.33268H11.4792Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default Shopping;
