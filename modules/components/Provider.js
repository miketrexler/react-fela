import { Component } from 'react'
import { render } from 'fela'

import rendererShape from '../utils/rendererShape'

export default class Provider extends Component {
  static propTypes =  { renderer: rendererShape };
  static childContextTypes = { renderer: rendererShape };

  componentDidMount() {
    const { mountNode, renderer } = this.props

    if (mountNode) {
      render(renderer, mountNode)
    }
  }

  getChildContext() {
    return { renderer: this.props.renderer }
  }

  render() {
    return this.props.children
  }
}
