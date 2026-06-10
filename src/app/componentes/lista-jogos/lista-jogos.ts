import { Component, OnInit } from '@angular/core';
import { GeneroDoJogo, JogoInterface } from '../jogo/jogo.inteface';
import { jogos } from '../../mock-jogos';
import { GeneroJogo } from "../genero-jogo/genero-jogo";

@Component({
  selector: 'app-lista-jogos',
  imports: [],
  templateUrl: './lista-jogos.html',
  styleUrl: './lista-jogos.css',
})
export class ListaJogos implements OnInit{
  generos: GeneroDoJogo[] = [];
  jogosPorGenero: Map<string, JogoInterface[]> = new Map();

  ngOnInit() {
    this.jogosPorGenero = new Map();

    jogos.forEach((jogo)=> {
      const generoId = jogo.genero.id
      if(!this.jogosPorGenero.has(generoId)){
        this.jogosPorGenero.set(generoId, [])
      }
      this.jogosPorGenero.get(generoId)?.push(jogo)
    })

    this.generos = [
      {
        id: "action-adventure",
        value: "Action-adventure",
        jogos: this.jogosPorGenero.get("action-adventure") ?? []
      }
    ]
    
  }

}
