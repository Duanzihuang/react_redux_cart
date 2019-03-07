import React from 'react'
import { connect } from 'react-redux'

class Summary extends React.Component {
  render() {
    const { sum } = this.props
    return <div>总计:{sum}</div>
  }
}

const mapStateToProps = state => {
  let sum = 0
  for (const key in state) {
    sum += state[key]
  }

  return { sum }
}

export default connect(mapStateToProps)(Summary)
