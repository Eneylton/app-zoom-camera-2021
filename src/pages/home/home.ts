import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fotos: any = ['01.jpg','02.jpg','03.jpg','04.jpg'];

  constructor(public navCtrl: NavController) {

  }

}
