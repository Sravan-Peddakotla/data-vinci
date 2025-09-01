import React, { useState } from "react";
import "./Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <button className="manuka-btn">Which Manuka is for me?</button>

            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <p>Shop</p>
                <p>Explore</p>
                <img src="logo.png" alt="logo" />
                <p>About</p>
                <p>Rewards</p>
                <p>Contact</p>
            </nav>

            {/* Icons */}
            <div className="icons">
                <span className="icon">👤</span>
                <span className="icon">🔍</span>
                <div className="cart">
                    🛒<span className="cart-badge">0</span>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
        </header>
    );
}
