import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import {useState} from 'react'
import Fbdata from './Data/fbdata'
import Fblist from './components/fblist'
import Fbstats from './components/fbstats'
import Fbform from './components/fbform'
import {v4 as uuidv4} from 'uuid'
import AboutPage from './pages/AboutPage'

function App() {

  const [feedb,setfeedback]=useState(Fbdata)

  const addfeedback=(newfeedback)=>{
    newfeedback.id=uuidv4()
    setfeedback([newfeedback,...feedb])
  }

  
  const delefeedback = (id)=>{
    if(window.confirm('Are you sure to delete')){
      setfeedback(Fbdata.filter((item)=>(
        item.id!==id
      )))
    }
  }



  return (
    <Router>
    
    <Header text="Feedback UI"/> 
   <div className='container'>
     <Routes>
     <Route exact path='/' element={
       <>
         <Fbform fbfprop= {addfeedback} />
         <Fbstats fbsprop={feedb} />
         <Fblist  fblprop={feedb} handdel={delefeedback} />
       </>
     }/>


      <Route  path="/about" element={<AboutPage />} />
      </Routes>
   </div>
    
    </Router>
  )

}

export default App
