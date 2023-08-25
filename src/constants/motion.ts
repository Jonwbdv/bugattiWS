export const carouselSlide = {
    hidden: {
        x: "-100%"       
    },
    show: {
        x: 0
    },


    exit: {
        x: "100%"
    },
}

export const fadeIn = (direction: string) => ( {
    hidden: {
        opacity: 0,
        x: direction === "Left" ? 100 : direction === "Right" ? -100 : 0,
        y: direction === "Up" ? -100 : direction === "Down" ? 100 : 0,
    },
    show: {
        opacity: 1,
        y: 0,
        x: 0
    }
})


export const slideIn = (direction: string) => ({
    hidden: {
        x: direction === "Left" ? 100 : direction === "Right" ? -100 : 0,
        y: direction === "Up" ? -100 : direction === "Down" ? 100 : 0,
    },
    show: {
        y: 0,
        x: 0
    }
  
})


export const scaleIn = {
    small: {
        scale: 1
    },
    large: {
        scale: 1.5
    }
}