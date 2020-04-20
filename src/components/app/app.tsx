import React, { useEffect, useState } from 'react'
import './css/app.css'
import ItemContainer from '../item/itemContainer'
import RefreshButton from '../refresh/refreshButton'
import { fetchResource } from './api/fetchResource'
import { buildData } from './data/buildData'

const App: React.FC = () => {
  const [items, setItems] = useState(new Map())

  const refreshPage = () => {
    window.location.reload(false)
  }

  useEffect(() => {
    fetchResource('no url yet', 'no path yet')
      .then((userData: any) => {
        setItems(buildData(userData))
      })
      .catch((error) => {
        console.log(error.message)
        console.log(error.status)
        console.log(error.response)
      })
  }, [])

  return (
    <>
      <div className="refresh">
        <RefreshButton handleEvent={refreshPage} />
      </div>
      <div className="item_container">
        <ItemContainer items={items} />
      </div>
    </>
  )
}

export default App
