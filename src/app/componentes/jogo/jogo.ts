import { Component, input } from '@angular/core';
import { JogoInterface } from './jogo.inteface';

@Component({
  selector: 'app-jogo',
  imports: [],
  templateUrl: './jogo.html',
  styleUrl: './jogo.css',
})
export class Jogo {

  jogo = input.required<JogoInterface>()

  alternarFavorito(){
    this.jogo().favorito = !this.jogo().favorito
  }

}
