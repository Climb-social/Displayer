import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const COLLECTION_ID_SET = 'COLLECTION_ID_SET'

// ------------------------------------
// Actions
// ------------------------------------
export const setCollection = createAction(COLLECTION_ID_SET)

export const actions = {
  setCollection
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  id: '56b4b06908216f0cac62a86b'
}

export default handleActions({
  [COLLECTION_ID_SET]: (state, { payload }) => ({ ...state, id: payload })
}, initialState)
