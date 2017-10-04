import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    
    private loginForm: FormGroup;
    public isSubmit: boolean = false;

    constructor(public navCtrl: NavController, private formBuilder: FormBuilder){
        this.loginForm = this.formBuilder.group({
            userId: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    
    goToTab(){
        console.log("Data ", this.loginForm)
        if(!this.loginForm.valid){
            this.isSubmit = true;
            return
        }
        this.navCtrl.push(TabsPage);
    }
}