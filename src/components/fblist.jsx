import React from 'react'
import Fbitem from './fbitem'


const Fblist=({fblprop,handdel})=>{
    if(!fblprop || fblprop.length===0){
        return <p>No feedback Yet!!</p>
    }

  return (

    <div className='feedback-list'>
       {fblprop.map((rand)=>(
          <Fbitem
          key={rand.id}
          fbiprop={rand}
          handdelete={handdel}
          />
       ))
       }

    </div>
  )
}  
  


  export default Fblist
