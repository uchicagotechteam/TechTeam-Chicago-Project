import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewpagePage} from '../newpage/newpage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newpagePage = NewpagePage;
  searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController) {
      this.initializeItems();



  }


  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Venice',
      'Paris'


    ];
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

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
