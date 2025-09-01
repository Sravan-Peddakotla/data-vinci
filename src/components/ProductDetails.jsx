import React from "react";
import "./ProductDetails.css";

export default function ProductDetails() {
  return (
    <div className="product-details">
      {/* Rewards */}
      <div className="rewards">
        <span className="color-icon">
            <img src="loader.png" alt="laoder" width={30} />
        </span>
        <span>
          Colourdub members earn up to{" "}
          <span className="reward-badge">56</span> reward points when buy this
          item
        </span>
      </div>

      <div className="delivery">
        <div>
          <p className="title">Delivery</p>
          <p>FREE DELIVERY ON ORDERS OVER $30</p>
        </div>
        <div>
          <p className="title">Estimated Delivery Date:</p>
          <p>Jun 9 - Jun 13</p>
        </div>
      </div>

      <div className="afterpay">
        or 4 interest-free payments of <strong>$13.97</strong> with
        <span className="afterpay-icon">💲</span>
        <span className="info-icon">ℹ️</span>
      </div>

      <div className="umf">
        <p className="title">UMF™ Scale</p>
        <div className="umf-scale">
          <span>UMF™ 10+</span>
          <span>UMF™ 15+</span>
          <span>UMF™ 20+</span>
          <span className="highlight">UMF™ 24+</span>
          <span>UMF™ 26+</span>
          <span>UMF™ 28+</span>
          <span>UMF™ 30+</span>
        </div>
        <div className="umf-bar">
          <div className="color red"></div>
          <div className="color orange"></div>
          <div className="color pink"></div>
          <div className="color green"></div>
          <div className="color blue"></div>
          <div className="color purple"></div>
        </div>
      </div>

      <div className="taste">
        <p className="title">Taste Profile</p>
        <div className="taste-bar">
          <span>Clean & Intense</span>
          <input type="range" min="0" max="10" defaultValue="5" />
          <span>Bold & Intense</span>
        </div>
      </div>
    </div>
  );
}
