import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-pendingvisit',
    templateUrl: 'pendingvisit.html'
})
export class PendingVisitPage {


    items: any = [
        {
            id: "T1",
            date: "18-Oct-2017",
            call: "Contact"
        },
        {
            id: "T2",
            date: "2-Nov-2017",
            call: "Contact"
        },
        {
            id: "T6",
            date: "23-Jan-2018",
            call: "Contact"
        }
    ];

    constructor(public navCtrl: NavController){
        
    }

    goBack() {
        this.navCtrl.pop();
    }

}