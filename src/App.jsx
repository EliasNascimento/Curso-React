import './App.css';
import React from 'react';
import Primeiro from './components/basicos/primeiro.jsx';
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/fragmento'
import Aleatorio from './components/basicos/Aleatorio.jsx';
import Card from './components/layout/Card.jsx';

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#04 - Desafio Aleatório">
                    <Aleatorio
                        min={1}
                        max={60}
                    />
                </Card>

                <Card titulo="#03 - Fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com parâmetro">
                    <ComParametro
                        titulo="Segundo Componente"
                        aluno="Elias"
                        nota={9.5}
                    />
                </Card>

                <Card titulo="#01 - Primeiro">
                    <Primeiro></Primeiro>
                </Card>

            </div>
        </div >
    );
};