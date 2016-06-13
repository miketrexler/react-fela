import React from 'react'
import Container from './components/Container.jsx'
import UserAction from './components/UserAction.jsx'
import ChildIndex from './components/ChildIndex.jsx'
import Media from './components/Media.jsx'
import Keyframes from './components/Keyframes.jsx'
import Pseudo from './components/Pseudo.jsx'

import bindFela from '../modules/helpers/bindFela'

class App extends React.Component {

  state = { offset: 20 }

  move = () => this.setState({ offset: this.state.offset + 5 })

  render() {

    return (
      <div>
        <h1 className={this.props.fela.renderRule(selector, { top: this.state.offset })} onClick={this.move}>
          Fela Examples
        </h1>
        <Container group title="1. Pseudo classes">
          <Container title="1.1. user action">
            <UserAction />
          </Container>
          <Container noPadding title="1.2. child index & child type">
            <ChildIndex items={14} />
          </Container>
          <Container title="1.3. other">
            <Pseudo />
          </Container>
        </Container>
        <Container group title="3. Media queries">
          <Container noPadding>
            <Media color="red" />
          </Container>
        </Container>
        <Container group title="5. Keyframe animations">
          <Container noPadding>
            <Keyframes />
          </Container>
        </Container>
      </div>
    )
  }
}

export default bindFela()(App)

const selector = props => {
  return {
    marginTop: props.top,
    marginBottom: 30,
    fontSize: 40,
    fontWeight: 600,
    textAlign: 'center',
    color: 'rgb(82, 67, 203)'
  }
}
