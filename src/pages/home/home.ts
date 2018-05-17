import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewpagePage } from '../newpage/newpage';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  newpagePage = NewpagePage;
  searchQuery: string = '';
  items: string[];
  allItems: string[];

  constructor(public navCtrl: NavController, public http: HTTP) {
      this.http.get('assets/data.json', {}, {})
        .then(data => {
          console.log("succ1");
          this.allItems = Object.keys(JSON.parse(data.data)["data"]["diseases"]);

          console.log("succ2");
          this.items = this.allItems.sort();
        })
        .catch(error => {
          console.log("fails");
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);

        });


  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.items = this.allItems;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) == 0);
      })
      this.items = this.items.sort()
    }
  }



  GotoNewPage(item) {
    this.navCtrl.push(NewpagePage, {
      disease: item
    });
  }



}
