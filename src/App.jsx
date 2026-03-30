
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './compnends/HomePage/Banner/Banner'
import Players from './compnends/HomePage/Playeers/Players'
import NavBar from './compnends/Navbar/NavBar'
  import { ToastContainer } from 'react-toastify';


const fetchPlayer = async () => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {

  const playersPromise = fetchPlayer()
  const [Coin, setCoin] = useState(50000)
  
  return (
    <>
      <NavBar Coin={Coin}></NavBar>
      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Players playersPromise={playersPromise} Coin={Coin} setCoin={setCoin}></Players>

      </Suspense>

    {/*  react ToastContainer */}
      <ToastContainer />
    </>
  )
}

export default App
