
import React, { createContext, useContext, useReducer } from 'react'

const SET_MENUS = 'SET_MENUS';
const SET_DATA_TO_DISPLAY = 'SET_DATA_TO_DISPLAY'
const SET_INITIAL_DATA_TO_DISPLAY = 'SET_INITIAL_DATA_TO_DISPLAY';
const DATA_TO_PAGINATE = 'DATA_TO_PAGINATE';

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
    ],
    menus: {},
    dataToDisplay: [],
    dataToDisplayLength:0,
    dataToPaginate: []
}
const reducer = (state, action) => {
    switch(action.type) {
        case SET_MENUS : {
            return {...state, menus:action.payload}
        }
        case SET_DATA_TO_DISPLAY : {
            const selectedFilterKeys = action.payload;
            const dataToDisplay = Object.entries(state.menus).reduce((menu, [menuName, menuContents]) => {
                const isKeySelected = selectedFilterKeys.find(key => key?.includes(menuName))
                if(isKeySelected) {
                    return [...menu, ...menuContents]
                }
                return [...menu]
            },[])
            return {...state, dataToDisplay, dataToPaginate:dataToDisplay}
        }
        case SET_INITIAL_DATA_TO_DISPLAY : {
            return {...state, dataToDisplay:action.payload}
        }
        case DATA_TO_PAGINATE : {
            return {...state, dataToPaginate:action.payload}
        }
        default: return {...state};
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