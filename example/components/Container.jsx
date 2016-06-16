import React, { Component, PropTypes } from 'react'

export default class Container extends Component {

  static contextTypes = { fela: PropTypes.object.isRequired }

  render() {
    const { fela: { renderRule } } = this.context
    return (
      <div className={renderRule(styles.container)}>
        <h1 className={renderRule(styles.title)}>{this.props.title}</h1>
        <pre className={renderRule(styles.desc)}>{this.props.description}</pre>
        <div className={renderRule(styles.inner)}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const styles = {
  container: () => ({
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: 70,
    'group=true': {
      paddingTop: 50,
      margin: '0 auto',
      maxWidth: 900,
      minWidth: 500,
      borderBottom: '1px solid lightgray'
    }
  }),

  inner: () => ({
    padding: 10,
    border: '1px solid lightgray',
    'noPadding=true': {
      padding: 0
    },
    'group=true': {
      border: 'none',
      paddingTop: 0
    }
  }),

  title: () => ({
    fontSize: 25,
    color: 'rgb(85, 85, 85)',
    padding: 5,
    paddingBottom: 0,
    margin: 0,
    lineHeight: 1,
    fontWeight: 300,
    'group=true': {
      fontWeight: 400,
      fontSize: 30,
      padding: 8,
      color: 'rgb(102, 79, 196)'
    }
  }),

  desc: () => ({
    padding: 5,
    paddingTop: 0,
    lineHeight: 1,
    color: 'gray',
    fontSize: 15
  })
}
