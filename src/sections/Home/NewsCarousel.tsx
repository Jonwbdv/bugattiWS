import NewsCarouselItem from "./NewsCarouselItem"
import { carouselSlide } from "../../constants/motion"

import { newsContentHome } from "../../constants/newsContentHome"

import {useState} from 'react'
import { AnimatePresence} from "framer-motion"

import {MdOutlineArrowBackIos} from 'react-icons/md'
import {MdOutlineArrowForwardIos} from 'react-icons/md'


const NewsCarousel = () => {
    const [activeCarouselItemNews, setActiveCarouselItemNews] = useState<string>("item-1")

    const updateActiveCarouselItemNews = (e:React.MouseEvent<HTMLElement>, carouselInput: string) => {
        console.log("clicked", e, carouselInput)

        let nextNewsItemId = 1

        if(carouselInput === "Backward"){
            if( activeCarouselItemNews.slice(-1) === "1" ){
                nextNewsItemId = newsContentHome.length 
            }
            else {
                nextNewsItemId = Number(activeCarouselItemNews.slice(-1)) - 1
            }
        }

        else if(carouselInput === "Forward"){
            if( Number(activeCarouselItemNews.slice(-1)) === newsContentHome.length ){
                nextNewsItemId = 1
            }
            else{
                nextNewsItemId = Number(activeCarouselItemNews.slice(-1)) + 1
            }
        }
        String(2)
        let finalState = activeCarouselItemNews.slice(0, (activeCarouselItemNews.length - 1) ) + nextNewsItemId.toString()
        setActiveCarouselItemNews(finalState)
    }

    return (
        <section id="news-carousel-home" className="relative h-[75vh] w-full flex pb-20 justify-center items-center bg-[#ffffff] pt-[10em]">
            
            <div className="h-full w-full flex justify-center items-center">
                <MdOutlineArrowBackIos style={{color: "#000000", position: "relative", right: "45%"}} className="cursor-pointer"  onClick={(e: React.MouseEvent<HTMLElement>) => updateActiveCarouselItemNews(e, "Backward")}/>
                <AnimatePresence>
                
                    {activeCarouselItemNews === "item-1" && <NewsCarouselItem key={newsContentHome[0].id} imageUrl={newsContentHome[0].imageUrl} headline={newsContentHome[0].headline} contentText={newsContentHome[0].contentText} dateString={newsContentHome[0].dateString} caption={newsContentHome[0].caption}/>}
                    {activeCarouselItemNews === "item-2" && <NewsCarouselItem key={newsContentHome[1].id} imageUrl={newsContentHome[1].imageUrl} headline={newsContentHome[1].headline} contentText={newsContentHome[1].contentText} dateString={newsContentHome[1].dateString} caption={newsContentHome[1].caption}/>}
                    {activeCarouselItemNews === "item-3" && <NewsCarouselItem key={newsContentHome[2].id} imageUrl={newsContentHome[2].imageUrl} headline={newsContentHome[2].headline} contentText={newsContentHome[2].contentText} dateString={newsContentHome[2].dateString} caption={newsContentHome[2].caption}/>}

                </AnimatePresence>
                <MdOutlineArrowForwardIos style={{color: "#000000",  position: "relative", left: "45%"}} className="cursor-pointer" onClick={(e: React.MouseEvent<HTMLElement>) => updateActiveCarouselItemNews(e, "Forward")}/>

            </div>

        </section>
    )
}


export default NewsCarousel