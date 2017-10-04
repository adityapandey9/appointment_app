import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'todayvisit.html'
})
export class TodayVisitPage {
    
    items: any = [
        {
            id: "T1",
            date: "25-Step-2017",
            call: "Contact"
        },
        {
            id: "T5",
            date: "25-Step-2017",
            call: "Contact"
        },
        {
            id: "T3",
            date: "25-Step-2018",
            call: "Contact"
        }
    ];

    constructor(public navCtrl: NavController){

    }

    goBack() {
        this.navCtrl.pop();
    }

}