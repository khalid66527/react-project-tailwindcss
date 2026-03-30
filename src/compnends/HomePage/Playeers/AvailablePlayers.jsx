
import { FaFlag } from "react-icons/fa";
import Cart from '../../ui/Cart';


const AvailablePlayers = ({ players ,setCoin ,Coin ,selectedPleyers , setSelectedPlayers}) => {
    // console.log(players);
    return (
        <Cart players ={players}Coin={Coin} setCoin={setCoin} selectedPleyers={selectedPleyers}setSelectedPlayers={setSelectedPlayers} ></Cart>
    );
};

export default AvailablePlayers;