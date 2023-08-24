
import {AiOutlineArrowRight} from 'react-icons/ai'

import {motion} from 'framer-motion'
import { carouselSlide } from '../../constants/motion'

interface HeroCarouselItemProps {
    videoUrl: string,
    mainText: string,
    subText?: string,
    discoverText: string
}

const HeroCarouselItem = ({videoUrl, mainText, subText, discoverText}: HeroCarouselItemProps) => {
    return (
        <motion.figure className="flex flex-col justify-center items-center" variants={carouselSlide} initial="hidden" animate="show" transition={{  
            type: 'tween',
            duration: 1,
            delay: 2
        }} exit="exit">
            <video className="z-[1] relative" width="100%" height="100%" autoPlay loop muted>
                <source src={videoUrl} type="video/mp4"/>
                Your browser does not support HTML5 Video.
            </video>
            <h2 className="absolute z-[2] pb-[4em] text-[3rem] text-shadow" >{mainText}</h2>
            <p className="absolute z-[2] pt-[1em] text-[2.0rem] text-shadow">{subText}</p>
            <p className="absolute z-[2] pt-[20em] text-[1.5rem] text-shadow hover:underline">{discoverText} <AiOutlineArrowRight className="inline"/></p>
        </motion.figure>
    )
}


export default HeroCarouselItem