export interface PacientInterface {
  // Pode ser um documento criptografado do paciente, por exemplo
  // Usamos essa propriedade para destinguir nomes iguais
  // (obrigatório)
  idExterno: string;
  // Nome do paciente (obrigatório)
  nome: string;
  // Nome social do paciente (opcional)
  nome_social?: string;
  // Endereço do paciente (opcional)
  endereco?: string;
  // Cidade do paciente (opcional)
  cidade?: string;
  // Telefone (obrigatório, DDD + digitos, somente números)
  telefone: string;
  // Usado no receituário de alto custo (Opcional)
  peso?: number;
  // Usado no receituário de alto custo (Opcional)
  altura?: number;
  // Usado no receituário de alto custo (Opcional)
  nome_mae?: string;
  // Usado no receituário de alto custo (Opcional)
  dificuldade_locomocao?: boolean;
}
