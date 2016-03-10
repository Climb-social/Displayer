import { createAction, handleActions } from 'redux-actions'
import { ListView, ColumnView } from 'react-climb-social'

// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_VIEW = 'SELECT_VIEW'

// ------------------------------------
// Actions
// ------------------------------------
export const selectView = createAction(SELECT_VIEW)

export const actions = {
  selectView
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  options: [
    {
      name: 'List View',
      key: 'LIST_VIEW',
      component: ListView
    },
    {
      name: 'Column View',
      key: 'COLUMN_VIEW',
      component: ColumnView
    }
  ],
  selected: ListView
}

export default handleActions({
  [SELECT_VIEW]: (state, { payload }) => {
    const newOption = state.options.find(option => {
      return option.key === payload
    })

    return {
      ...state,
      selected: newOption.component
    }
  }
}, initialState)
