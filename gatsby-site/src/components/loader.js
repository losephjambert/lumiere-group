import React from 'react'
import Styled from 'styled-components'
import { Transition, animated } from 'react-spring'
import {loadManager} from '../components/hoc-loader'

const defaultStyles = {
  width: '100%',
  backgroundColor: '#247BA0',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  zIndex: 9999
}

class Loader extends React.PureComponent{

  state = { items: ['item1', 'item2', 'item3'] }

  componentDidMount() {
    // new item
    setTimeout(() => this.setState({ items: ['item1', 'item2', 'item3', 'item4'] }), 1000)
    // new item in between
    setTimeout(() => this.setState({ items: ['item1', 'item2', 'item5', 'item3', 'item4'] }), 2000)
    // deleted items
    setTimeout(() => this.setState({ items: ['item1', 'item3', 'item4'] }), 3000)
    // scrambled order
    setTimeout(() => this.setState({ items: ['item4', 'item2', 'item3', 'item1'] }), 4000)
  }

  render() {
    return (
      <ul>
        <Transition
          native
          keys={this.state.items}
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 100 }}
          leave={{ opacity: 0, height: 0 }}>
          {this.state.items.map(item => styles => <animated.li style={{ ...defaultStyles, ...styles }}>{item}</animated.li>)}
        </Transition>
      </ul>
    )
  }
}

export default loadManager(Loader)