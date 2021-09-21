export interface UserInterface {
  nome: string;
  sobrenome: string;
  cpf: string;
  email?: string;
  data_nascimento: string;
  sexo?: string;
  avatar?: string;
  status: string;
  ambiente: string;
  is_editor: number;
  user_name: string;
  biografia?: string;
  imagem_capa?: string;
  terms_accepted: number;
  cidade: string;
  clinica_ativa: string;
  cns?: string;
  cnes: string;
  configuracoes: [];
  crm: string;
  endereco: string;
  especialidade: string;
  estudante: boolean;
  farmacia_artesanal: boolean;
  iamspe: boolean;
  is_partner: boolean;
  nome_completo: string;
  perola_byington: boolean;
  sociedades: string;
  telefone?: string;
  token: string;
  uf: string;
  universidade: string;
  fabricante: string;
  user_type: string;
  total_of_prescriptions: number;
  total_of_prescripted_drugs: number;
  total_of_sms_prescriptions: number;
  synchronized: boolean;
  percentage_of_completed_profile: number;
  parceiros_id: number;
  filter_web_pki_certificates_by_cpf: boolean;
}

export interface GetUserInterface {
  data: { data: { attributes: UserInterface } };
}

export interface SearchUserInterface {
  user: UserInterface;
  userToken: string;
}
