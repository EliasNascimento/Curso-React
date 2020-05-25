import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return(
        <span>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Alice" {...props}/>
            <FamiliaMembro nome= "Gustavo" sobrenome="Silva"/>
        </span>
    )
}