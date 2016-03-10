import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as layoutActions } from '../redux/modules/layout'
import { ClimbView } from 'react-climb-social'

import styles from './SelectorView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  options: state.layout.options,
  View: state.layout.selected
})
export class SelectorView extends React.Component {
  static propTypes = {
    options: React.PropTypes.array.isRequired,
    View: React.PropTypes.func.isRequired,
    selectView: React.PropTypes.func.isRequired
  }

  render () {
    const {
      selectView,
      options,
      View
      } = this.props
    return (
      <div>
        <div className='col col-12 center'>
          <h1>Climb.Social</h1>
          <p>Something here</p>

          {options.map(option => {
            return (
              <button key={ option.key }
                      onClick={() => { selectView(option.key) }}>
                { option.name }
              </button>
            )
          })}

            <div className={`p2 m2 bg-white border rounded ${styles.Window}`}>
              <ClimbView collectionId='56b4b06908216f0cac62a86b'
                         View={ View } />
            </div>

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, layoutActions)(SelectorView)
