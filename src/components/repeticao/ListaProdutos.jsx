import React from 'react'
import Produtos from '../../data/produtos'

export default props => {

    const produtos = Produtos.map(item => {
        return (
            <li key={item.id}>
                {item.id} ) {item.nome} ->{item.preco}
            </li>
        );
    });

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {produtos}
            </ul>
        </div>
    );
}