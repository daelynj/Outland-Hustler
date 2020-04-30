import React, { FunctionComponent } from 'react'
import './css/presetContainer.css'

interface PresetContainerProps {
  items: any
  qualities: any
  cities: any
  setItems: any
  setQualities: any
  setCities: any
}

const LOCAL_STORAGE = window.localStorage

export const PresetContainer: FunctionComponent<PresetContainerProps> = ({
  items,
  qualities,
  cities,
  setItems,
  setQualities,
  setCities,
}) => {
  const handleSave = () => {
    if (items.length > 0 || qualities.length > 0 || cities.length > 0) {
      LOCAL_STORAGE.setItem('items', items.join())
      LOCAL_STORAGE.setItem('qualities', qualities.join())
      LOCAL_STORAGE.setItem('cities', cities.join())
    }
  }

  const checkIfUndefined = (key: string) => {
    let localStorageEntry = LOCAL_STORAGE.getItem(key)
    return localStorageEntry === null ? [] : localStorageEntry.split(',')
  }

  const handleLoad = () => {
    let presetItems = checkIfUndefined('items')
    let presetQualities = checkIfUndefined('qualities')
    let presetCities = checkIfUndefined('cities')

    setItems(presetItems)
    setQualities(presetQualities)
    setCities(presetCities)
  }

  const handleClear = () => {
    LOCAL_STORAGE.clear()
    setItems([])
    setQualities([])
    setCities([])
  }

  return (
    <span className="buttons">
      <button onClick={handleSave}>Save Preset</button>
      <button onClick={handleLoad}>Load Preset</button>
      <button onClick={handleClear}>Clear Preset</button>
    </span>
  )
}

export default PresetContainer
