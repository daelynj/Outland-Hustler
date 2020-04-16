import React from 'react'
import ReactDOM from 'react-dom'
import ItemContainer from '../itemContainer'

describe('ItemContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ItemContainer />, div)
  })
})
