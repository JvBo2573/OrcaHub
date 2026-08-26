import { PDFDownloadLink } from '@react-pdf/renderer';
import OrcamentoPdf from './OrcamentoPdf';

function Carrinho({ dados, setDados }) {

  const alterarQtd = (sku, tipo) => {
    setDados(prev => ({
      ...prev,
      produtos: prev.produtos.map(p => {
        if (p.sku === sku) {
          const novaQtd = tipo === 'mais' ? p.qtd + 1 : p.qtd - 1;
          return { ...p, qtd: Math.max(1, novaQtd) };
        }
        return p;
      })
    }));
  };

  const remover = (sku) => {
    setDados(prev => ({
      ...prev,
      produtos: prev.produtos.filter(p => p.sku !== sku)
    }));
  };

  const alterarDescontoItem = (sku, valor) => {
    setDados(prev => ({
      ...prev,
      produtos: prev.produtos.map(p =>
        p.sku === sku ? { ...p, desconto: Number(valor) } : p
      )
    }));
  };

  const subtotal = dados.produtos.reduce((acc, p) => {
    const precoComDesc = p.preco * (1 - (p.desconto || 0) / 100);
    return acc + precoComDesc * p.qtd;
  }, 0);

  const totalComDesconto = subtotal - (dados.desconto || 0);
  const totalFinal = totalComDesconto + (dados.acrescimo || 0);

  return (
    <div>
      <div className="container-carrinho">
        <h1 className="carrinho-titulo">Carrinho</h1>

        {dados.produtos.map((item) => (
            <div key={item.sku} className="item-carrinho">
            
            <div className="item-info">
                <p className="item-nome">{item.nome}</p>
                <span className="item-preco">R$ {item.preco}</span>
            </div>

            <div className="item-controles">
                <button onClick={() => alterarQtd(item.sku, 'menos')}>-</button>
                <span>{item.qtd}</span>
                <button onClick={() => alterarQtd(item.sku, 'mais')}>+</button>
            </div>

            <input
                className="input-desconto"
                type="number"
                placeholder="%"
                value={item.desconto || 0}
                onChange={(e) =>
                alterarDescontoItem(item.sku, e.target.value)
                }
            />

            <button className="btn-remover" onClick={() => remover(item.sku)}>
                ✕
            </button>
            </div>
        ))}

            <div className="resumo">
                <p>Subtotal: <strong>R$ {subtotal.toFixed(2)}</strong></p>

                <p>Desconto</p>
                <input
                className="input-geral"
                type="number"
                placeholder="Desconto (R$)"
                value={dados.desconto}
                onChange={(e) =>
                    setDados(prev => ({ ...prev, desconto: Number(e.target.value) }))
                }
                />
                
                <p>Acrescimo</p>
                <input
                className="input-geral"
                type="number"
                placeholder="Acréscimo (R$)"
                value={dados.acrescimo}
                onChange={(e) =>
                    setDados(prev => ({ ...prev, acrescimo: Number(e.target.value) }))
                }
                />

                <h2 className="total">
                Total: R$ {totalFinal.toFixed(2)}
                </h2>

                <div className="btn-pdf">
                <PDFDownloadLink
                    document={<OrcamentoPdf dados={dados} />}
                    fileName="orcamento.pdf"
                >
                    {({ loading }) =>
                    loading ? 'Gerando...' : 'Gerar PDF'
                    }
                </PDFDownloadLink>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Carrinho;