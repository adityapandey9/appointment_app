import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { MissedVisitPage } from '../missedvisit/missedvisit';
import { PendingVisitPage } from '../pendingvisit/pendingvisit';
import { TodayVisitPage } from '../todayvisit/todayvisit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  openAlert(event){
    let name = event.target.innerHTML;
    let alert = this.alertCtrl.create({
      title: 'Sorry page ' + name +' is not implemented.',
      message: 'We will add it in near future',
      buttons: [
        {
          text: 'Okay!'
        }
      ]
    });
    alert.present();
  }

  goToMissedVisit(){
    this.navCtrl.push(MissedVisitPage);
  }

  goToPendingVisit(){
    this.navCtrl.push(PendingVisitPage);
  }

  goToTodayVisit(){
    this.navCtrl.push(TodayVisitPage);
  }

}
