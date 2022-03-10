import React from "react";
import { HomepageContainer } from "../../styles/Homepage.styles";
import ActivityChart from "./ActivityChart";
import Header from "./Header";
import Navigation from "./Navigation";
import WalletInfo from "./WalletInfo";
import QuickLinks from "./QuickLinks";

const HomePage = () => {
  return (
    <HomepageContainer>
      <Navigation />
      <section className="side2">
        <Header title="Welcome, Huss Smith" />
        <section className="body">
          <WalletInfo />
          <QuickLinks />
          <ActivityChart />
        </section>
      </section>
    </HomepageContainer>
  );
};

export default HomePage;
