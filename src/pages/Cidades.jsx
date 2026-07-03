import { useState, useEffect } from "react";
import { cidadeService } from "../services/api";
export default function Cidades() {
  const [cidades, setCidades] = useState([]);
  const [nome, setNome] = useState("");

  const carregarCidades = async () => {
    const { data, error } = await cidadeService.listar();

    if (error) {
      console.error(error);
      return;
    }

    setCidades(data);
  };

  useEffect(() => {
    const loadCidades = async () => {
      try {
        const response = await cidadeService.listar();
        setCidades(response.data);
      } catch (error) {
        console.error("Erro ao buscar Cidades", error);
      }
    };
    loadCidades();
  }, []);

  const cadastrar = async () => {
    const { error } = await cidadeService.criar({
      nome,
    });

    if (error) {
      console.error(error);
      return;
    }

    setNome("");
    carregarCidades();
  };
  return (
    <div>
      <h2>Gestão de Cidades</h2>

      <div
        style={{
          marginBottom: "20px",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <h3>Nova Cidade</h3>
        <input
          type="text"
          placeholder="Nome da Cidade"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <br />
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <h3>Cidades Cadastradas</h3>
      <ul>
        {cidades.map((eq) => (
          <li key={eq.cidade_id}>
            (ID: {eq.cidade_id}) - <strong>{eq.nome}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
