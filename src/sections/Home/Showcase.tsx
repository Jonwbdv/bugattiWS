import ShowcaseCard from "./ShowcaseCard"
import { showcaseContent } from "../../constants/showcaseContentHome"

const Showcase = () => {
    return (
        <section id="home-showcase" className="h-[100vh] w-full grid grid-cols-2 auto-rows-fr bg-[#990000]">

        {showcaseContent.map((item, index) => (
            <ShowcaseCard key={item.id} imageUrl={item.imageUrl} mainText={item.mainText} locationText={item.locationText}/>
        ))}
        
        </section>
    )
}


export default Showcase