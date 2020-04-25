import { Dropdown } from 'semantic-ui-react'
import React from 'react'

const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
]

const DropdownSearch: React.FC = () => (
  <Dropdown fluid multiple search selection options={options} />
)

export default DropdownSearch
