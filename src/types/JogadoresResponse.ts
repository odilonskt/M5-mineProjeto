export interface Time {
  id: number;
  nome: string;
  pais: string;
  gols: number;
  jogadores: Jogador[];
}

export interface Jogador {
  id: number;
  nome: string;
  idade: number;
  nacionalidade: string;
  timeId: number;

}

export interface JogadoresResponse {
  jogadores: Jogador[];
  // total: number;
  // paginas: number;
  // atual: number;
}