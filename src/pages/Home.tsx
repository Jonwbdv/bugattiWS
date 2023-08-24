import Navbar from "../components/Navbar"
import Hero from "../sections/Home/Hero"

import HeroCarousel from "../sections/Home/HeroCarousel"

const Home = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <HeroCarousel/>

                <div style={{background: "#333333"}}>A</div>
            
            </main>
            
        </>
    )
}



export default Home