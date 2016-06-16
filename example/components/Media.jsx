import React from 'react'
import bindFela from '../../modules/helpers/bindFela'

const Media = ({ fela }) => (
<div className={fela.renderRule(styles)}>
  Resize your window
</div>
)

export default bindFela()(Media)

const styles = props => ({
  padding: 40,
  textAlign: 'center',
  color: props.color,
  fontSize: 40,
  backgroundColor: 'red',
  '@media (max-width: 500px)': {
    backgroundColor: 'blue'
  },
  '@media (orientation:portrait)': {
    backgroundColor: 'orange'
  },
  '@media (min-width: 1000px)': {
    backgroundColor: 'green'
  }
})
