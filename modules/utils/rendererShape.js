import { PropTypes } from 'react'

const rendererShape = PropTypes.shape({
  renderFont: PropTypes.func.isRequired,
  renderStatic: PropTypes.func.isRequired,
  renderRule: PropTypes.func.isRequired,
  renderKeyframe: PropTypes.func.isRequired
})

export default rendererShape.isRequired
