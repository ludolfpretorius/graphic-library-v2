import React, { useContext, Suspense } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component';
import AppViewContentLoader from './AppViewContentLoader'
import ImagesContext from '../../../state/contexts/ImagesContext'
import FilteredImagesContext from '../../../state/contexts/FilteredImagesContext'
import VisibleImagesContext from '../../../state/contexts/VisibleImagesContext'
import AppViewContentDropzone from './AppViewContentDropzone'
const AppViewContentThumbnail = React.lazy(() => import('./AppViewContentThumbnail'))

const AppViewContent = ({ isUploading, setIsUploading, imgInfo, initUpload }) => {
	const { images } = useContext(ImagesContext)
	const { filteredImages, setFilteredImages } = useContext(FilteredImagesContext)
	const { visibleImages, setVisibleImages } = useContext(VisibleImagesContext)
	const updateVisibleImages = () => {
		setVisibleImages([...visibleImages, ...filteredImages.slice(visibleImages.length, visibleImages.length + 100)])
	}

	return (
		<div id='AppViewContent'>
			<Suspense fallback={<AppViewContentLoader />} >
				<InfiniteScroll 
					dataLength={visibleImages.length}
					next={updateVisibleImages}
					hasMore={filteredImages.length > visibleImages.length}
					loader={<AppViewContentLoader />}
					endMessage={null} >
						<AppViewContentDropzone 
							isUploading={isUploading}
							setIsUploading={bool => setIsUploading(bool)}
							imgInfo={imgInfo}
							initUpload={initUpload} />						
						{visibleImages.map(img => {
							return <AppViewContentThumbnail img={img} key={img.id} />
						})}
				</InfiniteScroll>
			</Suspense>
		</div>
	)
}

export default AppViewContent