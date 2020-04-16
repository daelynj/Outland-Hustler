import React from 'react'
import ReactDOM from 'react-dom'
import RefreshButton from '../refreshButton'

describe('RefreshButton', () => {
  const mockHandleEvent = jest.fn()

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<RefreshButton handleEvent={mockHandleEvent} />, div)
  })
})
