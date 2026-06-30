import { supabase } from "./supabase";

//Funcionario
export const funcionarioService = {
  async listar() {
    return await supabase.from("funcionarios").select("*");
  },

  async criar(funcionario) {
    return await supabase.from("funcionarios").insert([funcionario]);
  },

  async atualizar(id, funcionario) {
    return await supabase.from("funcionarios").update(funcionario).eq("id", id);
  },

  async excluir(id) {
    return await supabase.from("funcionarios").delete().eq("id", id);
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

  async atualizar(id, equipamento) {
    return await supabase.from("equipamentos").update(equipamento).eq("id", id);
  },

  async excluir(id) {
    return await supabase.from("equipamentos").delete().eq("id", id);
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

  async atualizar(id, cidade) {
    return await supabase.from("cidades").update(cidade).eq("id", id);
  },

  async excluir(id) {
    return await supabase.from("cidades").delete().eq("id", id);
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

  async atualizar(id, servico) {
    return await supabase.from("servicos").update(servico).eq("id", id);
  },

  async excluir(id) {
    return await supabase.from("servicos").delete().eq("id", id);
  },
};
