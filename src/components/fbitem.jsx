import React from 'react'
import { useState } from 'react'
import Card from '../shared/card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

const Fbitem = ({fbiprop,handdelete})=> {
   
  return (
    <Card>
    <div className='num-display'>{fbiprop.rating}</div>
    <button onClick={()=>handdelete(fbiprop.id)} className='close'>
      <FaTimes color='purple' />
    </button>
    <div className="text-display">
    {fbiprop.text}
    </div>
    </Card>
  )
}

Fbitem.propTypes={
    fbiprop:PropTypes.object.isRequired
}


export default Fbitem