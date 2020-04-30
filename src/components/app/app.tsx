import React, { useEffect, useState } from 'react'
import './css/app.css'
import ItemContainer from '../item/itemContainer'
import ChoiceContainer from '../choice/choiceContainer'
import { getAllData } from '../../api/getAllData'
import LoadingIndicator from '../spinner/loadingIndicator'
import { usePromiseTracker } from 'react-promise-tracker'
import { PresetContainer } from '../preset/presetContainer'

const App: React.FC = () => {
  const [organizedItems, setOrganizedItems] = useState(new Map())
  const [items, setItems] = useState([])
  const [cities, setCities] = useState([])
  const [qualities, setQualities] = useState([])
  const [itemNames, setItemNames] = useState(new Map())
  const { promiseInProgress } = usePromiseTracker()

  useEffect(() => {
    getAllData(
      itemNames,
      setItemNames,
      setOrganizedItems,
      items,
      qualities,
      cities
    )
  }, [itemNames, items, qualities, cities])

  const completeEntriesExist = () =>
    items.length > 0 && cities.length > 0 && qualities.length > 0

  return (
    <>
      <div className="preset_container">
        <PresetContainer
          items={items}
          qualities={qualities}
          cities={cities}
          setItems={setItems}
          setQualities={setQualities}
          setCities={setCities}
        />
      </div>
      <div className="choice_container">
        <ChoiceContainer
          setItems={setItems}
          setQualities={setQualities}
          setCities={setCities}
        />
      </div>
      <div className="item_container">
        {promiseInProgress && <LoadingIndicator />}
        {!promiseInProgress && completeEntriesExist() && (
          <ItemContainer items={organizedItems} />
        )}
      </div>
    </>
  )
}

export default App
