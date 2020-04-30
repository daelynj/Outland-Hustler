import React, { FunctionComponent } from 'react'

interface RefreshButtonProps {
  handleEvent: (newEvent: any) => void
}

const refreshButton: FunctionComponent<RefreshButtonProps> = ({
  handleEvent,
}) => <button onClick={handleEvent}>Refresh</button>

export default refreshButton
