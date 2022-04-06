
import React, { createContext, useContext, useReducer } from 'react'

const AppContext = createContext()

const initialState = {
    navLinks: [
        {
            id: 0,
            sectionName: 'A Propos',
            offSetY: 0,
            path: 'about'
        },
        {
            id:1,
            sectionName: 'Nos Recettes',
            offSetY: 0,
            path: 'menu'
        },
        {
            id: 2,
            sectionName: 'Témoignages',
            offSetY: 0,
            path: 'testimonials'
        },
        {
            id: 3,
            sectionName: 'Emplacement',
            offSetY: 0,
            path: 'location'
        }
    ]
}
const reducer = (state, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={{ state, dispatch}}>
            { children }
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    const { state, dispatch } = useContext(AppContext)
    return { state, dispatch}
}

export { ContextProvider, useAppContext}