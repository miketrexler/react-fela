# `createComponent(rule, [type])`

This HoCs ([Higher-order Components](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.njbld18x8)) creates a presentational React component using the rendered `rule` as className. It pipes all `props` to the native DOM element.

## Arguments
1. `rule` (*Function*): A function which satisfies the [rule](../basics/Rules.md) behavior. It **must** return a valid [style object](../basics/Rules.md#styleobject).
2. `type` (*string?|[Component](https://facebook.github.io/react/docs/top-level-api.html#react.component)?*): React Component or HTML element which is used as the render base element. Defaults to `div`.

## Returns
(*Function*): Stateless functional React component.

## Example
```javascript
import { createComponent } from 'react-fela'


const title = props => ({
  lineHeight: 1.2,
  fontSize: props.fontSize + 'px',
  color: props.color
})

const Title = createComponent(title)

ReactDOM.render(
  <Title fontSize={23} color='red'>Hello World</Title>,
  document.getElementById('app')
)
// => <div className="c0 c0-xxxx">Hello World</div>
```
