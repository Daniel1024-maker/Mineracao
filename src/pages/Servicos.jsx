import { useState, useEffect } from "react";
import { servicoService } from "../services/api";
export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  const [nome, setNome] = useState("");
  //const [setor, setSetor] = useState("");
  //const [cidade, setCidade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [duracao, setDuracao] = useState("");

  const carregarServicos = async () => {
    const { data, error } = await servicoService.listar();

    if (error) {
      console.error(error);
      return;
    }

    setServicos(data);
  };

  useEffect(() => {
    const loadServicos = async () => {
      try {
        const response = await servicoService.listar();
        setServicos(response.data);
      } catch (error) {
        console.error("Erro ao buscar Serviços", error);
      }
    };
    loadServicos();
  }, []);

  const cadastrar = async () => {
    const { error } = await servicoService.criar({
      nome,
      descricao,
      preco,
      duracao,
    });

    if (error) {
      console.error(error);
      return;
    }

    setNome("");
    setDescricao("");
    setPreco("");
    setDuracao("");
    carregarServicos();
  };
  return (
    <div>
      <h2>Gestão de Serviços</h2>

      <div
        style={{
          marginBottom: "20px",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <h3>Novo Serviço</h3>
        <input
          type="text"
          placeholder="Nome do Serviço"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Duração (AA/MM/DD)"
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <h3>Serviços Cadastrados</h3>
      <ul>
        {servicos.map((eq) => (
          <li key={eq.servicos_id}>
            (ID: {eq.servicos_id}) - <strong>{eq.nome}</strong> - Descrição:{" "}
            {eq.descricao} - Preço: {eq.preco} - Duração: {eq.duracao}
          </li>
        ))}
      </ul>
    </div>
  );
}
