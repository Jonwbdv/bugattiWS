import { homeHeroInfo } from "../../constants/heroContent"

interface HeroInfo {
        videoURL: string;
        mainText: string;
}

const Hero = () => {
    let heroInfo: HeroInfo  = homeHeroInfo()
    return (
            <figure className="flex flex-col justify-center items-center">
                <video className="z-[1] relative" width="100%" height="100%" autoPlay loop muted>
                    <source src="/videos/HomeHeroVideo.mp4" type="video/mp4"/>
                    Your browser does not support HTML5 Video.
                </video>
                <h1 className="absolute z-[2] pb-[4em] text-[3rem] text-shadow" >Celebrating more than 110 years of incomparable engineering</h1>
                <p className="absolute z-[2] pt-[2em] text-lg text-shadow">"If it is comparable, it is no longer bugatti" - Founder Ettore Bugatti</p>
                <p className="absolute z-[2] pt-[40em] text-md text-shadow">View Car Lineup --</p>

            </figure>


    )
}


export default Hero