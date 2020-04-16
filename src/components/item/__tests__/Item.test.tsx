import React from 'react'
import ReactDOM from 'react-dom'
import Item from '../item'

describe('Item', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Item />, div)
  })
})
