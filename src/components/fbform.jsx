import React from 'react'
import Card from '../shared/card'
import { useState } from 'react'
import Button from '../Data/Button'
import Ratingselect from '../shared/ratingselect'
import {useContext,useEffect} from 'react'
import Fbcontext from '../context/fbcontext'

function Fbform() {

    const [pext,setText]=useState('')
    const [message,Setmessage] = useState('Minimum 10 characters')
    const [btnDisabled,setbtnDisabled] = useState(true)
    const [rating,setRating] =useState(10)

    
    const {addfeedback,fbedit,updateFeedback} = useContext(Fbcontext)
    
    //useEffect runs each time fbedit changes
    useEffect(()=>{
        if(fbedit.edit===true){
            setbtnDisabled(false)
            setText(fbedit.item.text)
            setRating(fbedit.item.rating)
        }

    },[fbedit])

    const handletext = (e)=>{
        if(pext===''){
            Setmessage('Minimum 10 characters')
            setbtnDisabled(true)
        }
        else if(pext !==' ' && pext.trim().length<10)
        {
            Setmessage('Minimum 10 characters')
            setbtnDisabled(true)
        }
        else{
            Setmessage(null)
            setbtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(pext.trim().length >= 10){
            const newfeedback={
            text:pext,
            rating
            }

            if(fbedit.edit===true){
                updateFeedback(fbedit.item.id,newfeedback)
            }
            else{
                addfeedback(newfeedback)
            }

            
            setText('')
        }

    }


  return (
  <Card>
         <form onSubmit={handleSubmit}>
             <h4>How do you feel about the feedback UI?</h4>
             <Ratingselect select={(rating)=>setRating(rating)} />
             <div className='input-group'>
                 <input
                 onChange={handletext}
                 type='text'
                 value={pext}
                 placeholder='Type here'
                 />
                <Button type='submit' version='secondary' isDisabled={btnDisabled}>Send</Button>
                 
             </div>

             {message && <div className='message'>{message}</div>}
         </form>



  </Card>
    
    
  )
}
export default Fbform

