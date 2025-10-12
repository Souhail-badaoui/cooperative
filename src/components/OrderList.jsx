import { createContext, useState, useContext } from "react";

const CommandeContext = createContext();

export function CommandeProvider({ children }) {
  const [commandes, setCommandes] = useState([]);
  return (
    <CommandeContext.Provider value={{ commandes, setCommandes }}>
      {children}
    </CommandeContext.Provider>
  );
}

export const useCommandes = () => useContext(CommandeContext);