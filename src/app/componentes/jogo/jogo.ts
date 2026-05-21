import { Component } from '@angular/core';

@Component({
  selector: 'app-jogo',
  imports: [],
  templateUrl: './jogo.html',
  styleUrl: './jogo.css',
})
export class Jogo {

  alternarFavorito(){
    this.jogo.favorito = !this.jogo.favorito
  }

  jogo = {
    nome: "Ben 10: Protector of Earth",
    desenvolvedor:"High Voltage Software",
    favorito: false,
    imagem:"https://static.wikia.nocookie.net/ben10/images/1/16/Protector_of_earth.PNG/revision/latest?cb=20120504065112&path-prefix=pt"
  }
}
