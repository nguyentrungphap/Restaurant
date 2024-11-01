import React, { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

type Props = {
  children: ReactNode;
};

const DashboardLayout = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <Menu />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
};

export default DashboardLayout;
