import React from  'react'
import DiretaFilho from './DiretaFilho'

export default props =>{
    return(
        <div>
            <DiretaFilho nome="Junior" numero={20} nerd={true} />
            <DiretaFilho nome="gabriel" numero={17} nerd={false} />
        </div>
    )
}