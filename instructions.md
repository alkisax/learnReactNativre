https://www.youtube.com/watch?v=bCpFbERgj7s

## εγκατάσταση appwrite
```bash
npx expo install react-native-appwrite react-native-url-polyfill
```

- για να βάλουμε το context wrap τώρα που δεν έχω main πάω στο app\_layout.jsx

για το build σε apk
```bash
npm i -g eas-cli
eas login 
```
τωρα θα χρειαστών τον expo.dev λογαριασμό μου

```bash
eas init
eas build --platform android
```