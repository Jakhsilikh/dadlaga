import React from "react";
import "./Cards.css";
import "../App";
const Cards = () => {
  return (
    <div className="container parent">
      <div className="Box"></div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <img
            style="height: 210; width: 180px; object-fit:contain; vertical-align: middle;"
            src="/logo.png"
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a style="padding-left: auto;"></a>
                <a class="nav-link active" aria-current="page" href="#">
                  Нүүр
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Cards;
