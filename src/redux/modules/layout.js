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
      id: 0,
      name: 'List View',
      key: 'LIST_VIEW',
      component: ListView,
      props: {}
    },
    {
      id: 1,
      name: 'Column View',
      key: 'COLUMN_VIEW',
      component: ColumnView,
      props: {
        sizes: [
          { columns: 1, gutter: 15 },
          { mq: '640px', columns: 2, gutter: 15 },
          { mq: '958px', columns: 3, gutter: 15 }
        ]
      }
    }
  ],
  selected: 0
}

export default handleActions({
  [SELECT_VIEW]: (state, { payload }) => ({ ...state, selected: payload })
}, initialState)
