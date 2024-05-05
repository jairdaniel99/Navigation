import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  navigateHome() {
    // navigate to home page
    this.navCtrl.navigateForward('/home');
  }
  navigateContact() {
    // navigate to contact page
    this.navCtrl.navigateForward('/contact');
  }

  ngOnInit(): void {}
}
