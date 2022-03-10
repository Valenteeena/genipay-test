import React from "react";
import { BsBell } from "react-icons/bs";
import { HeaderCont } from "../../styles/Homepage.styles";

const Header = ({ title }) => {
  return (
    <HeaderCont>
      <h1>{title ? title : "Welcome, Huss Smith"}</h1>
      <div className="search">
        {searchIcon}
        <input type="text" placeholder="Search" />
      </div>

      <div className="planted">
        {green}
        <p>0 planted</p>
      </div>
      <div className="notification">
        <BsBell />
      </div>
      <div className="profile">
        <img src="/user.svg" alt="user" />
        <div>
          <p>Verified</p>
          <b>Huss Smith</b>
        </div>
        {caret}
      </div>
    </HeaderCont>
  );
};

export default Header;
export const searchIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.66671 14.0007C11.1645 14.0007 14 11.1651 14 7.66732C14 4.16951 11.1645 1.33398 7.66671 1.33398C4.1689 1.33398 1.33337 4.16951 1.33337 7.66732C1.33337 11.1651 4.1689 14.0007 7.66671 14.0007Z"
      stroke="#55676B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6667 14.6673L13.3334 13.334"
      stroke="#55676B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const green = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1387_945)">
      <path
        d="M11.7063 13.1426V14.1079C11.7063 14.44 11.5314 14.7555 11.2362 14.9077C10.8948 15.0837 10.4875 15.0174 10.2202 14.7503L9.58849 14.1184L8.99438 14.7125L10.4699 16.1879C10.6342 16.3524 10.7248 16.5709 10.7248 16.8035V23.2353C10.7248 23.6576 11.0672 24 11.4895 24H12.7633C13.1856 24 13.528 23.6576 13.528 23.2353V17.7706C13.528 17.5381 13.6185 17.3195 13.7829 17.155L15.0058 15.9322L14.4117 15.3381L14.0326 15.7172C13.7654 15.9841 13.3587 16.0503 13.0173 15.875C12.7217 15.7233 12.5465 15.408 12.5465 15.0759V13.1426H11.7063Z"
        fill="#4D7C0F"
      />
      <path
        d="M23.3883 9.87604C23.3883 7.06877 21.2108 4.76065 18.4561 4.55232C17.4947 1.84323 14.9222 0 11.9999 0C9.07755 0 6.50511 1.84323 5.54373 4.5524C2.78899 4.76073 0.61145 7.06885 0.61145 9.87612C0.61145 11.3084 1.17921 12.6621 2.1847 13.661C2.14422 13.9097 2.12385 14.1613 2.12385 14.4131C2.12385 16.9997 4.22818 19.104 6.81468 19.104H9.60183V16.908L8.02188 15.3281C7.85751 15.1638 7.76684 14.9451 7.76684 14.7125C7.76684 14.4798 7.85743 14.2612 8.02204 14.0968L8.97274 13.146C9.31222 12.8067 9.86446 12.8067 10.2039 13.146L10.5833 13.5255V12.8903C10.5833 12.4103 10.9739 12.0197 11.4539 12.0197H12.7986C13.2786 12.0197 13.6691 12.4102 13.6691 12.8903V14.4925L13.7959 14.3657C13.9603 14.2013 14.179 14.1107 14.4115 14.1107C14.644 14.1106 14.8627 14.2012 15.0271 14.3657L15.9779 15.3164C15.9779 15.3164 15.9779 15.3164 15.978 15.3164C16.3174 15.6559 16.3174 16.2082 15.978 16.5476L14.6506 17.875V19.104H17.1852C19.7717 19.104 21.876 16.9997 21.876 14.4131C21.876 14.1613 21.8557 13.9097 21.8152 13.661C22.8206 12.662 23.3883 11.3084 23.3883 9.87604Z"
        fill="#15803D"
      />
    </g>
    <defs>
      <clipPath id="clip0_1387_945">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const caret = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 6.75L9 11.25L13.5 6.75"
      stroke="#55676B"
      stroke-width="2.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
