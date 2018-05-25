import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public buttonClicked: boolean = false; //Whatever you want to initialise it as

  public onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
  }

  constructor(public navCtrl: NavController) {

  }

}



