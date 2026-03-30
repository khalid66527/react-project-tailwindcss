import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";

const SelectedPleyers = ({ selectedPleyers, setSelectedPlayers  ,Coin , setCoin}) => {
    console.log(selectedPleyers, "selectedPleyers");

    const handleDeleteSelectedPlayer = (player) => {
        console.log(selectedPleyers, "selectedPleyers");

        const filtersPlayers = selectedPleyers.filter(
            (p) => p.playesName !== player.playesName
        );

        console.log(filtersPlayers, "filtersPlayers");
        
        setSelectedPlayers(filtersPlayers);
        setCoin( Coin + player.price);
    };

    return (
        <div>
            {
              selectedPleyers.length ==0? 
              <div className="">
                <h1 className='font-bold text-3xl text-center mb-2'>No players selected yet</h1>
                <p className='text-xl text-center'>Go to Acailaclr tab to select players </p>
              </div>
              : 
               selectedPleyers.map((player, index) => {
                    return (
                        <div
                            key={index}
                            className="flex gap-4 justify-between items-center p-10 rounded-2xl border mb-3"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    className="w-auto h-20  rounded-md"
                                    src={player.playesImage}
                                    alt={player.playesName}
                                />
                                <div>
                                    <h2 className="text-lg font-bold flex items-center gap-2">
                                        <FaUser /> {player.playesName}
                                    </h2>
                                    <p>{player.playesType}</p>
                                </div>
                            </div>

                            <button className="text-3xl text-pink-500" onClick={() => handleDeleteSelectedPlayer(player)}>
                                <MdDelete />
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default SelectedPleyers;