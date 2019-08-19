import { Injectable } from '@angular/core';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';

@Injectable({
  providedIn: 'root'
})
export class PhonegapPushService {

  public pushObject: PushObject;

  constructor(private push: Push) { }

  checkPermission(){
    // to check if we have permission
    return this.push.hasPermission()
    .then((res: any) => {

      if (res.isEnabled) {
        console.log('We have permission to send push notifications');
        return true;
      } else {
        console.log('We do not have permission to send push notifications');
        return false;
      }

    }).catch(e=>console.error("Error in checkPermission()",e));
  }

  createChannel(id, description){

    // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
    this.push.createChannel({
      id:id,
      description: description,
      // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
      importance: 3
    }).then(() => console.log('Channel created'));
  }

  deleteChannel(id){
    // Delete a channel (Android O and above)
    this.push.deleteChannel(id).then(() => console.log(`Channel deleted for ID: ${id}`));

  }

  listChannels(){
    // Return a list of currently configured channels
    return this.push.listChannels().then((channels) =>{
      console.log('List of channels', channels)
      return channels;
    });

  }

  initPhonegapPush(){
    // to initialize push notifications
    const options: PushOptions = {
      android: {},
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    }

    // let pushObject:PushObject = this.push.init(options);

    // pushObject.on('registration').subscribe((registration: any) => {
    //         console.log('APNS Device Token registered', registration);
    //         alert(registration.registrationType + " Token: " + registration.registrationId);
  
    //       },error=>{
    //           console.error("ERROR in registration",error);
    //       });

    //pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

    //pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

 
    return new Promise((resolve, reject)=>{

      this.pushObject = this.push.init(options);
      //this.pushObject = pushObject;
      this.pushObject.on('registration').subscribe((registration: any) => {
        console.log('APNS Device Token registered', registration);
        resolve(registration);
      },error=>{
        console.error("ERROR in registration",error);
        reject(error);
      });
    });




  }
}


//[Log] APNS Device Token registered – {registrationId: "d8e24d1490f8ec0f356cfc31aff18a73d1cfb39caa5068d118d38cc19df1e313", registrationType: "APNS"} (cordova.js, line 1509)