import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Fblist from './components/fblist'
import Fbstats from './components/fbstats'
import Fbform from './components/fbform'

import AboutPage from './pages/AboutPage'

import {Fbprovider} from './context/fbcontext'

function App() {


  return (

    <Fbprovider>
    <Router>
    
    <Header text="Feedback UI"/> 
   <div className='container'>
     <Routes>
     <Route exact path='/' element={
       <>
         <Fbform  />
         <Fbstats  />
         <Fblist   />
       </>
     }/>


      <Route  path="/about" element={<AboutPage />} />
      </Routes>
   </div>
    
    </Router>

    </Fbprovider>
    
  )

}

export default App
