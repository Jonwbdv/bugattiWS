
import {motion} from 'framer-motion'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { scaleIn } from '../../constants/motion'


interface ShowcaseCardProps {
    imageUrl: string,
    mainText: string,
    locationText: string
}

const ShowcaseCard = ({imageUrl, mainText, locationText}: ShowcaseCardProps) => {

    return (
        <figure className='w-full h-full relative flex justify-center items-center overflow-hidden'>
            <motion.img variants={scaleIn} initial="small" whileHover="large" transition={{ type:"tween", 
            duration: 2
            }} src={imageUrl} alt="Accompanying Image" width="400" height="400" className='w-full h-full'/>
            <figcaption className='text-white absolute text-shadow pb-[8em] z-[2]'>
                <p>{locationText}</p>
            </figcaption>
            <h2 className='text-white absolute text-shadow text-[1.5rem] z-[2]'>{mainText}</h2>
            <p className='text-red-500 absolute text-shadow pt-[15em] z-[2] cursor-pointer hover:underline'>Discover More <AiOutlineArrowRight className="inline text-red-500"/></p>
        </figure>
    )

}


export default ShowcaseCard