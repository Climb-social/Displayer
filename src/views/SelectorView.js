import React from 'react'
import { connect } from 'react-redux'
import { actions as layoutActions } from '../redux/modules/layout'
import { actions as collectionActions } from '../redux/modules/collection'
import { ClimbView } from 'react-climb-social'

import styles from './SelectorView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  options: state.layout.options,
  View: state.layout.selected,
  collectionId: state.collection.id
})
export class SelectorView extends React.Component {
  static propTypes = {
    collectionId: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    View: React.PropTypes.func.isRequired,
    selectView: React.PropTypes.func.isRequired
  }

  render () {
    const {
      selectView,
      options,
      collectionId,
      View
      } = this.props
    return (
      <div>
        <div className='col col-12 center'>
          <h1>Climb.Social</h1>
          <p>Something here</p>

          <form className='mb3'>
            <label htmlFor='collection_id'
                   className='block'>
              Collection
            </label>
            <input type='text'
                   id='collection_id'
                   value={ collectionId }/>
          </form>


          {options.map(option => {
            return (
              <button key={ option.key }
                      onClick={() => { selectView(option.key) }}>
                { option.name }
              </button>
            )
          })}

          <div className={`p2 m2 bg-white border rounded ${styles.Window}`}>
            <ClimbView collectionId={ collectionId }
                       View={ View } />
          </div>

          <div>
            <pre>

            </pre>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, {...layoutActions, ...collectionActions})(SelectorView)
