
import React, { createContext, useContext, useReducer } from 'react'

const SET_MENUS = 'SET_MENUS';
const SET_DATA_TO_DISPLAY = 'SET_DATA_TO_DISPLAY'
const SET_INITIAL_DATA_TO_DISPLAY = 'SET_INITIAL_DATA_TO_DISPLAY';
const DATA_TO_PAGINATE = 'DATA_TO_PAGINATE';
const SET_OPEN_MODAL = 'SET_OPEN_MODAL';
const SET_CLOSE_MODAL = 'SET_CLOSE_MODAL';

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
    dataToPaginate: [],
    menuDetails: {},
}
const reducer = (state, action) => {
    switch(action.type) {
        case SET_MENUS : {
            return {...state, menus:action.payload}
        }
        case SET_DATA_TO_DISPLAY : {
            return {...state, dataToPaginate:action.payload}
        }
        case SET_INITIAL_DATA_TO_DISPLAY : {
            return {...state, dataToDisplay:action.payload}
        }
        case DATA_TO_PAGINATE : {
            return {...state, dataToPaginate:action.payload}
        }
        case SET_OPEN_MODAL : {
            return {...state, openModal:action.payload}
        }
        case SET_CLOSE_MODAL : {
            return {...state, openModal:action.payload}
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