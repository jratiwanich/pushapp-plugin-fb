import { Component, OnInit } from '@angular/core';

import {PushNotificationService} from '../services/push-notification.service';
import {PhonegapPushService} from '../services/phonegap-push.service';
import {PushsnsService} from '../services/pushsns.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public deviceToken;

  constructor( 
    private pushsrv: PushNotificationService,
    private phonegapsrv: PhonegapPushService,
    private pushsnssrv: PushsnsService
  ) {
   
  }

  ngOnInit(){


  }

  initPushSns(){
 
    this.pushsnssrv.init(this.deviceToken.registrationId);
  }

  subscribeTopic(){
    this.pushsnssrv.createTopic(
      "arn:aws:sns:us-east-1:971693144086:Test1Topic",
      "arn:aws:sns:us-east-1:971693144086:Test1Topic:0b9c051a-c794-403b-85b7-a5a7e1d815ea");

  }

  listChannel(){
    this.phonegapsrv.listChannels()
  }

  initPushNotification(){
    this.pushsrv.initPushNotification();
  }

  initPhonegapPush(){

    this.phonegapsrv.initPhonegapPush();

  //   try{
  //     this.phonegapsrv.initPhonegapPush();
  //     //this.deviceToken = await this.phonegapsrv.initPhonegapPush();
  //     if(this.deviceToken){

  //       alert(this.deviceToken.registrationType + " Token: " + this.deviceToken.registrationId);
  //       let check = await this.phonegapsrv.checkPermission();
  //       console.debug("initPhonegapPush()",check);
  //     }

  //     //this.phonegapsrv.pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

  //  //this.phonegapsrv.pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

  //   }catch(e){
  //     console.error("ERROR: initPhonegapPush()",e);
  //   }

  }



}
