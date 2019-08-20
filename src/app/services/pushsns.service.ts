import { Injectable } from '@angular/core';
//import {PushsnsPluginWeb } from 'pushsns-plugin';
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PushsnsService {

  private pushsns;

  constructor(){
    this.pushsns =   Plugins.PushsnsPlugin;
  }

  //constructor(private pushweb: PushsnsPluginWeb) { }

  init(tokenAPNS){
    if(this.platform.is('ios')){
      ///
    }else{
////
    }
    //{registrationId: "18621b25fc1506c6ca0791ab42a5153e612b0b77ed483a60fb9b2b35a5d229a2", registrationType: "APNS"} (cordova.js, line 1509)
    // this.pushweb.initSns({
    //   token: tokenAPNS,
    //   identityPoolId: "us-east-1:afbf1222-1bd2-4126-b34c-350054951686"
    // });

   // this.pushweb.initSns({token: "arn:aws:sns:us-east-1:971693144086:app/APNS_SANDBOX/PushApp"});
  }  
  
  createTopic(topic, endpoint){
    // this.pushweb.subscribeTopic({
    //   platformArn: "arn:aws:sns:us-east-1:971693144086:app/APNS_SANDBOX/PushApp", 
    //   topic: topic, 
    //   endpoint: endpoint});
  }
}
