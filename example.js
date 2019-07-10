import React from 'react'
import Resize, { Breakpoint } from '@tiaanduplessis/react-resize'

const Example = () => {
  return <main>
    <Resize>{
      ({ width, height }) => <div>{width} - {height}</div>
    }</Resize>

    <Breakpoint minWidth={500}>
      <h1>Hi</h1>
    </Breakpoint>

  </main>
}

export default Example
