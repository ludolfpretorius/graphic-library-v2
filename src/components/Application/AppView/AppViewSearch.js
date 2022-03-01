import React, { useState, useEffect, useContext } from 'react'

import AppViewSearchInput from './AppViewSearchInput'
import AppViewSearchSelectUni from './AppViewSearchSelectUni'
import AppViewSearchSelectCourse from './AppViewSearchSelectCourse'

import fetchUniPartners from '../../../state/utils/fetchUniPartners'
import ImagesContext from '../../../state/contexts/ImagesContext'
import FilteredImagesContext from '../../../state/contexts/FilteredImagesContext'
import UniPartnersContext from '../../../state/contexts/FilteredImagesContext'

const AppViewSearch = (props, context) => {
	const { images } = useContext(ImagesContext)
	const { filteredImages, setFilteredImages } = useContext(FilteredImagesContext)

	const [ unies, setUnies ] = useState([])
	const [ uniNames, setUniNames ] = useState([])
	const [ courses, setCourses ] = useState([])

	const [ selectedUni, setSelectedUni ] = useState('')
	const [ selectedCourse, setSelectedCourse ] = useState('')
	const [ searchedValue, setSearchedValue ] = useState('')
	
	useEffect(() => {
		fetchUniPartners()
	      .then(data => {
	      	setUnies(data)
	      	setUniNames(getUniNames(data))
	      })
	}, [])

	useEffect(() => {
		maybeClearCourse()
		setCourses(getCourseNames(unies))
	}, [selectedUni])

	useEffect(() => {
		filterImages()
	}, [searchedValue, selectedUni, selectedCourse])

	const getUniNames = (arr) => {
		const universities = arr.map(uni => uni.acronym)
		return universities
	}

	const getCourseNames = (arr) => {
		const uni = arr.filter(uni => uni.acronym === selectedUni)
		return uni[0]?.courses || []
	}

	const maybeClearCourse = () => {
		if (!selectedUni.length) {
			setSelectedCourse('')
			setCourses([])
		}
	}

	const filterImages = () => {
		const inputRegex = new RegExp(searchedValue, 'ig')
		const imgs = images.filter(img => {
			const tags = img.tags.join(',')
			return tags.match(inputRegex) && img.up.includes(selectedUni) && img.course.includes(selectedCourse)
		})
		setFilteredImages(imgs)
	}

	return (
		<div id="AppViewSearch">
			<AppViewSearchSelectUni 
				content={uniNames}
				updateFilter={uni => setSelectedUni(uni?.value || '')}/>

			<AppViewSearchSelectCourse
				content={courses}
				updateFilter={course => setSelectedCourse(course?.value || '')} />

			<AppViewSearchInput emitValue={value => setSearchedValue(value)} />

			<div className="asset-amount">{filteredImages.length} images</div>
		</div>
	)
}

export default AppViewSearch