import { useState } from "react";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import Cidades from "./pages/Cidades";
import Funcionarios from "./pages/Funcionarios";
import Servicos from "./pages/Servicos";
import Equipamentos from "./pages/Equipamentos";
function App() {
  const [pagina, setPagina] = useState("inicio");
  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Menu setPagina={setPagina} />
      <hr />

      {pagina === "inicio" && <Inicio />}
      {pagina === "equipamentos" && <Equipamentos />}
      {pagina === "cidades" && <Cidades />}
      {pagina === "funcionarios" && <Funcionarios />}
      {pagina === "servicos" && <Servicos />}
    </div>
  );
}
export default App;
