import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMapsEvent, GoogleMap, GoogleMapOptions } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,private googleMaps:GoogleMaps) {

 let map =new GoogleMap('map');

  }


   
}


