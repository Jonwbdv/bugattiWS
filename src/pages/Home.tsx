import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import HeroCarousel from "../sections/Home/HeroCarousel"
import NewsCarousel from "../sections/Home/NewsCarousel"
import Showcase from "../sections/Home/Showcase"

const Home = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <HeroCarousel/>
                
                <Showcase/>

                <NewsCarousel/>
            </main>

            <footer>
                <Footer/>
            </footer>
            
        </>
    )
}



export default Home