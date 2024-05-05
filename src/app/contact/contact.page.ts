import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  navigateHome() {
    // navigate to home page
    this.navCtrl.navigateForward('/home');
  }
  navigateAbout() {
    // navigate to about page
    this.navCtrl.navigateForward('/about');
  }

  ngOnInit(): void {}
}
