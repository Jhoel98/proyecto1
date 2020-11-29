import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import {environment} from "../../../../../environments/environment";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';



@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html',
  styleUrls: ['./sitios.component.sass']
})

export class SitiosComponent implements OnInit {

  constructor() { }

  map: Mapboxgl.Map;

  geojson = [
    {
      "lng": -74.80014673888058,
      "lat": 10.998807453339134,
    },
    {
      "lng": -74.81139491004522,
      "lat": 11.009969899889827,
    },
    {
      "lng": -75.68586252109519,
      "lat": 10.13142907642576,
    },
    {
      "lng": -75.5492782033022,
      "lat": 10.423726090977006,
    },
    {
      "lng": -75.75133132109757,
      "lat": 9.73689018518086,
    },
    {
      "lng": -75.87450702313998,
      "lat": 9.783095775915298,
    },
    {
      "lng": -75.57102622113258,
      "lat": 6.20371538414175,
    },
    {
      "lng": -75.57068580028594,
      "lat": 6.207333098764158,
    },
    {
      "lng": -74.05425400332365,
      "lat": 4.6856816290506105,
    },
    {
      "lng": -74.04823422951928,
      "lat": 4.679925188116398,
    },
    {
      "lng": -74.06499509166706,
      "lat": 4.64024769537023,
    },
    {
      "lng": -72.50400582110676,
      "lat": 7.882327514447223,
    },
    {
      "lng": -72.50699380945011,
      "lat": 7.8882719500545075,
    },
    {
      "lng": -72.50508780945006,
      "lat": 7.882748186001963,
    },
    {
      "lng": -73.11626331497509,
      "lat": 7.107804183466947,
    },
    {
      "lng": -73.12675421718468,
      "lat": 7.113989105945129,
    },
    {
      "lng": -73.11131988552731,
      "lat": 7.114058541111437,
    },

  ];



  mapbox(){

    Mapboxgl.accessToken = environment.accessTokenMapbox;
    this.map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.8023408,10.9987759],
      zoom: 17,
    });

    this.map.addControl(
      new MapboxGeocoder({
        accessToken: Mapboxgl.accessToken,
        Mapboxgl: Mapboxgl
      })
    );

    this.map.addControl(new Mapboxgl.NavigationControl());



    for (let i=0; i<this.geojson.length; i++){
      this.createMarker(this.geojson[i]["lng"],this.geojson[i]["lat"]);
    }

  }

  createMarker(lng:number, lat:number){
    const marker = new Mapboxgl.Marker().setLngLat([lng,lat]).addTo(this.map);

  }



  ngOnInit(){
    this.mapbox();
  }
}
