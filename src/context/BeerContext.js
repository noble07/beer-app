const { createContext, useState } = require("react");

const Context = createContext({})

export const BeerContextProvider = ({children}) => {
  const [beers, setBeers] = useState([])

  return (
    <Context.Provider value={{beers, setBeers}}>
      {children}
    </Context.Provider>
  )
}

export default Context