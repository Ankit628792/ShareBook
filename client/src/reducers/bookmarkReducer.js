
export const initialState = {
    bookmark: [],
  };

const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_BOOKMARK':
            let addBookmark = [...state.bookmark, action.bookData]
            localStorage.setItem('bookmark', JSON.stringify(addBookmark))
            return {
                bookmark: addBookmark
            }

        case 'REMOVE_FROM_BOOKMARK':
            const index = state.bookmark.findIndex((book) => book.bookId == action.id)
            let removeBookmark = [...state.bookmark];            
            if (index >= 0) {
                removeBookmark.splice(index, 1)
            } else {
                console.warn(`Can't remove Book`)
            }
            localStorage.setItem('bookmark', JSON.stringify(removeBookmark))
            return {
                bookmark: removeBookmark
            }

        case 'REMOVE_ALL_BOOKMARK':
            localStorage.setItem('bookmark', null)
            return {
                ...state,
                bookmark: []
            }
        
        case 'RESTORE_BOOKMARK' :
            const restoreBookmarks = action.localBookmarks ;
            return {
                bookmark: restoreBookmarks
            }

        default:
            return state
    }
}

export default bookmarkReducer