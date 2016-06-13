import { PropTypes as T } from 'react'

export default T.shape({
  renderFont: T.func.isRequired,
  renderStatic: T.func.isRequired,
  renderRule: T.func.isRequired,
  renderKeyframe: T.func.isRequired
}).isRequired
