import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes [] = [
    {
      icon: 'appstore',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon: 'american-football',
      name: 'Action-sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y router',
      redirecTo: '/botones'
    },
    {
      icon: 'card',
      name: 'card',
      redirecTo: '/ejercicio'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirecTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirecTo: '/date-time'
    },
    {
      icon: 'grid',
      name: 'Grid - Rows',
      redirecTo: '/grid'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componentes {
  icon: string;
  name: string;
  redirecTo: string;
}
