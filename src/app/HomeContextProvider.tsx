import { ReactNode, createContext } from "react";
import {useState} from 'react';


interface HomeContextType {
    activeTab: string, 
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

interface HomeContextProviderType {
    children: ReactNode
}

export const HomeContext = createContext<HomeContextType>({
    activeTab: "",
    setActiveTab: () => {}
})




const HomeContextProvider = ({children}: HomeContextProviderType) => {

    const [activeTab, setActiveTab] = useState("")

    return (
        <HomeContext.Provider value={{activeTab, setActiveTab}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider