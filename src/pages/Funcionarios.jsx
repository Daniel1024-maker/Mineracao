import { useState, useEffect } from "react";
import { funcionarioService } from "../services/api";
export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [salario, setSalario] = useState("");
  const [nome_cidade, setNome_cidade] = useState("");
  const [telefone, setTelefone] = useState("");

  const carregarFuncionarios = async () => {
    const { data, error } = await funcionarioService.listar();

    if (error) {
      console.error(error);
      return;
    }

    setFuncionarios(data);
  };

  useEffect(() => {
    const loadFuncionarios = async () => {
      try {
        const response = await funcionarioService.listar();
        setFuncionarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar Funcionários", error);
      }
    };
    loadFuncionarios();
  }, []);

  const cadastrar = async () => {
    const { error } = await funcionarioService.criar({
      nome,
      cargo,
      salario,
      telefone,
      nome_cidade,
    });

    if (error) {
      console.error(error);
      return;
    }

    setNome("");
    setCargo("");
    setSalario("");
    setTelefone("");
    setNome_cidade("");
    carregarFuncionarios();
  };
  return (
    <div>
      <h2>Gestão de Funcionários</h2>

      <div
        style={{
          marginBottom: "20px",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <h3>Novo Funcionário</h3>
        <input
          type="text"
          placeholder="Nome do Funcionário"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Salário"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Nome da Cidade"
          value={nome_cidade}
          onChange={(e) => setNome_cidade(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <h3>Funcionários Cadastrados</h3>
      <ul>
        {funcionarios.map((eq) => (
          <li key={eq.funcionarios_id}>
            (ID: {eq.funcionarios_id}) - <strong>{eq.nome}</strong> - Cargo:
            {eq.cargo} - Salário: {eq.salario} - Telefone: {eq.telefone} -
            Cidade:
            {eq.nome_cidade}
          </li>
        ))}
      </ul>
    </div>
  );
}
