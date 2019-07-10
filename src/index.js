import React, { PureComponent } from 'react'
import debounce from 'lodash.debounce'

const RESIZE_EVENT = 'resize'
const DEFAULT_LOWER_BOUND = 0
const DEFAULT_UPPER_BOUND = 9999

const getHeight = () =>
  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
const getWidth = () =>
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

class ResizeListener extends PureComponent {
  constructor (props) {
    super(props)

    this.displayName = 'ResizeListener'

    this.state = {
      height: getHeight(),
      width: getWidth()
    }

    this.onResize = debounce(() => {
      this.setState({
        height: getHeight(),
        width: getWidth()
      })
    })
  }

  static defaultProps = {
    time: 100
  }

  componentDidMount () {
    window.addEventListener(RESIZE_EVENT, this.onResize, false)
  }

  componentWillUnmount () {
    window.removeEventListener(RESIZE_EVENT, this.onResize, false)
  }

  render () {
    const { children } = this.props
    const { width, height } = this.state

    return children({ width, height })
  }
}

export class Breakpoint extends PureComponent {
  static defaultProps = {
    maxWidth: DEFAULT_UPPER_BOUND,
    minWidth: DEFAULT_LOWER_BOUND,
    maxHeight: DEFAULT_UPPER_BOUND,
    minHeight: DEFAULT_LOWER_BOUND
  }

  render () {
    const { maxWidth, minWidth, maxHeight, minHeight, children } = this.props

    return (
      <ResizeListener>
        {({ width, height }) => {
          if (
            width >= minWidth &&
            width <= maxWidth &&
            height >= minHeight &&
            height <= maxHeight
          ) {
            return children
          }

          return null
        }}
      </ResizeListener>
    )
  }
}

export default ResizeListener
