import React from 'react'
import './css/app.css'
import ItemContainer from '../item/itemContainer'
import RefreshButton from '../refresh/refreshButton'
import { items } from './api/items'
import { buildData } from './data/buildData'

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
        <ItemContainer items={buildData(items)} />
      </div>
    </>
  )
}

export default App
