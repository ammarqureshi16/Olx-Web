function reducer(state = { adds: [] }, action) {

    switch(action.type) {
        case 'ADD_USER': return { ...state, user: action.payload }
        case 'REMOVE_USER': return { ...state, user: null }
        // case 'SET_ADDS': return { ...state, ads: action.payload }
        default: return state
    }
}

export default reducer