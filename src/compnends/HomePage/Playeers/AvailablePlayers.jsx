
import { FaFlag } from "react-icons/fa";
import Cart from '../../ui/Cart';

const AvailablePlayers = ({ players }) => {
    console.log(players);
    return (
        <Cart players ={players}></Cart>
    );
};

export default AvailablePlayers;