import DropdownSearch from './dropdownSearch'
import React, { FunctionComponent } from 'react'

const items = [
  {
    key: 'T6_ARMOR_PLATE_SET1',
    text: "Master's Soldier Armor",
    value: 'T6_ARMOR_PLATE_SET1',
  },
  {
    key: 'T5_ARMOR_CLOTH_SET2',
    text: "Expert's Cleric Robe",
    value: 'T5_ARMOR_CLOTH_SET2',
  },
  //   {
  //     key: 'Grandmasters Mage Robe',
  //     text: 'Grandmasters Mage Robe',
  //     value: 'T7_ARMOR_CLOTH_SET3',
  //   },
]

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
      <DropdownSearch options={items} setChoices={setItems} />
      <DropdownSearch options={qualities} setChoices={setQualities} />
      <DropdownSearch options={cities} setChoices={setCities} />
    </>
  )
}

export default ChoiceContainer
