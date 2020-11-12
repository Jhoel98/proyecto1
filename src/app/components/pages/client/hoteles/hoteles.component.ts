import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.sass']
})
export class HotelesComponent implements OnInit {

  constructor() { }

  productos = [
    {
      "id" : 1,
      "nombre": "Hotel El Prado",
      "ubicacion": "Barranquilla",
      "descripcion" : "Somos un hotel histórico ubicado en el mejor sector de la ciudad, " +
        "formando parte del patrimonio nacional de Colombia. Ofrecemos 206 habitaciones amplias, " +
        "modernas y elegantes, distribuidas en área clásica, ejecutiva y cabaña.",
      "precio" : "175000"

    },
    {
      "id" : 2,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 3,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 4,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 5,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 6,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 7,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 8,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 9,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 10,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 11,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 12,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 13,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 14,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 15,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    },
    {
      "id" : 16,
      "nombre": "Hotel",
      "ubicacion": "",
      "descripcion" : "",
      "precio" : ""

    }
  ]

  ngOnInit() {
  }

}
