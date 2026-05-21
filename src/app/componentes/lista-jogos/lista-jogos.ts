import { Component, OnInit } from '@angular/core';
import { GeneroDoJogo } from '../jogo/jogo.inteface';
import { Jogo } from '../jogo/jogo';

@Component({
  selector: 'app-lista-jogos',
  imports: [],
  templateUrl: './lista-jogos.html',
  styleUrl: './lista-jogos.css',
})
export class ListaJogos implements OnInit{
  generos: GeneroDoJogo[] = [];
  jogosPorGenero: Map<string, Jogo[]> = new Map();

  ngOnInit(): void {
    
  }
  
}
