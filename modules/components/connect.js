import React, { Component } from 'react'

import rendererShape from '../utils/rendererShape'

export default function connect(mapStylesToProps) {
  return Comp => class EnhancedComponent extends Component {
    // reuse the initial displayName name
    static displayName = Comp.displayName || Comp.name || 'Component'

    static contextTypes = {
      ...Comp.contextTypes,
      renderer: rendererShape
    };

    render() {
      // invoke props and renderer to render all styles
      const styles = mapStylesToProps(this.props)(this.context.renderer)

      return <Comp {...this.props} styles={styles} />
    }
  }
}
