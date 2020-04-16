import React from 'react'
import './css/app.css'
import ItemContainer from '../item/itemContainer'
import RefreshButton from '../refresh/refreshButton'

const App: React.FC = () => {
  const refreshPage = () => {
    window.location.reload(false)
  }

  return (
    <>
      <div className="refresh">
        <RefreshButton handleEvent={refreshPage} />
      </div>
      <div className="item_container">
        <ItemContainer />
      </div>
    </>
  )
}

export default App
