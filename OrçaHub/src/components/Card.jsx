function Card({ produto, onAdd }) {
  return (
    
      <div className="card-produto">
        
        <img
          className="card-img"
          src={produto.imagem}
          alt={produto.nome}
        />

        <h3 className="card-nome">{produto.nome}</h3>

        <p className="card-sku">SKU: {produto.sku}</p>

        <div className="card-footer">
          <span className="card-preco">
            R$ {produto.preco.toFixed(2)}
          </span>

          <button
            className="card-botao"
            onClick={() => onAdd(produto)}
          >
            Adicionar
          </button>
        </div>
      </div>
    
  );
}

export default Card;