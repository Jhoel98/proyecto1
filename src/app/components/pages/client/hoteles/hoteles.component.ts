import { Component, OnInit } from '@angular/core';
import {HotelesService} from "../../../../services/hoteles.service";


@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.sass']
})
export class HotelesComponent implements OnInit {

  constructor(servicioHoteles:HotelesService) {
    this.productos=servicioHoteles.listarHoteles();
  }

  pAct: number = 1;

  prueba: any;

  productos: any[];

  ngOnInit() {
  }

}
