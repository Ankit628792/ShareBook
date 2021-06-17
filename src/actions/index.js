//todo
export const addToBookmark = (bookData) => {
    return {
        type: 'ADD_TO_BOOKMARK',
        bookData,
    }
}
export const removeFromBookmark = (id) => {
    return {
        type: 'REMOVE_FROM_BOOKMARK',
        id
    }
}
export const removeAllBookmark = () => {
    return {
        type: 'REMOVE_ALL_BOOKMARK'
    }
}
export const setUser = (user) => {
    return {
        type: 'SET_USER',
        user
    }
}
export const restoreBookmark = (localBookmarks) => {
    return {
        type: 'RESTORE_BOOKMARK',
        localBookmarks
    }
}