import NewsCarouselItem from "./NewsCarouselItem"
import { carouselSlide } from "../../constants/motion"

import { newsContentHome } from "../../constants/newsContentHome"

import {useState} from 'react'
import { AnimatePresence } from "framer-motion"

import {MdOutlineArrowBackIos} from 'react-icons/md'
import {MdOutlineArrowForwardIos} from 'react-icons/md'


const NewsCarousel = () => {
    const [activeCarouselItemNews, setActiveCarouselItemNews] = useState<string>("item-1")




    return (
        <section id="news-carousel-home" className="relative h-[75vh] w-full flex justify-center items-center bg-[#ffffff] pt-[10em]">
            
            <div className="h-full w-full flex justify-center items-center">
                <MdOutlineArrowBackIos style={{color: "#000000", position: "relative", right: "45%"}} className="cursor-pointer"/>
                <NewsCarouselItem key={newsContentHome[0].id} imageUrl={newsContentHome[0].imageUrl} headline={newsContentHome[0].headline} contentText={newsContentHome[0].contentText} dateString={newsContentHome[0].dateString}/>
                <MdOutlineArrowForwardIos style={{color: "#000000",  position: "relative", left: "45%"}} className="cursor-pointer"/>

            </div>
        </section>
    )
}


export default NewsCarousel