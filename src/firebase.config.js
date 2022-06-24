import {getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC0Tj2cdX0trl88nb1srUcGl-91Hm3QsJc",
    authDomain: "foodapp-5bc5b.firebaseapp.com",
    databaseURL: "https://foodapp-5bc5b-default-rtdb.firebaseio.com",
    projectId: "foodapp-5bc5b",
    storageBucket: "foodapp-5bc5b.appspot.com",
    messagingSenderId: "785403742366",
    appId: "1:785403742366:web:6a9950c1a556df19bd538f"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage };