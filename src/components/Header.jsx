import React from 'react';

export default function Header() {
    return (
        <>
            <header className="header-content">
                <img src="imgs/echo (3).svg" alt="" className="logo-img" />
                <input 
                    type="search" 
                    id="campoPesquisa" 
                    className="input-search" 
                    placeholder="Como podemos te ajudar ?" 
                />
                <nav className="navigation">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                    <button className="btnLogin-popup">Login</button>
                </nav>
            </header>
        </>
    );
}
