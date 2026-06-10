import { Jogo } from "./jogo";

export interface JogoInterface{
    nome: string;
    desenvolvedor: string;
    favorito: boolean;
    genero: GeneroDoJogo;
    imagem: string;

}

export interface GeneroDoJogo {
    id: string;
    value: string;
    jogos: JogoInterface[]
}