import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController) {
    // this.initializeItems();
  }
}

window.onload = nodeList; // loads the nodeList upon window load


function togglePlotSum() { // shows or hides the summaries for each play upon mouse click
    var playid = this.id;

    var play1 = document.getElementById("romeo_plot");
    var play2 = document.getElementById("hamlet_plot");
    var play3 = document.getElementById("much_plot");
    var play4 = document.getElementById("temp_plot");

    switch (playid) { // switches on each plot id and makes summary visible if hidden and hidden if visible
            case "romeo":
                if (play1.className === "hidden") {
                    play1.className = "show";
                }
                else if (play1.className === "show") {
                    play1.className = "hidden";
                }
                break;

            case "hamlet":
                if (play2.className === "hidden") {
                    play2.className = "show";
                }
                else if (play2.className === "show") {
                    play2.className = "hidden";
                }
                break;

            case "much":
                if (play3.className === "hidden") {
                    play3.className = "show";
                }
                else if (play3.className === "show") {
                    play3.className = "hidden";
                }
            break;

            case "temp":
                if (play4.className === "hidden") {
                    play4.className = "show";
                }
                else if (play4.className === "show") {
                    play4.className = "hidden";
                }
            break;
        }
    }

function nodeList() {  // creates nodeList and event listeners
    var header = document.getElementsByClassName("playheader"); // gets elements with class "playheader"
    for (var i = 0; i < header.length; i++) {
        var play = header[i];

        play.addEventListener("click", togglePlotSum, false);
    }
}

