import React from 'react'
import Select from 'react-select'

const AppViewSearchSelectCourse = ({ content, updateFilter }) => {	
	
	const SelectOptions = content.map(item => {
		return {
			value: item,
			label: item
		}
	})

	return (
		<div id="AppViewSearchSelectCourse">
			<i className="fas fa-graduation-cap"></i>
			<Select options={SelectOptions} placeholder={'Select course'} isClearable={true} isSearchable={true} onChange={event => updateFilter(event)} />
		</div>
	)
}

export default AppViewSearchSelectCourse