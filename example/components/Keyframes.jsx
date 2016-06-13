import React, { PropTypes } from 'react'

const Keyframes = (props, { fela: { renderRule, renderKeyframe } }) => (
<div className={renderRule(styles.container, { name: renderKeyframe(positionFrames) })}>
  <div className={renderRule(styles.box, { name: renderKeyframe(backgroundFrames) })} />
</div>
)

Keyframes.contextTypes = { fela: PropTypes.object.isRequired }
export default Keyframes

const positionFrames = props => ({
  '0%': {
    paddingLeft: 0,
    paddingTop: 100
  },
  '25%': {
    paddingTop: 0
  },
  '50%': {
    paddingLeft: 'calc(100% - 100px)',
    paddingTop: 100
  },
  '75%': {
    paddingTop: 200
  },
  '100%': {
    paddingTop: 100,
    paddingLeft: 0
  }
})

const backgroundFrames = props => ({
  '0%': {
    background: 'blue'
  },
  '25%': {
    background: 'green'
  },
  '50%': {
    background: 'yellow'
  },
  '75%': {
    background: 'red'
  },
  '100%': {
    background: 'blue'
  }
})

const styles = {
  container: props => ({
    height: 300,
    animation: props.name + ' 6s linear 0s infinite'
  }),
  box: props => ({
    height: 100,
    width: 100,
    borderRadius: 100,
    animation: props.name + ' 12s linear 0s infinite'
  })
}
