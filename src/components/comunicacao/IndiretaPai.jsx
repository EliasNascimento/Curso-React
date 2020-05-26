import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?') // vai retornar um array com duas posições: o primeiro é o valor em sí e a segunda posição é uma função que irá alterar esse valor;
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    
    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span> {nome} </span>
                <span><strong> {idade} </strong></span>
                <span> {nerd ? 'Verdadeiro' : 'False'} </span>
            </div>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}