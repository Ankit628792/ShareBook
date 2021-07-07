const initial = {
    userSession: null
}

const userReducer = (state = initial, action) => {
    switch (action.type) {
        case 'SET_USER':
            localStorage.setItem('userSession', JSON.stringify(action.user))
            return {
                userSession: action.user
            }

        case 'REMOVE_USER':
            localStorage.setItem('userSession', null)
            return {
                userSession: null
            }
        case 'RESTORE_USER':
            const restoreUser = action.localUser;
            return {
                userSession: restoreUser
            }

        default:
            return state
    }
}

export default userReducer