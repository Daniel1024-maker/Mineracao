import { useState, useEffect } from "react";
import { equipamentoService } from "../services/api";
export default function Equipamentos() {
  const [equipamentos, setEquipamentos] = useState([]);
  const [nome, setNome] = useState("");
  const [setor, setSetor] = useState("");

  const carregarEquipamentos = async () => {
    const { data, error } = await equipamentoService.listar();

    if (error) {
      console.error(error);
      return;
    }

    setEquipamentos(data);
  };

  useEffect(() => {
    const loadEquipamentos = async () => {
      try {
        const response = await equipamentoService.listar();
        setEquipamentos(response.data);
      } catch (error) {
        console.error("Erro ao buscar Equipamentos", error);
      }
    };
    loadEquipamentos();
  }, []);

  const cadastrar = async () => {
    const { error } = await equipamentoService.criar({
      nome,
      setor,
    });

    if (error) {
      console.error(error);
      return;
    }

    setNome("");
    setSetor("");
    carregarEquipamentos();
  };

  return (
    <div>
      <h2>Gestão de Equipamentos</h2>

      <div
        style={{
          marginBottom: "20px",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <h3>Novo Equipamento</h3>
        <input
          type="text"
          placeholder="Nome do Equipamento"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Setor (Ex: Extração)"
          value={setor}
          onChange={(e) => setSetor(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <br />
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <h3>Equipamentos Cadastrados</h3>
      <ul>
        {equipamentos.map((eq) => (
          <li key={eq.equipamentos_id}>
            (ID: {eq.equipamentos_id}) - <strong>Nome: {eq.nome}</strong> -
            Setor: {eq.setor}
          </li>
        ))}
      </ul>
    </div>
  );
}
