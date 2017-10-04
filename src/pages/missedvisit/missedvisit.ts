import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-missedvisit',
  templateUrl: 'missedvisit.html'
})
export class MissedVisitPage {

  items: any = [
    {
      id: "Teacher1",
      date: "18-Sept-2017",
      call: "Contact"
    },
    {
      id: "Teacher2",
      date: "2-April-2017",
      call: "Contact"
    },
    {
      id: "Teacher3",
      date: "23-March-2017",
      call: "Contact"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  goBack(){
    this.navCtrl.pop();
  }

}
