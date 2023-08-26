import {motion} from 'framer-motion'
import {slideIn} from '../constants/motion'

import { useContext } from 'react'

import { HomeContext } from '../app/HomeContextProvider'

import VehiclesNav from './VehiclesNav/VehiclesNav'

const Navbar = () => {

    const {activeTab, setActiveTab} = useContext(HomeContext)
    return (
        <>
                {(activeTab != "Vehicles") && (<motion.nav variants={slideIn("Up")} initial="hidden" animate="show" className="pt-[2em] w-full h-fit fixed z-[2] text-shadow" transition={{
            type: "tween",
            duration: 1
        }}>
            <ul className="flex">
                <li className="pl-[3em] pr-[3em] hover:underline text-lg cursor-pointer" onClick={() => setActiveTab("Vehicles")}>
                    Vehicles
                </li>

                <li className="hover:underline text-lg pr-[3em] cursor-pointer" onClick={() => setActiveTab("News")}>News</li>
                <li className="hover:underline text-lg cursor-pointer" onClick={() => setActiveTab("Merch Store")}>Merch Store</li>


                <li className="mx-auto relative bottom-[0.5em] left-[1.5em]"><img src="/logo/bugattiLogo.png" alt="Bugatti Logo" width={100} height={200}/></li>

                <li className="pr-[3rem] hover:underline text-lg cursor-pointer" onClick={() => setActiveTab("About Us")}>About Us</li>


                <li className="pr-[3rem] hover:underline text-lg cursor-pointer" onClick={() => setActiveTab("Find Dealerships")}>Find Dealerships</li>

                <li className="pr-[3rem] hover:underline text-lg cursor-pointer" onClick={() => setActiveTab("Login")}>Login</li>

            </ul>
            
        </motion.nav>
)}
        {<VehiclesNav/>}
        
        </>
    
    
    
    
    
    
        )
}



export default Navbar