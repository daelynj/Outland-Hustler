import DropdownSearch from './dropdownSearch'
import React, { FunctionComponent } from 'react'
import { items } from './items/allItems'

const qualities = [
  { key: '1', text: 'Normal', value: 1 },
  { key: '2', text: 'Good', value: 2 },
  { key: '3', text: 'Outstanding', value: 3 },
  { key: '4', text: 'Excellent', value: 4 },
  { key: '5', text: 'Masterpiece', value: 5 },
]

const cities = [
  { key: 'Bridgewatch', text: 'Bridgewatch', value: 'Bridgewatch' },
  { key: 'Fort Sterling', text: 'Fort Sterling', value: 'Fort Sterling' },
  { key: 'Caerleon', text: 'Caerleon', value: 'Caerleon' },
  { key: 'Martlock', text: 'Martlock', value: 'Martlock' },
]

interface ChoiceContainerProps {
  setItems: any
  setQualities: any
  setCities: any
}

const ChoiceContainer: FunctionComponent<ChoiceContainerProps> = ({
  setItems,
  setQualities,
  setCities,
}) => {
  return (
    <>
      <DropdownSearch
        placeholder={'items'}
        options={items}
        setChoices={setItems}
      />
      <DropdownSearch
        placeholder={'qualities'}
        options={qualities}
        setChoices={setQualities}
      />
      <DropdownSearch
        placeholder={'cities'}
        options={cities}
        setChoices={setCities}
      />
    </>
  )
}

export default ChoiceContainer
