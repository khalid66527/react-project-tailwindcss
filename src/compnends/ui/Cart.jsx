import React, { useState } from 'react';
import { FaFlag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';
const Cart = ({ players ,setCoin ,Coin ,selectedPleyers , setSelectedPlayers}) => {

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>

            {
                players.map((player) => {
                    const [isSelected, setIsSelected ] = useState(false);
                    console.log(player.price);


                    const handleChoosePlayer=() =>{
                        let newCoin = Coin - player.price
                        if(newCoin > 0){
                            setCoin(Coin - player.price);
                            
                        }
                        else{
                            toast.error('Not Enough Coin To Purchase this Player')
                            return;
                        }
                        toast(`${player.playesName} is Selected`)
                        
                        setIsSelected(true);
                        setSelectedPlayers([...selectedPleyers, player])
                        
                        
                        
                    }
                    return (
                        <div  className="card bg-base-100  shadow-sm">
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
                                    <button
                                        className="btn"
                                        onClick={handleChoosePlayer}
                                        disabled={isSelected ? true: false}
                                    >
                                        {isSelected ? "Selected" : "Buy Now"}
                                    </button>
                                </div>
                            </div>
                        </div>)
                })
            }


        </div>
    );
};

export default Cart;