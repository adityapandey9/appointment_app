import { Component } from '@angular/core';

import { TeacherPage } from '../teacher/teacher';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TeacherPage;

  constructor() {

  }
}
