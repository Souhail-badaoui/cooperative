import { createContext, useContext } from "react";


const DojoContexte = createContext();

export const Dojo = ({children})=>{
    const [nom , setNom] = useState([]);
    return(
    <DojoContexte.Provider value={{nom ,setNom}}>
        {children}
    </DojoContexte.Provider>
    )
}
export const useNom = ()=> useContext(DojoContexte);
