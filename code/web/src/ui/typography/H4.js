// Imports
// basic imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
// importing fonts, since text
import { primary, secondary } from '../common/fonts'

// Component
// actual component
const H4 = (props) => {
  // question: I don't see children being used anywhere?
  // What am I missing?
  // deconstructs props, separate font and others
  const { children, font, ...others } = props

  // render h4
  return (
    <h4 {...others}>
      {/* still not sure what actually happens here*/}
      {children}

      {/* language=CSS */}
      <style jsx>{`
        h4 {
          font-family: ${ font === 'primary' ? primary : secondary };
          font-size:  1.75em;
        }
      `}</style>
    </h4>
  )
}

// Component Properties
// check prop type string
H4.propTypes = {
  font: PropTypes.string
}

// check default prop is primary
H4.defaultProps = {
  font: 'primary'
}

export default H4
