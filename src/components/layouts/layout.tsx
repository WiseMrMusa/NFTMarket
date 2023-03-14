// import Navbar from "./navbar";
// import Footer from "./footer";
import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import { ConnectKitButton } from "connectkit";
import { Header } from '../Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className=" mx-48 mt-12">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
