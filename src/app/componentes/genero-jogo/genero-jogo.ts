import { Component, input } from '@angular/core';
import { jogos } from '../../mock-jogos';
import { GeneroDoJogo } from '../jogo/jogo.inteface';
import { Jogo } from "../jogo/jogo";

@Component({
  selector: 'app-genero-jogo',
  imports: [Jogo],
  templateUrl: './genero-jogo.html',
  styleUrl: './genero-jogo.css',
})
export class GeneroJogo {

  genero = input.required<GeneroDoJogo>();
  jogo = jogos[0]
}
