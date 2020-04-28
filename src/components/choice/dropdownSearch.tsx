import { Dropdown } from 'semantic-ui-react'
import React, { FunctionComponent } from 'react'

interface DropdownSearchProps {
  placeholder: string
  options: any
  setChoices: any
}

const DropdownSearch: FunctionComponent<DropdownSearchProps> = ({
  placeholder,
  options,
  setChoices,
}) => {
  const handleChange = (_e: any, { value }: any) => {
    setChoices(value)
  }

  return (
    <Dropdown
      placeholder={placeholder}
      fluid
      multiple
      search
      selection
      options={options}
      onChange={handleChange}
    />
  )
}

export default DropdownSearch
