import React, { Component, PropTypes } from 'react'

export default class UserAction extends Component {

  static contextTypes = { fela: PropTypes.object.isRequired }

  render() {
    const { fela: { renderRule } } = this.context
    return (
      <div>
        <div className={`${renderRule(styles.button)} ${renderRule(styles.activeButton)}`}>Click me</div>
        <div className={`${renderRule(styles.button)} ${renderRule(styles.hoverButton)}`}>Hover me</div>
        <div className={`${renderRule(styles.button)} ${renderRule(styles.hoverActiveButton)}`}>Hover me, then Click me</div>
      </div>
    )
  }
}

const styles = {
  button: () => ({
    margin: 10,
    padding: 5,
    fontSize: 20,
    color: 'black',
    borderRadius: 5,
    textAlign: 'center',
    border: '1px solid lightgray',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.34)'
  }),
  hoverButton: () => ({
    ':hover': {
      backgroundColor: 'rgba(0, 0, 255, 0.3)'
    }
  }),
  activeButton: () => ({
    ':active': {
      backgroundColor: 'rgba(255, 0, 0, 0.3)'
    }
  }),
  hoverActiveButton: () => ({
    ':hover': {
      backgroundColor: 'rgba(0, 255, 0, 0.3)',
      ':active': {
        backgroundColor: 'rgba(0, 0,0, 0.3)'
      }
    }
  })
}
