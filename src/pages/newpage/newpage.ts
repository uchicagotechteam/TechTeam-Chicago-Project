import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';


@Component({
  selector: 'page-newpage',
  templateUrl: 'newpage.html',
})
export class NewpagePage {

  public disease: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
    this.disease = navParams.get('disease')
    this.http.get('assets/data.json', {}, {})
      .then(data => {
        console.log("works");
        console.log(data["data"]);
      })
      .catch(error => {
        console.log("fails");
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });

  }


}
