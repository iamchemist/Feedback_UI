import { createContext, useState, useEffect
 } from "react"
    const Fbcontext = createContext()


export const Fbprovider = ({children}) =>{

    const [fb,setfeedback] = useState([])   

    const [fbedit,setfeedbackedit] = useState({
        item:{},
        edit:false
    })


    useEffect(()=>{
        fetchFeedback()
    },[])

   //fetch feedback

   const fetchFeedback = async() =>{
       const response = await fetch('/feedback?_sort=id&_order=desc')

       const data = await response.json()
       setfeedback(data)
   }


    //set item to be updated
    const editfeedback = (item) =>{
        setfeedbackedit({
            item,
            edit:true
        })
    }


    const addfeedback= async(newfeedback)=>{

        const response= await fetch('/feedback',{
            method: 'POST',
            headers: {'Content-Type':'application/json'} ,
            body:JSON.stringify(newfeedback)

        })

        const data = await response.json()   //will give the new item that was added


        setfeedback([data,...fb])
      }

    //update feedback item
    
    const updateFeedback = async (id,updItem) =>{
        console.log(id,updItem);

        const response = await fetch(`/feedback/${id}`,{method:'PUT', headers: {
            'Content-Type':'application/json'
        },
            body:JSON.stringify(updItem)
        })

        const data = await response.json()
        setfeedback(fb.map((item)=> item.id===id ? {...item,...data} : item))

    }

    const delefeedback = async(id)=>{
        if(window.confirm('Are you sure to delete')){
          await fetch(`/feedback/${id}`,{method:'DELETE'})  

          setfeedback(fb.filter((ptem)=>(
            ptem.id!==id
          )))
        }
      }


    return (
        <Fbcontext.Provider
        value={{
            fbprop:fb,
            delefeedback,
            addfeedback,
            editfeedback,
            fbedit,
            updateFeedback,
        }}> 
        {children}
        </Fbcontext.Provider>
    )

}

export default Fbcontext