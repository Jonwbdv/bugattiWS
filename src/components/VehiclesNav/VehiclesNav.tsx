import {motion, AnimatePresence} from 'framer-motion'

import {GrClose} from 'react-icons/gr'

import { vehiclesNavVariants } from '../../constants/motion'

import {useContext, useState} from 'react'

import { HomeContext } from '../../app/HomeContextProvider'



const VehiclesNav = () => {

    const {activeTab, setActiveTab} = useContext(HomeContext)

    console.log(activeTab)

    const [selectedTabColumn1, setSelectedTabColumn1] = useState<string>("")
    const [selectedTabColumn2, setSelectedTabColumn2] = useState<string>("")

   

    return (
    <>
        <AnimatePresence>
            {(activeTab === "Vehicles") && 
                <motion.section key={"vehicle-nav-wrapper"} id="vehicle-nav-wrapper" className="w-full h-[100vh] bg-[#242424] fixed z-[3] flex" variants={vehiclesNavVariants} initial="hide" animate="show" exit="exit" transition={{
                type: "tween",
                duration: 1
                }}>
                    <section id='nav-close-and-badge' className='flex flex-col items-center w-[10%] bg-[#333333] h-100'>
                        <GrClose size={30} onClick={() => setActiveTab('')} className="cursor-pointer m-5"/>
                    </section>
                    <section id='model-selection-outer' className='flex flex-col items-center justify-center w-[20%] h-100 bg-[#242424]'>
                        <p key="option-1" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' onMouseEnter={() => setSelectedTabColumn1("option-1")} style={selectedTabColumn1 === "option-1" ? {opacity: 1} : {}}>Buyer Models</p>
                        <p key="option-2" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem]' onMouseEnter={() => setSelectedTabColumn1("option-2")} style={selectedTabColumn1 === "option-2" ? {opacity: 1} : {}}>Past Models</p>
                    </section>
                    <section id='model-selection-inner' className='flex flex-col items-center justify-center w-[20%] h-100 bg-[#1B1B1E]' >
                        {selectedTabColumn1 === "option-1" && (<>                        
                        <p key="option-1" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-1" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-1")}>Bugatti Veyron</p>
                        <p key="option-2" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-2" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-2")}>Bugatti Chiron</p>
                        <p key="option-3" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-3" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-3")}>Bugatti Mistral Roadster</p>
                        <p key="option-4" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-4" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-4")}>Bugatti Divo</p>
                        <p key="option-5" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-5" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-5")}>Bugatti Centodieci</p>
                        <p key="option-6" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-6" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-6")}>Bugatti La Voiture Noire</p>
                        </>)
                        }
                        {selectedTabColumn1 === "option-2" && (<>                        
                        <p key="option-1" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-1" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-1")}>Bugatti EB110</p>
                        <p key="option-2" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-2" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-2")}>Bugatti Centenary-1</p>
                        <p key="option-3" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-3" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-3")}>Bugatti Type 101</p>
                        <p key="option-4" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-4" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-4")}>Bugatti Type 15</p>
                        <p key="option-5" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-5" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-5")}>Bugatti Type 252</p>
                        <p key="option-6" className='text-white opacity-50 cursor-pointer font-semibold text-[1.3rem] pb-[0.5em]' style={selectedTabColumn2 === "option-6" ? {opacity: 1} : {}} onMouseEnter={() => setSelectedTabColumn2("option-6")}>Bugatti Type 35A</p>
                        </>)
                        }
                    </section>
                    <section id='car-preview' className='flex flex-col items-center w-[50%] h-100' >
                        <img src="/logo/bugattiLogo.png" alt="Bugatti Logo" width={50} height={100} className='pt-5 pb-10'/>
                        
                        <figure className='flex flex-col w-full h-full justify-center items-center'>
                        <p className='pb-5'>Veyron</p>

                            <img src="/pictures/navbar/BugattiVeyron.png" alt="Car Preview" className='w-full'/>

                        </figure>

                    </section>
                </motion.section>}
        </AnimatePresence>
    </>
    )
}

export default VehiclesNav