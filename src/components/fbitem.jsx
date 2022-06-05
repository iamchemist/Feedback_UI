import React from 'react'
import { useContext } from 'react'
import Card from '../shared/card'
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import Fbcontext from '../context/fbcontext'

const Fbitem = ({fbiprop})=> {

  const {delefeedback} = useContext(Fbcontext)
  const {editfeedback} = useContext(Fbcontext)
   
  return (
    <Card>
    <div className='num-display'>{fbiprop.rating}</div>
    <button onClick={()=>delefeedback(fbiprop.id)} className='close'>
      <FaTimes color='purple' />
    </button>
    <button onClick={ () => editfeedback(fbiprop)} className="edit">
      <FaEdit color='purple' />
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