import React, { useContext, useEffect, useState }	from 'react'
import Select from 'react-select'

import PopupLoader from './PopupLoader.js'

import fetchUniPartners from '../../../state/utils/fetchUniPartners'
import fetchTags from '../../../state/utils/fetchTags'
import ImagesContext from '../../../state/contexts/ImagesContext'
// import UniPartnersContext from '../../../state/contexts/FilteredImagesContext'

const PopupContentUpload = ({ setIsUploading }) => {
	const { images } = useContext(ImagesContext)

	const [ unies, setUnies ] = useState([])
	const [ uniNames, setUniNames ] = useState([])
	const [ courses, setCourses ] = useState([])
	const [ tags, setTags ] = useState([])

	const [ selectedUni, setSelectedUni ] = useState('')
	const [ selectedCourse, setSelectedCourse ] = useState('')
	
	useEffect(() => {
		fetchUniPartners()
			.then(data => {
				setUnies(data)
				setUniNames(getUniNames(data))
			})
		fetchTags()
			.then(data => {
				setTags(data)
			})
	}, [])

	useEffect(() => {
		maybeClearCourse()
		setCourses(getCourseNames(unies))
	}, [selectedUni])

	const getUniNames = (arr) => {
		const unies = arr.map(uni => uni.acronym)
		return unies
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

	const constructOptions = (arr) => {
		const options = Array.isArray(arr) ? arr.map(item => {
			return {
				value: item,
				label: item
			}
		}) : null
		return options
	}

	const load = () => {
		if (!tags.length || !unies.length) {
			return <PopupLoader />
		}
	}

	return (
		<div id="PopupContentUpload" >
			{
				load()
			}
			<div className="text">
				<h2>Uploading image</h2>
				<h4>But first, let's add some information about the image</h4>
			</div>
			<div className="inputs">
				<div className="input-wrap">
					<i className="fas fa-tags"></i>
					<Select
						className="basic-multi-select"
						name="tags" placeholder={'Add searchable tags'}
						isMulti={true} isSearchable={true}
						isClearable={false}
						options={constructOptions(tags)} />
				</div>
				<div className="input-group">
					<div className="input-wrap">
						<i className="fas fa-university"></i>
						<Select
						options={constructOptions(uniNames)}
						placeholder={'Select UP'}
						isClearable={true}
						isSearchable={true}
						onChange={option => setSelectedUni(option?.value || '')}
						/>
					</div>
					<div className="input-wrap">
						<i className="fas fa-graduation-cap"></i>
						<Select
						options={constructOptions(courses)}
						placeholder={'Select course'}
						isClearable={true}
						isSearchable={true}
						onChange={option => setSelectedCourse(option?.value || '')} />
					</div>
				</div>	
			</div>
			<div className="buttons">
				<div className="btn cancel" onClick={() => setIsUploading(false)}>Cancel</div>
				<div className="btn upload">Upload</div>
			</div>
		</div>
	)
}

export default PopupContentUpload