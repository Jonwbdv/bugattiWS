
import {AiOutlineArrowRight} from 'react-icons/ai'

import {motion} from 'framer-motion'
import { carouselSlide, fadeIn } from '../../constants/motion'

interface HeroCarouselItemProps {
    videoUrl: string,
    mainText: string,
    subText?: string,
    discoverText: string
}

const HeroCarouselItem = ({videoUrl, mainText, subText, discoverText}: HeroCarouselItemProps) => {
    return (
        <motion.figure className="absolute flex flex-col w-full left-[0%] top-[0%] justify-top items-center" variants={carouselSlide} initial="hidden" animate="show" transition={{  
            type: 'tween',
            duration: 1,
            delay: 2,
            when: "beforeChildren",
            staggerChildren: 1
        }} exit="exit">
                <video className="z-[1] relative" width="100%" height="100%" autoPlay loop muted>
                    <source src={videoUrl} type="video/mp4"/>
                    Your browser does not support HTML5 Video.
                </video>

            <motion.h2 variants={fadeIn("Up")} transition={{
                type: "tween",
                duration: 0.5
            }} className="absolute z-[2] pt-[4em] text-[3rem] text-shadow" >{mainText}</motion.h2>
            
            <motion.p variants={fadeIn("Down")} transition={{
                type: "tween",
                duration: 0.5
            }} className="absolute z-[2] pt-[10em] text-[2.0rem] text-shadow">{subText}</motion.p>
            
            <motion.p variants={fadeIn("Down")} transition={{
                type: "tween",
                duration: 0.5
            }}  className="absolute z-[2] pt-[20em] text-[1.5rem] text-shadow hover:underline cursor-pointer text-red-500">{discoverText} <AiOutlineArrowRight className="inline text-red-500"/></motion.p>
        </motion.figure>
    )
}


export default HeroCarouselItem