import { supabase } from "./supabase";

//Funcionario
export const funcionarioService = {
  async listar() {
    return await supabase.from("funcionarios").select("*");
  },

  async criar(funcionario) {
    return await supabase.from("funcionarios").insert([funcionario]);
  },
};

//Equipamento
export const equipamentoService = {
  async listar() {
    return await supabase.from("equipamentos").select("*");
  },

  async criar(equipamento) {
    return await supabase.from("equipamentos").insert([equipamento]);
  },
};

//Cidade
export const cidadeService = {
  async listar() {
    return await supabase.from("cidades").select("*");
  },

  async criar(cidade) {
    return await supabase.from("cidades").insert([cidade]);
  },
};

//Serviço
export const servicoService = {
  async listar() {
    return await supabase.from("servicos").select("*");
  },

  async criar(servico) {
    return await supabase.from("servicos").insert([servico]);
  },
};
