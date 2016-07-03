import { createElement } from 'react'

import rendererShape from '../utils/rendererShape'

export default function createComponent(rule, type = 'div') {
  const component = (props, { renderer }) => createElement(type, {
    ...props,
    className: renderer.renderRule(rule, props)
  }, props.children || null)

  component.contextTypes = { renderer: rendererShape }
  return component
}
