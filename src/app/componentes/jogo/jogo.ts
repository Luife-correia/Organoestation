import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { JogoInterface } from './jogo.inteface';

@Component({
  selector: 'app-jogo',
  imports: [NgClass],
  templateUrl: './jogo.html',
  styleUrl: './jogo.css',
})
export class Jogo {

  jogo = input.required<JogoInterface>()

  alternarFavorito(){
    this.jogo().favorito = !this.jogo().favorito
  }

}
