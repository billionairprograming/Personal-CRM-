import React from "react";
import MainNav from "@/components/Organisms/MainNav";
import SideNav from "../components/Organisms/sidebar";
import Overview from "../components/Organisms/overview";

const HomePage = () => {
  return (
    <>
      <MainNav />
      <SideNav />
      <Overview title="All Entries" filter={() => true} />
    </>
  );
};

export default HomePage;
