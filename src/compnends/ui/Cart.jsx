import React from 'react';
import { FaFlag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const Cart = ({players}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>

            {
                players.map((player) => {
                    console.log(player, 'player');
                    return <div className="card bg-base-100  shadow-sm">
                        <figure>
                            <img
                                src={player.playesImage}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body space-y-1">
                            <h2 className="card-title"><FaUser />{player.playesName}</h2>
                            <div className=" flex justify-between  items-center">
                                <div className="flex items-center gap-2">
                                    <FaFlag />
                                    <p>{player.playesJCountry}</p>
                                </div>
                                <button className='btn font-bold'>{player.playesType}</button>
                            </div>
                            <div className="divider"></div>

                            <h2 className='font-bold'>Reting: {player.rating}</h2>
                            <div className="flex justify-between font-bold">
                                <p>{player.battingStyle}</p>
                                <p className='text-right'>{player.bowlingStyle}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Price: {player.price}</p>
                                <button className=" btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                })
            }


        </div>
    );
};

export default Cart;