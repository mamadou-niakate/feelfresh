
import React, { createContext, useContext, useReducer } from 'react'

const SET_MENU_POSITION = 'SET_MENU_POSITION';
const SET_TESTIMONIALS_POSITION = 'SET_TESTIMONIALS_POSITION';
const SET_LOCATION_POSITION = 'SET_LOCATION_POSITION';
const SET_ABOUT_POSITION = 'SET_ABOUT_POSITION';

const AppContext = createContext()

const initialState = [
    {
        id: 0,
        sectionName: 'À Propos',
        offsetTop: 0,
    },
    {
        id:1,
        sectionName: 'menu',
        offsetTop: 0,
    },
    {
        id: 2,
        sectionName: 'location',
        offsetTop: 0,
    },
    {
        id: 3,
        sectionName: 'testimonials',
    }
]

const reducer = (state, action) => {
    switch(action.type) {
        case SET_MENU_POSITION :
        {       
            const newState = state.map((section) => {
                if(section.sectionName.toLowerCase().includes('menu')) {
                    const sectionEdited = {...section, offsetTop: action.payload}
                    return sectionEdited
                }
                return section
            })
            return newState;
        }
        case SET_TESTIMONIALS_POSITION :
        {
            const newState = state.map((section) => {
                if(section.sectionName.toLowerCase().includes('testimonials')) {
                    const sectionEdited = {...section, offsetTop: action.payload}
                    return sectionEdited
                }
                return section
            })
            return newState;
        }
        case SET_LOCATION_POSITION :
        {
            const newState = state.map((section) => {
                if(section.sectionName.toLowerCase().includes('location')) {
                    const sectionEdited = {...section, offsetTop: action.payload}
                    return sectionEdited
                }
                return section
            })
            return newState;
        }
        case SET_ABOUT_POSITION :
        {
            const newState = state.map((section) => {
                if(section.sectionName.toLowerCase().includes('about')) {
                    const sectionEdited = {...section, offsetTop: action.payload}
                    return sectionEdited
                }
                return section
            })
            return newState;
        }
        default: return state;
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