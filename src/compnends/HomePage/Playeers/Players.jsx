import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPleyers from './SelectedPleyers';

const Players = ({ playersPromise  ,setCoin ,Coin}) => {
    // console.log(playersPromise);
    const players = use(playersPromise)
    
    // console.log(players);
    const [selectedType, setSelectedType] = useState("available");
   
    console.log(selectedType, "selectedType");
    const [selectedPleyers , setSelectedPlayers] = useState([])
    return (
        <div className='container mx-auto '>

            <div className="flex justify-between my-10">
                {selectedType=="available"? <p className='font-bold text-2xl'>Available Players</p>: <p className='font-bold text-2xl'>Selected Players ({selectedPleyers.length}/{players.length})</p>}
                <div className=" flex gap-[2px] font-bold ">
                    <button
                        className={`btn rounded-xl rounded-r-none ${selectedType === "available" ? 'bg-[#E7FE29] text-black' : 'bg-gray-200 text-black'}`}
                        onClick={() => setSelectedType("available")}
                    >
                        Available
                    </button>

                    <button
                        className={`btn rounded-xl rounded-l-none ${selectedType === "selected" ? 'bg-[#E7FE29] text-black' : 'bg-gray-200 text-black'}`}
                        onClick={() => setSelectedType("selected")}
                    >
                        Selected ({selectedPleyers.length})
                    </button>

                </div>
            </div>
            { selectedType==="available"?( 
            <AvailablePlayers 
            setSelectedPlayers={setSelectedPlayers}
            selectedPleyers={selectedPleyers}
            players={players} 
            Coin={Coin} 
            setCoin={setCoin}
            ></AvailablePlayers>) : (<SelectedPleyers setSelectedPlayers={setSelectedPlayers} selectedPleyers={selectedPleyers}></SelectedPleyers>)}

            

        </div>
    );
};

export default Players;
