import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interfaces';

@Component({
  selector: 'app-hereo-tarjeta',
  templateUrl: './hereo-tarjeta.component.html',
  styleUrls: ['./hereo-tarjeta.component.scss']
})
export class HereoTarjetaComponent  {

  @Input() heroe!: Heroe; //siempre va tener un Hereo

}
