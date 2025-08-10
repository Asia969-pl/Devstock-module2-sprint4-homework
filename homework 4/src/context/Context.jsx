import { createContext, useState } from 'react'

export const Context = createContext(null)//obiekt


export const ContextProvider = ({ children }) => {//komponent wykorzystujący obiekt 
  const [page, setPage] = useState(1)
  const [openModal, setOpenModal] = useState(false)

  const toggleModal =() =>{
    setOpenModal(prev =>!prev)
    console.log(openModal)
  }
  
  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Context.Provider value={{page, setPage, handleChange, openModal,toggleModal, setOpenModal}}>
      {children} 
    </Context.Provider>
  )
}
