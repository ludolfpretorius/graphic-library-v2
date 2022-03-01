import React from 'react'
import Select from 'react-select'

const AppViewSearchSelectUni = ({ content, updateFilter }) => {	
	
	const SelectOptions = content.map(item => {
		return {
			value: item,
			label: item
		}
	})

	return (
		<div id="AppViewSearchSelectUni">
			<i className="fas fa-university"></i>
			<Select options={SelectOptions} placeholder={'Select UP'} isClearable={true} isSearchable={true} onChange={event => updateFilter(event)} />
		</div>
	)
}

export default AppViewSearchSelectUni