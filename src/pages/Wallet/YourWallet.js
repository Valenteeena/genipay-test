import React from "react";
import { caret, searchIcon } from "../Homepage/Header";
import { eur, gbp, usd } from "../Homepage/WalletInfo";
import { SingleWal, YourWalletCont } from "./wallet.styles";

export const YourWallet = () => {
  const cardDetails = [
    {
      title: "Personal Account",
      currency: "USD",
      flag: usd,
      price: "$10,250.00",
      bg: "#FFF6E6",
      isDefault: true,
    },
    {
      title: "EUR Wallet",
      currency: "EUR",
      flag: eur,
      price: "€4000.53",
      bg: "#FBF1F0",
    },
    {
      title: "School fees",
      currency: "GBP",
      flag: gbp,
      price: "£50.00",
      bg: "#DDECEF",
    },
  ];

  return (
    <YourWalletCont>
      {" "}
      <div className="top">
        <h3>Your Wallet</h3>
        <button> Create New Wallet</button>
      </div>
      <div className="wallet-body">
        <div className="wallet-sidea">
          <aside>
            <div className="search">
              {searchIcon}
              <input type="text" placeholder="Search" />
            </div>

            <p>All {caret}</p>
          </aside>
          <div className="tabs">
            <p>Active (3)</p>
            <p>Inactive (2)</p>
            <p>Closed (0)</p>
          </div>
          <div className="wallet-list">
            {cardDetails.map((cd) => (
              <SingleWal default={cd.isDefault}>
                <span>{cd.flag}</span>
                <div>
                  <p>{cd.title}</p>
                  <i>{cd.currency}</i>
                </div>
                <div>
                  <h2>{cd.price}</h2>
                  {cd.isDefault && <p>Default</p>}
                </div>
              </SingleWal>
            ))}
          </div>
        </div>
        <div className="wallet-sideb">side b</div>
      </div>
    </YourWalletCont>
  );
};
