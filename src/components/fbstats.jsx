import React from 'react'
import {useContext} from 'react'
import Fbcontext from '../context/fbcontext'

function Fbstats() {

   const {fbprop} = useContext(Fbcontext)
   

    let average= fbprop.reduce((acc,cur)=>{
        return (acc +cur.rating)
    },0)/(fbprop.length)


average=average.toFixed(1)
  return (
    <div className='feedback-stats'>
        <h4>{fbprop.length} Reviews!!</h4>
        <h4>Average:{isNaN(average) ? 0 : average}</h4>
      
    </div>
  )
}

export default Fbstats
