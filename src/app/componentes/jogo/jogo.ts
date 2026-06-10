import { Component, input } from '@angular/core';
import { JogoInterface } from './jogo.inteface';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

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
