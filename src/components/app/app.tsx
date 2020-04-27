import React, { useEffect, useState } from 'react'
import './css/app.css'
import ItemContainer from '../item/itemContainer'
import RefreshButton from '../refresh/refreshButton'
import ChoiceContainer from '../choice/choiceContainer'
import { getAllData } from './api/getAllData'

const App: React.FC = () => {
  const [organizedItems, setOrganizedItems] = useState(new Map())
  const [items, setItems] = useState([])
  const [cities, setCities] = useState([])
  const [qualities, setQualities] = useState([])
  const [loading, setLoading] = useState(true)

  const refreshPage = () => {
    window.location.reload(false)
  }

  useEffect(() => {
    getAllData(setOrganizedItems, setLoading, items, qualities, cities)
  }, [items, qualities, cities])

  const completeEntriesExist = () =>
    items.length > 0 && cities.length > 0 && qualities.length > 0

  return (
    <>
      <div className="refresh">
        <RefreshButton handleEvent={refreshPage} />
      </div>
      <div className="choice_container">
        <ChoiceContainer
          setItems={setItems}
          setQualities={setQualities}
          setCities={setCities}
        />
      </div>
      <div className="item_container">
        {!loading && completeEntriesExist() && (
          <ItemContainer items={organizedItems} />
        )}
      </div>
    </>
  )
}

export default App
