import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import HeroCarousel from "../sections/Home/HeroCarousel"
import NewsCarousel from "../sections/Home/NewsCarousel"
import Showcase from "../sections/Home/Showcase"

import {useContext} from 'react'
import { HomeContext } from "../app/HomeContextProvider"

const Home = () => {
    const {activeTab, setActiveTab} = useContext(HomeContext)


    return (
        <>
            
                <header>
                    <Navbar/>
                </header>
                <section id="home-wrapper" className="h-full" style={{ overflowY: activeTab === "Vehicles" ? "hidden" : "auto", height: activeTab === "Vehicles" ? "100vh" : "100%", pointerEvents: activeTab ? 'none': 'auto'}}>
                    <main>
                        <HeroCarousel/>
                        
                        <Showcase/>

                        <NewsCarousel/>
                    </main>

                    <footer>
                        <Footer/>
                    </footer>
                 </section>
            
        </>
    )
}



export default Home