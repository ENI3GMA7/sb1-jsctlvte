export interface User {
  id: string;
  nome: string;
  email: string;
  total_produtos: number;
  saldo: number;
  ultimo_acesso?: string;
  data_registro?: string;
  status?: string;
}

export interface ApiResponse {
  items: User[];
  total: number;
  page: number;
  per_page: number;
}