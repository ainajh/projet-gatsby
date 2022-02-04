import React from "react";
import Navbar from "./Navbar";
import "../sass/global.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>copyright 2022 by Aina JH</p>
      </footer>
    </div>
  );
}
