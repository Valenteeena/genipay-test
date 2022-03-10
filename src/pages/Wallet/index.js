import React from "react";
import Header from "../Homepage/Header";
import Navigation from "../Homepage/Navigation";
import { WalletPageContainer } from "./wallet.styles";
import { YourWallet } from "./YourWallet";

const Wallet = () => {
  return (
    <WalletPageContainer>
      <Navigation />
      <section className="side2">
        <Header title="Wallet" />
        <section className="body">
          <YourWallet />
        </section>
      </section>
    </WalletPageContainer>
  );
};

export default Wallet;
