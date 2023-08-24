
import {AiOutlineArrowRight} from 'react-icons/ai'


const Hero = () => {

    return (
            <figure className="flex flex-col justify-center items-center">
                <video className="z-[1] relative" width="100%" height="100%" autoPlay loop muted>
                    <source src="/videos/HomeHeroVideo1.mp4" type="video/mp4"/>
                    Your browser does not support HTML5 Video.
                </video>
                <h1 className="absolute z-[2] pb-[4em] text-[3rem] text-shadow" >CELEBRATING 110+ YEARS OF INCOMPARABLE ENGINEERING</h1>
                <p className="absolute z-[2] pt-[1em] text-[2.0rem] text-shadow">"If it is comparable, it is no longer bugatti" - Founder Ettore Bugatti</p>
                <p className="absolute z-[2] pt-[20em] text-[1.5rem] text-shadow hover:underline">Discover Our Car Lineup <AiOutlineArrowRight className="inline"/></p>

            </figure>


    )
}


export default Hero