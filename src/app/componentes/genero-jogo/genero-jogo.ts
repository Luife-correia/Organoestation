import { Component, input } from '@angular/core';
import { Jogo } from "../jogo/jogo";
import { jogos } from '../../mock-jogos';

@Component({
  selector: 'app-genero-jogo',
  imports: [Jogo],
  templateUrl: './genero-jogo.html',
  styleUrl: './genero-jogo.css',
})
export class GeneroJogo {

/*   genero = input.required<GeneroJogo>();
 */  jogo = jogos[0]
}
