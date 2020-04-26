import { Dropdown } from 'semantic-ui-react'
import React, { FunctionComponent } from 'react'

interface DropdownSearchProps {
  options: any
  setChoices: any
}

const DropdownSearch: FunctionComponent<DropdownSearchProps> = ({
  options,
  setChoices,
}) => {
  const handleChange = (_e: any, { value }: any) => {
    setChoices(value)
  }

  return (
    <Dropdown
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
