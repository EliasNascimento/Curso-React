import React from  'react'

export default props =>{
    return(
        <div>
            <div>{props.nome} </div>
            <div>{props.numero} </div>
            <div>{props.nerd ? 'Verdadeiro': 'Falso'} !</div>
        </div>
    )
}