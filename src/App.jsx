import './App.css';
import React from 'react';
import Primeiro from './components/basicos/primeiro.jsx';
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/fragmento'
import Aleatorio from './components/basicos/Aleatorio.jsx';
import Card from './components/layout/Card.jsx';
import Familia from './components/basicos/Familia'
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">

                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 - Comunicação direta" color="#59323c">
                    <DiretaPai ></DiretaPai>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Elias' }}></UsuarioInfo>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={21}></ParOuImpar>
                </Card>

                <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição Alunos" color="#4ecd32">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componentes com filhos" color="#00C8F8">
                    <Familia sobrenome="Ferreira" />
                </Card>

                <Card titulo="#04 - Desafio Aleatório">
                    <Aleatorio
                        min={1}
                        max={60}
                    />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Segundo Componente"
                        aluno="Elias"
                        nota={9.5}
                    />
                </Card>

                <Card titulo="#01 - Primeiro" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>

            </div>
        </div >
    );
};