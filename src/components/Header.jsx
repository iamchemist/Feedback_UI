import React from 'react'
import PropTypes from 'prop-types'


const Header = ({text,bgColor,textColor}) =>{
        const headstyle={
            backgroundColor:bgColor,
            color:textColor,
        }

  return (
    <header style={headstyle}>
        <div className='container'>
          <h2>{text}</h2> 
        </div>

    </header>

  )

  }
Header.propTypes ={
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
}

Header.defaultProps={
    text:'My UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}

export default Header