// Imports
// imports for React and PropTypes
import React from 'react'
import PropTypes from 'prop-types'

// Component

/*
beginning of component
## This gets used to add styling to any grid cell.
- breaks down all props, determines what is/isn't there, 
  - leaves non-values if not, basic styling if there
- ...others passes along any non-styling props
*/

const GridCell = (props) => {
  const {
    children,
    alignTop,
    alignBottom,
    alignCenter,
    justifyRight,
    justifyCenter,
    gutter,
    ...others
  } = props

  // rendering of styling, some styling/non-styling props for state 
  // and other styling passed here
  return (
    <div {...others}>
      {children}

      {/* language=CSS */}
      {/* determining of style props */}
      <style jsx>{`
        div {
          flex: 1;
          ${ alignTop ? 'align-self: flex-start;' : '' }
          ${ alignBottom ? 'align-self: flex-end;' : '' }
          ${ alignCenter ? 'align-self: center;' : '' }
          ${ justifyRight ? 'justify-content: flex-end;' : '' }
          ${ justifyCenter ? 'justify-content: center;' : '' }
          ${ gutter ? 'padding-left: 1em;' : 'padding-left: 0;' }
        }
      `}</style>
    </div>
  )
}

// Component Properties
// checking prop types passed are accurate, throw console error if not
GridCell.propTypes = {
  alignTop: PropTypes.bool,
  alignBottom: PropTypes.bool,
  alignCenter: PropTypes.bool,
  justifyRight: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  gutter: PropTypes.bool
}
// checks default prop types, useful as not all props passed each time
GridCell.defaultProps = {
  alignTop: false,
  alignBottom: false,
  alignCenter: false,
  justifyRight: false,
  justifyCenter: false,
  gutter: false
}

// export styling template
export default GridCell
