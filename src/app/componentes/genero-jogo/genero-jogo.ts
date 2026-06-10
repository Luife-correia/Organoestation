import { Component, input } from '@angular/core';
import { GeneroDoJogo } from '../jogo/jogo.inteface';
import { Jogo } from "../jogo/jogo";
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-genero-jogo',
  imports: [Jogo, NgClass],
  templateUrl: './genero-jogo.html',
  styleUrl: './genero-jogo.css',
})
export class GeneroJogo {

  genero = input.required<GeneroDoJogo>();
}
