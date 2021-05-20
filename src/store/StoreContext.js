import React, { createContext, useState } from 'react'

export const StoreContext = createContext()

export const StoreProvider = ({children}) => {
    // eslint-disable-next-line
    const [ changes, setChanges ] = useState({
      is: false,
      items: ''
    });
    
    const setModalContext = (item) => {
      setChanges({
        items: item,
        is: !changes.is
      })
    }
    
    const openModalContextData = {
      changes,
      setModalContext
    }


  return <StoreContext.Provider value={ openModalContextData }>{ children }</StoreContext.Provider>
}