import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Dados from './components/Dados';
import Carrinho from './components/Carrinho';
import './App.css';
import cimento from './assets/cimento.png';
import areia from './assets/areia.png';
import brita from './assets/brita.png';
import Footer from './components/Footer';

function App() {

  const [dados, setDados] = useState({
    cliente: '',
    cpf: '',
    telefone: '',
    email: '',
    data: '',
    endereco: '',
    observacoes: '',
    produtos: [],
    desconto: 0,
    acrescimo: 0
  });

  // ✅ Lista de produtos
  const produtos = [
    {
      nome: 'Cimento 50kg',
      sku: 'CIM123',
      preco: 35.90,
      imagem: cimento
    },
    {
      nome: 'Areia Média',
      sku: 'ARE456',
      preco: 120.00,
      imagem: areia
    },
    {
      nome: 'Brita 1',
      sku: 'BRI789',
      preco: 150.00,
      imagem: brita
    },
    {
      nome: 'Cimento 50kg',
      sku: 'CIM123',
      preco: 35.90,
      imagem: cimento
    },
    {
      nome: 'Areia Média',
      sku: 'ARE456',
      preco: 120.00,
      imagem: areia
    },
    {
      nome: 'Brita 1',
      sku: 'BRI789',
      preco: 150.00,
      imagem: brita
    },
    {
      nome: 'Cimento 50kg',
      sku: 'CIM123',
      preco: 35.90,
      imagem: cimento
    },
    {
      nome: 'Areia Média',
      sku: 'ARE456',
      preco: 120.00,
      imagem: areia
    },
    {
      nome: 'Brita 1',
      sku: 'BRI789',
      preco: 150.00,
      imagem: brita
    },
    {
      nome: 'Cimento 50kg',
      sku: 'CIM123',
      preco: 35.90,
      imagem: cimento
    },
    {
      nome: 'Areia Média',
      sku: 'ARE456',
      preco: 120.00,
      imagem: areia
    },
    {
      nome: 'Brita 1',
      sku: 'BRI789',
      preco: 150.00,
      imagem: brita
    },
  ];

  return (
    
    <div>
      <Header/>
      <Dados dados={dados} setDados={setDados} />

      <div className='container-main'>
        <div className="card">
        {produtos.map((produto, index) => (
          <Card
            key={index}
            produto={produto}
            onAdd={(produto) => {
              setDados(prev => {
                const existe = prev.produtos.find(p => p.sku === produto.sku);

                if (existe) {
                  return {
                    ...prev,
                    produtos: prev.produtos.map(p =>
                      p.sku === produto.sku
                        ? { ...p, qtd: p.qtd + 1 }
                        : p
                    )
                  };
                }

                return {
                  ...prev,
                  produtos: [
                    ...prev.produtos,
                    { ...produto, qtd: 1, desconto: 0 }
                  ]
                };
              });
            }}
          />
        ))}
        </div>

        <div className='carrinho'>
          <Carrinho dados={dados} setDados={setDados} />
        </div>
        
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;