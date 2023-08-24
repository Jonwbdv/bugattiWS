
import { heroCarouselItemInfo } from "../../constants/heroContent"

import HeroCarouselItem from "./HeroCarouselItem"

import {motion, AnimatePresence} from 'framer-motion'

import { useState } from "react"




const HeroCarousel = () => {

  const [activeCarouselItem, setActiveCarouselItem] = useState<string>("item-1")

  let updateCarouselItem = () => {
    setTimeout(() => {
      if(Number(activeCarouselItem.slice(-1)) == heroCarouselItemInfo.length){
        setActiveCarouselItem("item-1")
        return
      }
      else{
        let nextCarouselItemNumber = Number(activeCarouselItem.slice(-1)) + 1
        let nextCarouselItem = activeCarouselItem.slice(0, activeCarouselItem.length - 1) + nextCarouselItemNumber.toString()
        setActiveCarouselItem(nextCarouselItem)
        return
      }
    },20000)

  }
  updateCarouselItem()
  
  let carouselItemToRender: {
    id: string;
    videoUrl: string;
    mainText: string;
    subText: string;
    discoverText: string;
} = heroCarouselItemInfo[0]
  
  if(activeCarouselItem === "item-1"){
    carouselItemToRender = heroCarouselItemInfo[0]
  }
  else if(activeCarouselItem === "item-2"){
    carouselItemToRender = heroCarouselItemInfo[1]
  }

  console.log(activeCarouselItem, carouselItemToRender.videoUrl)
  return (
    <section id="hero-carousel" >
      <AnimatePresence>
        <HeroCarouselItem key={carouselItemToRender.id} videoUrl={carouselItemToRender.videoUrl} mainText={carouselItemToRender.mainText} subText={carouselItemToRender.subText} discoverText={carouselItemToRender.discoverText}/>
      </AnimatePresence>
    </section>
  )  
}


export default HeroCarousel