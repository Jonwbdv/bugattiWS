import {AiOutlineArrowRight} from 'react-icons/ai'
import {motion} from 'framer-motion'

import { carouselSlide } from '../../constants/motion'


interface NewsCarouselItemProps {
    imageUrl: string,
    headline: string,
    contentText: string,
    dateString: string,
    caption: string
}


const NewsCarouselItem = ({imageUrl, headline, contentText, dateString, caption} : NewsCarouselItemProps) => {
    
    
    return (
        <motion.figure variants={carouselSlide} initial="hidden" animate="show" exit="exit" className="absolute h-[70%] gap-[2em] w-[80%] flex flex-row justify-center items-center items-center shadow-2xl">
            
            <section id="text-content" className="flex flex-col w-[50%]">
                <h2 className="text-red-500 font-bold text-[2rem] pb-[2em]">{headline}</h2>
                <p className="text-black font-semibold pb-[4em]">{contentText}</p>
                <p className="text-black font-semibold">{dateString}</p>
            </section>

            <section id="supplimentary content" className="flex text-center gap-[4rem] flex-col w-[40%]">
                <div id="figure-and-caption">
                    <img src={imageUrl} alt="News image" width={100} height={100} className="w-full h-auto"/>
                    <figcaption className='text-black text-[0.7rem] pt-2'>{caption}</figcaption>
                </div>

                <p className='text-red-500 cursor-pointer hover:underline'>Discover More <AiOutlineArrowRight className="inline text-red-500"/></p>
            </section>

        </motion.figure>
    )
}


export default NewsCarouselItem