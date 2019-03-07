import { Component, OnInit } from '@angular/core';

import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  app_version;
  constructor(public appVersion: AppVersion) { }

  ngOnInit() {
    this.app_version = this.appVersion.getVersionCode();
  }

}
