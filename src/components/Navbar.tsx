import {motion} from 'framer-motion'
import {slideIn} from '../constants/motion'

const Navbar = () => {
    return (
        <motion.nav variants={slideIn("Up")} initial="hidden" animate="show" className="pt-[2em] w-full h-fit fixed z-[2] text-shadow" transition={{
            type: "tween",
            duration: 1
        }}>
            <ul className="flex">
                <li className="pl-[3em] pr-[3em] hover:underline text-lg">
                    Vehicles
                </li>

                <li className="hover:underline text-lg pr-[3em]">News</li>
                <li className="hover:underline text-lg">Merch Store</li>


                <li className="mx-auto relative bottom-[0.5em] left-[3em]"><img src="/logo/bugattiLogo.png" alt="Bugatti Logo" width={100} height={200}/></li>

                <li className="pr-[3rem] hover:underline text-lg">About Us</li>


                <li className="pr-[3rem] hover:underline text-lg">Find Dealerships</li>

                <li className="pr-[3rem] hover:underline text-lg">Login</li>

            </ul>
            
        </motion.nav>
    )
}


export default Navbar