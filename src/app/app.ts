import { Component, signal } from '@angular/core';
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Rodape } from "./componentes/rodape/rodape";
import { Jogo } from "./componentes/jogo/jogo";

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, Jogo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
