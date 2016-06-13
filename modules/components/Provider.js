import { Component, PropTypes } from 'react'

import felaShape from '../helpers/felaShape'

export default class Provider extends Component {

  static propTypes = {
    renderer: PropTypes.object.isRequired
  }

  static childContextTypes = {
    fela: felaShape
  }

  getChildContext() {
    const { renderRule, renderKeyframe, renderFont, renderStatic } = this.props.renderer
    return {
      fela: {
        renderRule,
        renderKeyframe,
        renderFont,
        renderStatic
      }
    }
  }

  render() {
    return this.props.children
  }
}
