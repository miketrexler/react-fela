import React, { Component, PropTypes } from 'react'

export default function connect(mapStylesToProps) {
  return Comp => class EnhancedComponent extends Component {
    // reuse the initial displayName name
    static displayName = Comp.displayName || Comp.name || 'Component'

    static contextTypes = {
      ...Comp.contextTypes,
      renderer: PropTypes.object
    };

    render() {
      // invoke props and renderer to render all styles
      const styles = mapStylesToProps(this.props)(this.context.renderer)

      return <Comp {...this.props} styles={styles} />
    }
  }
}
