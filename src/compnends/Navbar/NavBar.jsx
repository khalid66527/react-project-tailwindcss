import React from 'react';
import CurrencyImg from "../../assets/Currency.png"

const NavBar = ({Coin}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="btn font-bold text-xl flex items-center gap-3">
                    <p>{Coin} Coin</p>
                    <img src={CurrencyImg} alt="" />
                </button>
            </div>
        </div>
    );
};

export default NavBar;