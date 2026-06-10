import { Component, OnInit } from '@angular/core';
import { GeneroDoJogo, JogoInterface } from '../jogo/jogo.inteface';
import { jogos } from '../../mock-jogos';
import { GeneroJogo } from "../genero-jogo/genero-jogo";

@Component({
  selector: 'app-lista-jogos',
  imports: [GeneroJogo],
  templateUrl: './lista-jogos.html',
  styleUrl: './lista-jogos.css',
})
export class ListaJogos implements OnInit {
  generos: GeneroDoJogo[] = [];
  jogosPorGenero: Map<string, JogoInterface[]> = new Map();

  ngOnInit() {
    this.jogosPorGenero = new Map();

    jogos.forEach((jogo) => {
      const generoId = jogo.genero.id
      if (!this.jogosPorGenero.has(generoId)) {
        this.jogosPorGenero.set(generoId, [])
      }
      this.jogosPorGenero.get(generoId)?.push(jogo)
    })

    this.generos = [
      {
        id: "action-adventure",
        value: "Action-adventure",
        jogos: this.jogosPorGenero.get("action-adventure") ?? []
      },
      {
        id: "hack-slash",
        value: "Hack and Slash",
        jogos: this.jogosPorGenero.get("hack-slash") ?? []
      },
      {
        id: "fighting",
        value: "Fighting",
        jogos: this.jogosPorGenero.get("fighting") ?? []
      },
      {
        id: "racing",
        value: "Racing",
        jogos: this.jogosPorGenero.get("racing") ?? []
      },
      {
        id: "rpg",
        value: "RPG",
        jogos: this.jogosPorGenero.get("rpg") ?? []
      },
      {
        id: "sports",
        value: "Sports",
        jogos: this.jogosPorGenero.get("sports") ?? []
      },
      {
        id: "survival-horror",
        value: "Survival horror",
        jogos: this.jogosPorGenero.get("survival-horror") ?? []
      },
      {
        id: "fps",
        value: "First-person shooter",
        jogos: this.jogosPorGenero.get("fps") ?? []
      }
    ]

    console.log(this.jogosPorGenero)

  }

}
