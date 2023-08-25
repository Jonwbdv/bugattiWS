import {motion} from 'framer-motion'
import {slideIn} from '../constants/motion'

const Navbar = () => {
    return (
        <motion.nav variants={slideIn("Up")} initial="hidden" animate="show" className="pt-[2em] w-full h-fit fixed z-[2] text-shadow" transition={{
            type: "tween",
            duration: 1
        }}>
            <ul className="flex">
                <li className="pl-[3em] pr-[3em] hover:underline text-lg cursor-pointer">
                    Vehicles
                </li>

                <li className="hover:underline text-lg pr-[3em] cursor-pointer">News</li>
                <li className="hover:underline text-lg cursor-pointer">Merch Store</li>


                <li className="mx-auto relative bottom-[0.5em] left-[1.5em]"><img src="/logo/bugattiLogo.png" alt="Bugatti Logo" width={100} height={200}/></li>

                <li className="pr-[3rem] hover:underline text-lg cursor-pointer">About Us</li>


                <li className="pr-[3rem] hover:underline text-lg cursor-pointer">Find Dealerships</li>

                <li className="pr-[3rem] hover:underline text-lg cursor-pointer">Login</li>

            </ul>
            
        </motion.nav>
    )
}


export default Navbar