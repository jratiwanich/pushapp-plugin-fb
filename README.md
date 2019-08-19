### Install and update plugin
1. npm i pushsns-plugin
2. npm install
3. ionic build
4. ionic cordova platform update


## Using Capacitor

2. npx cap update
3. npm run build
4. npx cap copy 
5. npx cap open ios 
6. npx cap open android

### Test pushsns locally
1. open package.json
```
  "pushsns-plugin": "0.0.1",
```
2. Change it too
```
  "pushsns-plugin": "file:../pushsns-plugin",
```