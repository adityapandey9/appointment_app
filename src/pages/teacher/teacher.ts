import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html'
})
export class TeacherPage {
  items: any = [
    {
      teacher: 'Teacher1',
      visit: '07-March-2017',
      call: 'Call'
    },
    {
      teacher: 'Teacher2',
      visit: '02-Jan-2017',
      call: 'Call'
    },
    {
      teacher: 'Teacher3',
      visit: '09-Step-2017',
      call: 'Call'
    },
    {
      teacher: 'Teacher4',
      visit: '15-Oct-2016',
      call: 'Call'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
