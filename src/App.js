import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'

import Login from './containers/Login'
import Application from './containers/Application'
import Admin from './containers/Admin'
import Guest from './containers/Guest'

import ImagesContext from './state/contexts/ImagesContext'
import FilteredImagesContext from './state/contexts/FilteredImagesContext'
import VisibleImagesContext from './state/contexts/VisibleImagesContext'
import fetchImages from './state/utils/fetchImages'

function App() {
  const [ images, setImages ] = useState([])
  const [ filteredImages, setFilteredImages ] = useState([])
  const [ visibleImages, setVisibleImages ] = useState([])
  
  useEffect(() => {
    fetchImages()
      .then(data => {
        setImages(data)
        setFilteredImages(data)
      })
  }, [])

  useEffect(() => {
    setVisibleImages(filteredImages.slice(0, 100))
  }, [filteredImages])
  
  return (
    <Router>
      <ImagesContext.Provider value={{ images, setImages }}>
        <FilteredImagesContext.Provider value={{ filteredImages, setFilteredImages }}>
          <VisibleImagesContext.Provider value={{ visibleImages, setVisibleImages }}>
           {/* <UniPartnersContext.Provider value={{ uniPartners, setUniPartners }}>*/}
              <Routes>
                <Route path="/" exact element={ <Login/> } />
                <Route path="/login" exact element={ <Login/> } />
                <Route path="/guest" exact element={ <Guest/> } />
                <Route path="/app" element={ <Application/> } />
                <Route path="/admin" exact element={ <Admin/> } />
              </Routes>
           {/* </UniPartnersContext.Provider>*/}
          </VisibleImagesContext.Provider>
        </FilteredImagesContext.Provider>
      </ImagesContext.Provider>
    </Router>
  );
}

export default App;
