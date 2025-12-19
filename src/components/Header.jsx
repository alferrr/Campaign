import React from "react";
import "../App.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#problem">The Problem</a>
          </li>
          <li>
            <a href="#how">How to Spot Fake News</a>
          </li>
          <li>
            <a href="#res">Resources</a>
          </li>
          <li>
            <a href="#take" className="take">
              Take Action
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
