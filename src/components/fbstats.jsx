import React from 'react'

function fbstats({fbsprop}) {

    let average= fbsprop.reduce((acc,cur)=>{
        return (acc +cur.rating)
    },0)/(fbsprop.length)


average=average.toFixed(1)
  return (
    <div className='feedback-stats'>
        <h4>{fbsprop.length} Reviews!!</h4>
        <h4>Average:{isNaN(average) ? 0 : average}</h4>
      
    </div>
  )
}

export default fbstats
