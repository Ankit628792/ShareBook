const initial = {
    user: null
}

const setUser = (state = initial , action) => {
    if(action.type === 'SET_USER' && action.user) {
        return state.user
    }
    return state
}

export default setUser