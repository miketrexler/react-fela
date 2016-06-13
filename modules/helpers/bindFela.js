import React, { Component } from 'react'

import felaShape from './felaShape'

const defaultMapper = props => props

export default function bindFela(mapper = defaultMapper) {
  return Comp => (
    class EnhancedComponent extends Component {

      static contextTypes = {
        ...Comp.contextTypes,
        fela: felaShape
      }

      componentWillMount() {
        const { renderFont, renderStatic } = this.context.fela

        this.fela = [ 'renderRule', 'renderKeyframe' ].reduce((carry, method) => {
          carry[method] = (func, additionalProps) => (
            this.context.fela[method](func, additionalProps ? {
              ...mapper(this.props),
              ...additionalProps
            } : mapper(this.props)
          ))

          return carry
        }, { renderFont, renderStatic })
      }

      render() {
        return <Comp {...this.props} fela={this.fela} />
      }
    }
  )
}
