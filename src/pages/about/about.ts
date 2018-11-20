import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public descriptionClicked: boolean = false;
  public protectedClicked: boolean = false;
  public permittedClicked: boolean = false;
  public specialClicked: boolean = false;


  public onDescriptionClick() {
    this.descriptionClicked = !this.descriptionClicked;
  }

  public onProtectedClick() {
    this.protectedClicked = !this.protectedClicked;
  }

  public onPermittedClick() {
    this.permittedClicked = !this.permittedClicked;
  }

  public onSpecialClick() {
    this.specialClicked = !this.specialClicked;
  }



  constructor(public navCtrl: NavController) {

  }

}



