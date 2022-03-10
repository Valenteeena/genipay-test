import React from "react";
import {
  BiCreditCard,
  BiDollar,
  BiLink,
  BiTransferAlt,
  BiWallet,
} from "react-icons/bi";
import { FaMoneyBill, FaTicketAlt } from "react-icons/fa";
import { LinksContainer, SingleLinks } from "../../styles/Homepage.styles";

const QuickLinks = () => {
  const Links = [
    {
      title: "Add new Wallet",
      color: "#F97316",
      logo: <BiWallet />,
    },
    {
      title: "Add new Card",
      color: "#005061",
      logo: <BiCreditCard />,
    },

    {
      title: "Balance Exchange",
      color: "#F59E0B",
      logo: <BiDollar />,
    },

    {
      title: "Transfer to Account",
      color: "#5EEAD4",
      logo: <BiTransferAlt />,
    },

    {
      title: "Generate Voucher",
      color: "#9333EA",
      logo: <FaTicketAlt />,
    },

    {
      title: "Mobile Money",
      color: "#FFCB00",
      logo: <FaMoneyBill />,
    },
    {
      title: "Payment Link",
      color: "#F43F5E",
      logo: <BiLink />,
    },
  ];
  return (
    <LinksContainer>
      <div className="top">
        <h4>Quick Links</h4>
        <p>Your frequently used actions for easy access.</p>
      </div>

      <div className="links-list">
        {Links.map((lnk) => (
          <SingleLinks bg={lnk.color}>
            <div>{lnk.logo}</div>
            <p>{lnk.title}</p>
          </SingleLinks>
        ))}
      </div>
    </LinksContainer>
  );
};

export default QuickLinks;
