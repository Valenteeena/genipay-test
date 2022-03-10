import React from "react";
import ActivityChart from "./ActivityChart";
import QuickLinks from "./QuickLinks";
import WalletInfo from "./WalletInfo";

const DashboardContent = () => {
  return (
    <section className="body">
      <WalletInfo />
      <QuickLinks />
      <ActivityChart />
    </section>
  );
};

export default DashboardContent;
