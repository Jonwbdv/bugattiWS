import {AiOutlineArrowRight} from 'react-icons/ai'


interface NewsCarouselItemProps {
    imageUrl: string,
    headline: string,
    contentText: string,
    dateString: string
}


const NewsCarouselItem = ({imageUrl, headline, contentText, dateString} : NewsCarouselItemProps) => {
    return (
        <figure className="absolute h-[70%] gap-[2em] w-[80%] flex flex-row justify-center items-center items-center shadow-2xl">
            
            <div id="text-content" className="flex flex-col w-[50%]">
                <h2 className="text-black font-bold text-[2rem] pb-[2em]">{headline}</h2>
                <p className="text-black font-semibold pb-[4em]">{contentText}</p>
                <p className="text-black font-semibold">{dateString}</p>
            </div>

            <div id="supplimentary content" className="flex text-center gap-[5rem] flex-col w-[40%]">
                <img src={imageUrl} alt="News image" width={100} height={100} className="w-full"/>
                <p className='text-red-500 cursor-pointer hover:underline'>Discover More <AiOutlineArrowRight className="inline text-red-500"/></p>
            </div>

        </figure>
    )
}


export default NewsCarouselItem