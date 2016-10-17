import { createElement, PropTypes } from 'react'

export default function createComponent(rule, type = 'div', passThroughProps = {}) {
  const component = (props, { renderer }) => {
    // extract children as a special prop
    const { children, ...felaProps } = props

    // filter props to extract props to pass through
    const componentProps = Object.keys(passThroughProps).reduce((output, prop) => {
      output[prop] = felaProps[prop]
      if (!passThroughProps[prop]) {
        delete felaProps[prop]
      }
      return output
    }, { })

    const className = props.className ? props.className + ' ' : ''
    delete felaProps['className']
    componentProps.className = className + renderer.renderRule(rule, felaProps)
    return createElement(type, componentProps, children)
  }

  component.contextTypes = { renderer: PropTypes.object }
  return component
}
