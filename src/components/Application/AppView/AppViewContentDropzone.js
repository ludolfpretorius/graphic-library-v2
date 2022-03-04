
import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import uploadImage from '../../../state/utils/uploadImage'

import img from '../../../assets/imgs/img.svg'

const AppViewContentDropzone = ({ isUploading, setIsUploading, imgInfo, initUpload }) => {
	const [ files, setFiles ] = useState([])

	useEffect(() => () => {
		files.forEach(file => URL.revokeObjectURL(file.preview));
	}, [files]);

	useEffect(() => {
		if (!isUploading) {
			setFiles([])
		}
	}, [isUploading])

	useEffect(() => {
		if (initUpload) {
			console.log('uploading...')
			console.log(imgInfo)
			processFiles(files, imgInfo)
		}
	}, [initUpload])

	const onDrop = useCallback(acceptedFiles => {
		setIsUploading(true)
		setFiles(acceptedFiles.map(file => Object.assign(file, {
			preview: URL.createObjectURL(file),
		})))
	}, [])
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: 'image/svg+xml',
		minSize: 0,
		maxSize: 1000000
	})

	const getInfo = (info) => {
		return JSON.stringify(info)
	}

	const processFiles = (fileArray, imgInfo) => {
		const formData = new FormData()
		formData.append('path', 'images/uploadImage')
		formData.append('info', getInfo(imgInfo))
		fileArray.forEach((file, i) => {
			formData.append('file' + (i+1), file)
		})
		uploadImage(formData)
	}
	
	const dragResponses = ['Upload image here', 'You going to upload something or not?', 'You\'re supposed to upload stuff, you know', 'Onion rings are just vegetable donuts', 'I’d give you a cookie, but I ate it', 'C is for cookie. That’s good enough for me.', 'Upload image here', 'Gimme SVGEEEZ!!!', 'Upload something... I dare you.']
	const dropResponses = ['Drop it... coz it\'s hot, of course', 'Drop that bad boy!', 'Gimme gimme gimme!!', 'Get in mah belly!', 'Nom nom nom...', 'Waaiiit!!!... Just kidding. Drop that shit.', 'Early bird gets the worm, but all I want is SVGEEEZ!!!']
	const getResponse = (name, responsesSrc) => {
		if (sessionStorage[name]) {
			return sessionStorage[name]
		}
		const index = Math.floor(Math.random() * responsesSrc.length)
		sessionStorage[name] = responsesSrc[index]
		return responsesSrc[index]
	}

	const thumbs = files.map(file => (
		<img src={file.preview} alt={file.name} key={file.name} />
	))

	return (
		<div id="AppViewContentDropzone" >
			<div className={files.length ? 'thumb-preview show-preview' : 'thumb-preview'}>
				{thumbs}
			</div>
			<div {...getRootProps()}>
				<input {...getInputProps()} />
				{
					isDragActive ?
					<div className={'dropzone-content'}>
						<span>{getResponse('dropResponse', dropResponses)}</span>
					</div> :
					<div className={'dropzone-content'}>
						<img src={img} alt="image icon" />
						<span>{getResponse('dragResponse', dragResponses)}</span>
					</div>
				}
			</div>
		</div>
	)
}

export default AppViewContentDropzone