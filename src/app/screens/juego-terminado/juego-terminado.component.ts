import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-terminado',
  templateUrl: './juego-terminado.component.html',
  styleUrls: ['./juego-terminado.component.scss']
})
export class JuegoTerminadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

  irInicio(){
    
  }
}
