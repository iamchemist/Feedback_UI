import React from 'react'
import Fbitem from './fbitem'
import { useContext } from 'react'
import Fbcontext from '../context/fbcontext'

const Fblist=()=>{

  const {fbprop} = useContext(Fbcontext)


    if(!fbprop || fbprop.length===0){
        return <p>No feedback Yet!!</p>
    }
    return  (

      <div className='feedback-list'>
         {fbprop.map((rand)=>(
            <Fbitem
            key={rand.id}
            fbiprop={rand}
           
            />
         ))
         }
  
      </div>
    )
      

  // return (

  //   <div className='feedback-list'>
  //      {fbprop.map((rand)=>(
  //         <Fbitem
  //         key={rand.id}
  //         fbiprop={rand}
         
  //         />
  //      ))
  //      }

  //   </div>
  // )
}  
  


  export default Fblist
