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
    LOCAL_STORAGE.setItem('items', items.join())
    LOCAL_STORAGE.setItem('qualities', qualities.join())
    LOCAL_STORAGE.setItem('cities', cities.join())
  }

  const handleLoad = () => {
    setItems(LOCAL_STORAGE.getItem('items')?.split(','))
    setQualities(LOCAL_STORAGE.getItem('qualities')?.split(','))
    setCities(LOCAL_STORAGE.getItem('cities')?.split(','))
  }

  return (
    <span className="buttons">
      <button onClick={handleSave}>Save Preset</button>
      <button onClick={handleLoad}>Load Preset</button>
    </span>
  )
}

export default PresetContainer
