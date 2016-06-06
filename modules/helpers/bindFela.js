import { Component, PropTypes } from 'react'

const defaultMapper = props => props

export default function bindFela(mapper = defaultMapper) {
  return Comp => {
    // handle functional components
    if (!Comp.prototype.setState) {
      const enhancedComponent = (props, context) => {
        const fela = (selector, additionalProps, plugins) => context.fela(selector, additionalProps ? {
          ...mapper(props),
          ...additionalProps
        } : mapper(props), plugins)
        return Comp({ ...props, fela }, context)
      }

      enhancedComponent.contextTypes = {
        ...Comp.contextTypes,
        fela: PropTypes.func.isRequired
      }

      return enhancedComponent
    }

    // handle class components
    class EnhancedComponent extends Component {
      componentWillMount() {
        this.fela = (selector, additionalProps, plugins) => this.context.fela(selector, additionalProps ? {
          ...mapper(this.props, this.state),
          ...additionalProps
        } : mapper(this.props, this.state), plugins)
      }

      render() {
        return <Comp {...this.props} fela={this.fela} />
      }
    }

    EnhancedComponent.contextTypes = {
      ...Comp.contextTypes,
      fela: PropTypes.func.isRequired
    }

    return EnhancedComponent
  }
}
