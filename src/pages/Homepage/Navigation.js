import React, { useState } from "react";
import { BsEyeFill, BsGridFill } from "react-icons/bs";
import { BiCreditCard, BiPurchaseTagAlt, BiWalletAlt } from "react-icons/bi";
import { IoIosWallet } from "react-icons/io";
import { FaDollarSign, FaUserFriends } from "react-icons/fa";
import "../../styles/navigation.css";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import { Buttons, Card } from "../../styles/Homepage.styles";
const Navigation = () => {
  const topics = [
    {
      top: "Dashboard",
      route: "/",
      icon: <BsGridFill />,
      className: ".overview",
    },

    {
      top: "Wallet",
      route: "/wallet",
      icon: <BiWalletAlt />,
      className: ".inventory",
    },

    {
      top: "Cards",
      route: "/dashboard",
      icon: <BiCreditCard />,
      className: ".orders",
    },

    {
      top: "FX Center",
      route: "/dashboard",
      icon: <FaDollarSign />,
      className: ".invoice",
    },
    {
      top: "FBeneficiaries",
      route: "/dashboard",
      icon: <FaUserFriends />,
      className: ".invoice",
    },
    {
      top: "Perks",
      route: "/dashboard",
      icon: <BiPurchaseTagAlt />,
      className: ".invoice",
    },
  ];

  const [toggled, setToggled] = useState(false);
  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  return (
    <ProSidebar
      style={{
        // height: "100%",
        backgroundColor: "#FCFCFD",
        position: "sticky",
        top: "0",
      }}
      width="22%"
      breakPoint="md"
      onToggle={handleToggleSidebar}
      collapsed={toggled}
    >
      <Menu iconShape="circle">
        <SidebarHeader>
          <img
            src="/whiteLogo.svg"
            alt="logo"
            style={{ marginTop: "30px", marginBottom: "30px" }}
          />

          <Card>
            <div>
              <span>
                <IoIosWallet />
              </span>
              <div>
                <p>Wallet Balance</p>
                <b>$15,001.00</b>
              </div>
              <span>
                <BsEyeFill />
              </span>
            </div>

            <div>
              <span>{star}</span>
              <div>
                <p>Awarded points</p>
                <b>35</b>
              </div>
              <span>
                <BsEyeFill />
              </span>
            </div>
            <Buttons>
              <button>Pay-in</button>
              <button>Pay-Out</button>
            </Buttons>
          </Card>
        </SidebarHeader>
        {topics.map((tp) => (
          <MenuItem icon={tp.icon}>
            <a href={tp.route}>{tp.top}</a>
            {/* {tp.top}
        <NavLink to={tp.route} /> */}
          </MenuItem>
        ))}
        <SidebarFooter>
          <Card white>
            <div>
              <img src="/announcement.svg" alt="invite" />
              <div>
                <b>Refer and earn</b>
                <p>Use the below link to invite friends</p>
              </div>
            </div>
            <button>Invite Friends</button>
          </Card>
        </SidebarFooter>
      </Menu>
    </ProSidebar>
  );
};

export default Navigation;
const star = (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.82665 11.2083C3.89999 10.8817 3.76665 10.415 3.53332 10.1817L1.91332 8.56167C1.40665 8.055 1.20665 7.515 1.35332 7.04833C1.50665 6.58167 1.97999 6.26167 2.68665 6.14167L4.76665 5.795C5.06665 5.74167 5.43332 5.475 5.57332 5.20167L6.71999 2.90167C7.05332 2.24167 7.50665 1.875 7.99999 1.875C8.49332 1.875 8.94665 2.24167 9.27999 2.90167L10.4267 5.20167C10.5133 5.375 10.6933 5.54167 10.8867 5.655L3.70665 12.835C3.61332 12.9283 3.45332 12.8417 3.47999 12.7083L3.82665 11.2083Z"
      fill="#F59E0B"
    />
    <path
      d="M12.4667 10.1803C12.2267 10.4203 12.0933 10.8803 12.1733 11.207L12.6333 13.2136C12.8267 14.047 12.7067 14.6736 12.2933 14.9736C12.1267 15.0936 11.9267 15.1536 11.6933 15.1536C11.3533 15.1536 10.9533 15.027 10.5133 14.767L8.56 13.607C8.25334 13.427 7.74667 13.427 7.44 13.607L5.48667 14.767C4.74667 15.2003 4.11334 15.2736 3.70667 14.9736C3.55334 14.8603 3.44 14.707 3.36667 14.507L11.4733 6.4003C11.78 6.09363 12.2133 5.95363 12.6333 6.02696L13.3067 6.1403C14.0133 6.2603 14.4867 6.5803 14.64 7.04696C14.7867 7.51363 14.5867 8.05363 14.08 8.5603L12.4667 10.1803Z"
      fill="#F59E0B"
    />
  </svg>
);
