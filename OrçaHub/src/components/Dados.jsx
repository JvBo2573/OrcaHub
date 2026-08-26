import '../App.css';

function Dados({dados, setDados}){
    return(
        <div className="containerDados">
            <h3>Dados do cliente</h3>

            <div className="row row-3">
                <input placeholder="Nome do cliente" 
                value={dados.cliente}
                onChange={(e) =>
                setDados({ ...dados, cliente: e.target.value })
                }
                />
                <input
                placeholder="CPF"
                value={dados.cpf}
                onChange={(e) =>
                setDados({ ...dados, cpf: e.target.value })
                }
                />
                <input
                placeholder="Telefone"
                value={dados.telefone}
                onChange={(e) =>
                setDados({ ...dados, telefone: e.target.value })
                }
                />
            </div>

            <div className="row row-2">
                <input
                placeholder="Email"
                value={dados.email}
                onChange={(e) =>
                setDados({ ...dados, email: e.target.value })
                }
                />
                <input
                type="date"
                value={dados.data}
                onChange={(e) =>
                    setDados({ ...dados, data: e.target.value })
                }
                />
            </div>

            <div className="row row-1">
                <input
                placeholder="Endereço"
                value={dados.endereco}
                onChange={(e) =>
                    setDados({ ...dados, endereco: e.target.value })
                }
                />
            </div>

            <div className="row">
                <textarea
                placeholder="Observações"
                value={dados.observacoes}
                onChange={(e) =>
                    setDados({ ...dados, observacoes: e.target.value })
                }
                />
            </div>
        </div>
    
    )
}

export default Dados