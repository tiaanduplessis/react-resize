import React from 'react'
import { render, cleanup } from '@testing-library/react'

import ReactResize from '../'

afterEach(cleanup)

test('ReactResize should render ', () => {
  const resize = render(
    <ReactResize>{size => <div>{size.width} - {size.height}</div>}</ReactResize>
  )
  expect(resize).toMatchSnapshot()
})
